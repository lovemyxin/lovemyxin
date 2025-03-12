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
	return ls.join("/");
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
				if(pid>='a'&&pid<='z'){
					fen=fen+" "+"b";
				}else{
					fen=fen+" "+"w";
				}

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
				
				selects.push({
					x: x,
					y: y
				});
				targets.length = 0;

				let content = aspectToSvg(svg, aspect, selects, targets, view);
				document.querySelector("#board").innerHTML = content;
				useAddClickFunction(svg, aspect, view, selects, targets, steps, initFen);

			};
		}
	});
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