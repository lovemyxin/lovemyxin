"use strict";const 八大排局 = [{"Id": 1,"Name": "","Fen": "4ck3/2P1P4/5r3/6C2/6C2/6R1R/9/p2p5/4p4/3K2B2 w"}, {"Id": 2,"Name": "","Fen": "2bak4/4a4/4b4/9/6NRR/2B6/1rP1P4/3pB4/4p4/3K5 w"}, {"Id": 3,"Name": "","Fen": "2bak4/4a4/4b4/9/6NRR/2B6/1rP1P3N/3pB4/4p4/3K5 w"}, {"Id": 4,"Name": "","Fen": "2bak4/4a4/4b4/9/6NRR/2B6/1rP1P3P/3pB4/4p4/3K5 w"}, {"Id": 5,"Name": "","Fen": "4ck3/2r1P4/2P2r3/7C1/7C1/7R1/7R1/1p2B4/3p1p3/4K4 w"}, {"Id": 6,"Name": "","Fen": "4ck3/1r2P4/2P2r3/7C1/7C1/7R1/7R1/1p2B4/3p1p3/4K4 w"}, {"Id": 7,"Name": "","Fen": "4ck3/1r2P4/1P3r3/7C1/7C1/7R1/7R1/1p2B4/3p1p3/4K4 w"}, {"Id": 8,"Name": "","Fen": "4ck3/3PP4/5r3/7C1/8C/7R1/6P1R/3p4B/4p4/3K5 w"}, {"Id": 9,"Name": "","Fen": "4ck3/3PP4/b4r3/8C/8C/7R1/6P1R/3p5/4p4/3K5 w"}, {"Id": 10,"Name": "","Fen": "4ck3/2P1P4/5r3/9/p7C/p6RR/p8/3p5/4p4/3K5 w"}, {"Id": 11,"Name": "","Fen": "4ck3/2P1P4/5r3/7C1/p7C/p6RR/p8/3p5/4p4/3K5 w"}, {"Id": 12,"Name": "","Fen": "4rk3/3P5/4bP3/9/9/9/9/4p2C1/3p1p3/4K1RR1 w"}, {"Id": 13,"Name": "","Fen": "4rk3/3P5/4bP3/9/9/8P/9/1p2p2C1/3p1p3/4K1RR1 w"}, {"Id": 14,"Name": "","Fen": "1r1k1C1R1/1P1n1P3/6P1b/9/c8/9/4P4/9/3p1r3/4K1p2 w"}, {"Id": 15,"Name": "","Fen": "1r1k1CR2/1P1n1P3/6P2/9/8c/9/4P4/9/3p1r3/4K2p1 w"}, {"Id": 16,"Name": "","Fen": "1r1k1CR2/1P3P3/6P2/c5p2/6b2/9/4P4/9/3p1r3/4K4 w"}, {"Id": 17,"Name": "","Fen": "1r1k1CR2/1P1N1P3/6P2/c8/2b6/2p6/4P4/9/3p1r3/4K4 w"}, {"Id": 18,"Name": "","Fen": "1r1k1CR2/1P3P3/6P2/c8/9/9/4P4/6p2/3p1r3/4K4 w"}, {"Id": 19,"Name": "","Fen": "1r1k1CR2/1P1N1P3/6P2/9/c5b2/9/4P1p2/9/3p1r3/4K4 w"}, {"Id": 20,"Name": "","Fen": "1r1k1CR2/1P1N1P3/b5P2/9/c8/9/4P1p2/9/3p1r3/4K4 w"}, {"Id": 21,"Name": "","Fen": "1r1k1CR2/1P1N1P3/6P2/8c/9/9/4P1p2/9/3p1r3/4K4 w"}, {"Id": 22,"Name": "","Fen": "3k5/4R4/4b3C/9/1P4RCc/6B2/9/4p4/3pp2p1/5K3 w"}, {"Id": 23,"Name": "","Fen": "3k5/4R4/4b3C/9/1PP3RCc/6B2/9/B3p4/3pp2p1/5K3 w"}, {"Id": 24,"Name": "","Fen": "3k5/4R4/4b3C/P8/1P4RCc/6B2/9/4p4/3pp2p1/5K3 w"}, {"Id": 25,"Name": "","Fen": "3k5/4P3C/4b4/2P6/6RCc/6B2/9/4p4/3pp4/5K1p1 w"}, {"Id": 26,"Name": "","Fen": "4k4/3P5/4b3C/6RCc/6c2/9/9/3N3N1/4p1p2/3p1K3 w"}, {"Id": 27,"Name": "","Fen": "4k4/3P5/4b3C/6RCc/6cP1/p8/P8/3N3N1/4p1p2/3p1K3 w"}, {"Id": 28,"Name": "","Fen": "4k4/3P5/2P1b3C/6RCc/6c2/9/9/3N3N1/4p1p2/3p1K3 w"}, {"Id": 29,"Name": "","Fen": "3k5/4R4/4b3C/9/PP4RCc/6B2/9/4p4/3pp2p1/5K3 w"}, {"Id": 30,"Name": "","Fen": "3k5/4R4/4b3C/P8/1P4RCc/2P3B2/9/4p4/3pp2p1/5K3 w"}, {"Id": 31,"Name": "","Fen": "3k5/4R4/4b3C/9/1P4RCc/P1P3B2/9/4p4/3pp2p1/5K3 w"}, {"Id": 32,"Name": "","Fen": "3k5/4R4/4b3C/6RCc/5P3/6B2/9/4p4/3pp2p1/5K3 w"}, {"Id": 33,"Name": "","Fen": "1rPrk4/2P6/4b4/9/9/9/9/9/3p3pR/4K4 w"}, {"Id": 34,"Name": "","Fen": "r1P1k4/2P4R1/4b4/9/9/9/9/9/3p3p1/4K4 w"}, {"Id": 35,"Name": "","Fen": "1r1ck4/3P5/3Pb2PR/9/7P1/9/P8/9/3p5/4K4 w"}, {"Id": 36,"Name": "","Fen": "1rPrk4/7R1/4b4/9/9/9/6P2/9/5p3/4KA3 w"}, {"Id": 37,"Name": "","Fen": "1rPrk4/8R/4b1C2/9/9/9/9/9/3p5/4K4 w"}, {"Id": 38,"Name": "","Fen": "r2ck4/3P5/3Pb2PR/8P/9/8P/9/9/3p5/4K4 w"}, {"Id": 39,"Name": "","Fen": "r1Prk4/2P4R1/2P1b4/9/2P6/9/1p7/8B/3p3p1/4K4 w"}, {"Id": 40,"Name": "","Fen": "r2ck4/3P5/3Pb2PR/9/2P4P1/9/9/9/3p5/4K4 w"}, {"Id": 41,"Name": "","Fen": "5k3/P3P3P/5r2c/8p/9/4P1P2/9/7C1/2pp3C1/4K2R1 w"}, {"Id": 42,"Name": "","Fen": "5k3/P3P3P/5r2c/8p/9/9/4P1P2/7C1/2pp3C1/4K2R1 w"}, {"Id": 43,"Name": "","Fen": "5k3/4P3P/5r2c/9/9/6P2/4P3P/7C1/2pp3C1/4K2R1 w"}, {"Id": 44,"Name": "","Fen": "5k3/4P3P/5r2c/9/9/9/4P1P1P/7C1/2pp3C1/4K2R1 w"}];