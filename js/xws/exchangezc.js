"use strict";

function fenToAspect(fen) {
	let ps = fen.split(' ');
	let view = ps[1];
	let f = ps[0];

	let a = [];
	for (let i = 0; i < 10; i++) {
		a.push([]);
		for (let j = 0; j < 9; j++) {
			a[i].push('');
		}
	}

	let ls = f.split('/');
	for (let i = 0; i < 10; i++) {
		let l = ls[i];
		let k = 0;
		for (let j = 0; j < l.length; j++) {
			if (l[j] >= '1' && l[j] <= '9') {
				k += parseInt(l[j]);
			} else {
				a[i][k] = l[j];
				k++;
			}
		}
	}
	return [a, view];
}

function aspectToFen(aspect, view, steps) {
	let ls = [];
	let v = "w";
	if (view == "w" && steps.length % 2 == 1 || view == "b" && steps.length % 2 == 0) {
		v = "b";
	}

	for (let i = 0; i < 10; i++) {
		let c = 0;
		let l = "";
		for (let j = 0; j < 9; j++) {
			if (aspect[i][j] == "") {
				c++;
			} else {
				if (c != 0) {
					l += c;
					c = 0;
				}
				l += aspect[i][j];
			}
		}
		if (c != 0) {
			l += c;
			c = 0;
		}
		ls.push(l);
	}
	return ls.join("/") + " " + v;
}

function aspectToSvg(svg, aspect, selects, targets, view) {
	let cs = [];
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 9; j++) {
			if (aspect[i][j] != "") {
				let x = i;
				let y = j;
				if (view == "b") {
					x = 9 - x;
					y = 8 - y;
				}
				let left = 25 + y * 50;
				let top = 25 + x * 50;

				cs.push(`<use xlink:href="#${aspect[i][j]}" transform="translate(${left},${top})" />`);
			}
		}
	}

	selects.forEach((select, index, array) => {
		let x = select.x;
		let y = select.y;
		if (view == "b") {
			x = 9 - x;
			y = 8 - y;
		}
		let left = 25 + y * 50;
		let top = 25 + x * 50;
		cs.push(`<use xlink:href="#select" transform="translate(${left},${top})" />`);
	});

	targets.forEach((target, index, array) => {
		let x = target.x;
		let y = target.y;
		if (view == "b") {
			x = 9 - x;
			y = 8 - y;
		}
		let left = 25 + y * 50;
		let top = 25 + x * 50;
		cs.push(`<use xlink:href="#target" transform="translate(${left},${top})" />`);
	});

	return svg.replace(`{{content}}`, cs.join(""));
}

function useAddClickFunction(svg, aspect, view, selects, targets, steps, initFen) {
	let dict = ["#r", "#n", "#b", "#a", "#k", "#c", "#p",
		"#R", "#N", "#B", "#A", "#K", "#C", "#P"
	];
	let uses = document.querySelectorAll("use");
	uses.forEach((use, index, array) => {
		let id = use.attributes["xlink:href"].nodeValue;
		let transform = use.attributes["transform"].nodeValue;
		if (dict.indexOf(id) !== -1) {
			use.onclick = () => {

				let pid = id[1];
				if (pid >= 'a' && pid <= 'z') {
					if (view == 'w' && steps.length % 2 == 0 || view == 'b' && steps.length % 2 == 1) {
						return;
					}
				} else if (pid >= 'A' && pid <= 'Z') {
					if (view == 'w' && steps.length % 2 == 1 || view == 'b' && steps.length % 2 == 0) {
						return;
					}
				}

				let reg = /[0-9]+/g;
				let res = transform.match(reg);

				if (res.length != 2) {
					return;
				}

				let x = Math.floor((res[1] - 25) / 50);
				let y = Math.floor((res[0] - 25) / 50);
				if (view == "b") {
					x = 9 - x;
					y = 8 - y;
				}

				if (selects.length == 1 && selects[0].x == x && selects[0].y == y) {
					selects.length = 0;
					targets.length = 0;
					let content = aspectToSvg(svg, aspect, selects, targets, view);
					document.querySelector("#board").innerHTML = content;
					useAddClickFunction(svg, aspect, view, selects, targets, steps, initFen);
					return;
				}

				let fen = aspectToFen(aspect, view, steps);

				let moves = getLegalMoves(fen, x, y);

				selects.length = 0;
				selects.push({
					x: x,
					y: y
				});

				targets.length = 0;
				moves.forEach((value, index, array) => {
					targets.push(value);
				});

				let content = aspectToSvg(svg, aspect, selects, targets, view);
				document.querySelector("#board").innerHTML = content;
				useAddClickFunction(svg, aspect, view, selects, targets, steps, initFen);
			};
		} else if (id == "#target") {
			use.onclick = (e) => {

				let reg = /[0-9]+/g;
				let res = transform.match(reg);

				if (res.length != 2) {
					return;
				}

				let x = Math.floor((res[1] - 25) / 50);
				let y = Math.floor((res[0] - 25) / 50);
				if (view == "b") {
					x = 9 - x;
					y = 8 - y;
				}

				aspect[x][y] = aspect[selects[0].x][selects[0].y];
				aspect[selects[0].x][selects[0].y] = "";
				steps.push({
					x1: selects[0].x,
					y1: selects[0].y,
					x2: x,
					y2: y
				});
				selects.push({
					x: x,
					y: y
				});
				targets.length = 0;

				let content = aspectToSvg(svg, aspect, selects, targets, view);
				document.querySelector("#board").innerHTML = content;
				useAddClickFunction(svg, aspect, view, selects, targets, steps, initFen);

				let fen = aspectToFen(aspect, view, steps);
				let over = isOver(fen);
				if (over) {
					mui.toast("玩家取得胜利!", {
						duration: 2500,
						type: "div"
					});
					return;
				}
				if (steps.length >= 4) {
					let legal = isMoveLegal(initFen, steps, "玩家");
					if (!legal) {
						return;
					}
				}

				setTimeout(function() {
					//玩家走的棋不违规而且没有绝杀AI,轮到AI走棋
					let aiMove = getAiMove(fen);
					if(aiMove==null){
						mui.alert("AI选择投子认负!","提示","确定");
						return;
					}
					
					selects.length=0;
					targets.length=0;
					let x1=aiMove.x1,y1=aiMove.y1,x2=aiMove.x2,y2=aiMove.y2;
					selects.push({x:x1,y:y1});
					selects.push({x:x2,y:y2});
					aspect[x2][y2]=aspect[x1][y1];
					aspect[x1][y1]="";
					steps.push(aiMove);
					
					let content = aspectToSvg(svg, aspect, selects, targets, view);
					document.querySelector("#board").innerHTML = content;
					useAddClickFunction(svg, aspect, view, selects, targets, steps, initFen);

					//判断AI招法是否违规
					let over = isOver(aspectToFen(aspect, view, steps));
					if (over) {
						mui.toast("AI取得胜利!", {
							duration: 2500,
							type: "div"
						});
						return;
					}
					if (steps.length >= 4) {
						let legal = isMoveLegal(initFen, steps, "AI");
						if (!legal) {
							return;
						}
					}

				}, 200);

			};
		}
	});
}

function isMoveLegal(initFen, steps, camp) {
	try {
		let flag = true;
		let mls = [];
		steps.forEach((step, index, array) => {
			let ml = "";
			ml += String.fromCharCode(step.y1 + 97);
			ml += (9 - step.x1);
			ml += String.fromCharCode(step.y2 + 97);
			ml += (9 - step.x2);
			mls.push(ml);
		});

		let url = `https://www.chessdb.cn/chessdb.php?action=rulecheck&board=${initFen}&movelist=${mls.join("|")}`;

		let http = new XMLHttpRequest();
		http.timeout=500;
		http.open("get", url, true);
		http.onreadystatechange = () => {
			if (http.readyState == 4 && http.status) {
				let result = http.responseText.trim();
				if (result.startsWith("3")) {
					mui.alert(`根据亚洲棋规,${camp}长打作负!`, "提示", "确定");
					flag = false;
				}
			}
		};
		http.send();
		return flag;
	} catch (e) {
		console.log(e);
		return true;
	}
}

function getAiMove(fen) {
	let yunku = false;
	let mr = {};
	try {
		let url = `https://www.chessdb.cn/chessdb.php?action=queryall&learn=1&showall=1&board=${fen}`;
		let http = new XMLHttpRequest();
		http.timeout=500;
		http.open("get", url, true);
		http.onreadystatechange = () => {
			if (http.readyState == 4 && http.status) {
				let result = http.responseText.trim();
				if (!result.startsWith("move")) {
					return;
				}
				yunku = true;
				let lines = result.split("|");
				let moves = [];
				lines.forEach((line, index, array) => {
					let move = {};
					let ps = line.split(',');
					ps.forEach((p, idx, arr) => {
						let as = p.split(':');
						switch (as[0]) {
							case "move":
								move["move"] = as[1];
								break;
							case "score":
								move["score"] = as[1];
								break;
							case "rank":
								move["rank"] = as[1];
								break;
						}
					});
					if (move["score"] != "??") {
						move["score"] = parseInt(move["score"]);
						move["rank"] = parseInt(move["rank"]);
						moves.push(move);
					}
				});

				if (moves.length > 1) {
					while (moves[moves.length - 1].score != moves[0].score) {
						moves.length = moves.length - 1;
					}
				}

				if (moves.length == 0) {
					yunku = false;
					return;
				}

				let idx = Math.floor(Math.random() * moves.length);
				let y1 = moves[idx].move.charCodeAt(0) - 97;
				let y2 = moves[idx].move.charCodeAt(2) - 97;
				let x1 = 9 - (moves[idx].move.charCodeAt(1) - 48);
				let x2 = 9 - (moves[idx].move.charCodeAt(3) - 48);

				mr = {
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2
				};
			}
		};
		http.send();
	} catch (e) {
		console.log(e);
	}

	//云库不可用或者没有存储此局面,使用小巫师进行搜索
	if (!yunku) {
		try {
			let position = new Position();
			position.fromFen(fen);
			let search = new Search(position);
			//小巫师思考1200ms
			let mv = search.searchMain(30, 1200);
			let src = SRC(mv);
			let dst = DST(mv);
			let x1 = RANK_Y(src) - 3,
				y1 = FILE_X(src) - 3;
			let x2 = RANK_Y(dst) - 3,
				y2 = FILE_X(dst) - 3;
			mr = {
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2
			};
		} catch (e) {
			console.log(e);
			return null;
		}
	}

	return mr;
}

function getLegalMoves(fen, x, y) {
	let position = new Position();
	position.fromFen(fen);
	let moves = position.generateMoves();
	let res = [];
	moves.forEach((value, index, array) => {
		let src = SRC(value);
		let dst = DST(value);
		let x1 = RANK_Y(src) - 3,
			y1 = FILE_X(src) - 3;
		let x2 = RANK_Y(dst) - 3,
			y2 = FILE_X(dst) - 3;
		if (x1 == x && y1 == y) {
			if (position.makeMove(value)) {
				position.undoMakeMove();
				res.push({
					x: x2,
					y: y2
				});
			}
		}
	});
	return res;
}

function isOver(fen) {
	let position = new Position();
	position.fromFen(fen);
	let moves = position.generateMoves();
	let flag = true;
	moves.forEach((value, index, array) => {
		if (!flag) {
			return;
		}
		let src = SRC(value);
		let dst = DST(value);
		let x1 = RANK_Y(src) - 3,
			y1 = FILE_X(src) - 3;
		let x2 = RANK_Y(dst) - 3,
			y2 = FILE_X(dst) - 3;
		if (position.makeMove(value)) {
			position.undoMakeMove();
			flag = false;
			return;
		}
	});
	return flag;
}