"use strict";const 残局攻杀=[{"Id":1,"Name":"","Fen":"2b1k1b2/4a3N/5a3/4r2P1/9/9/2p5R/9/4A4/4K4 b"},{"Id":2,"Name":"","Fen":"2rk2b2/1R7/3Pb4/9/4P1p1p/P8/5r3/9/9/3AKAB2 w"},{"Id":3,"Name":"","Fen":"4k4/4a4/2R1b4/p1p5p/4r1p2/2P6/P5P1P/4B4/4K4/2B2A3 w"},{"Id":4,"Name":"","Fen":"5c3/4a4/4k4/pR6P/3n1P3/5p3/P7P/3A5/2n1A4/2B2KB2 w"},{"Id":5,"Name":"","Fen":"4kab2/4a4/4b4/8P/9/2r6/3p1p3/2C1R4/4A4/4K4 b"},{"Id":6,"Name":"","Fen":"4k4/9/n6r1/p2P5/8R/9/8P/9/4A4/2BAK4 w"},{"Id":7,"Name":"","Fen":"2b1k4/4a4/4ba3/8P/4r4/9/2pp1R3/4C4/9/5KB2 b"},{"Id":8,"Name":"","Fen":"3ak4/4aP3/9/4RP2p/p8/6B2/3p1r3/8B/9/3AKA3 w"},{"Id":9,"Name":"","Fen":"2b1ka3/9/3P5/9/9/P3c3R/4r4/3AB4/1n2A4/3CK1B2 w"},{"Id":10,"Name":"","Fen":"3k1ab2/9/5a3/9/P5b2/2B6/9/1r1A1p3/1p1R5/2B1KA3 b"},{"Id":11,"Name":"","Fen":"2b1kab2/4a4/9/pn2p3p/5C3/P2C2B2/3N4P/N1r6/4A4/2BK1A3 b"},{"Id":12,"Name":"","Fen":"4k1b2/4a4/4b4/6N2/p1p1P4/6P2/7n1/4BA2R/4AK3/6r2 w"},{"Id":13,"Name":"","Fen":"4kab2/9/5a3/6r2/P5b2/1R4N2/9/B3BA3/2n1A4/5K3 w"},{"Id":14,"Name":"","Fen":"3a1k3/2N1a4/8b/p3Pn3/9/2B4p1/5r3/3AB4/4A4/4K1R2 w"},{"Id":15,"Name":"","Fen":"3ak4/4a4/2r6/5P3/4R1N2/9/6p2/c4A3/9/3AK4 w"},{"Id":16,"Name":"","Fen":"3a4R/4ak3/9/3N4p/2b1P4/5r2P/4p4/4BA3/2n1A4/5KB2 w"},{"Id":17,"Name":"","Fen":"3k1a3/4a4/4P1N2/4R4/3r5/9/1p1pc4/B2AB4/4A4/4K4 w"},{"Id":18,"Name":"","Fen":"4k1b2/4a4/5a3/5P3/7r1/3R2N2/9/4BA3/2pcK4/2B6 w"},{"Id":19,"Name":"","Fen":"3ak1b1R/9/2c1ba3/9/p3P4/9/P3N4/B3B4/9/3AKA1r1 w"},{"Id":20,"Name":"","Fen":"3a1kb2/4a1N2/3n5/3RP3p/p1b2r3/6P2/9/4B4/4A4/4KAB2 w"},{"Id":21,"Name":"","Fen":"2bak4/4a4/4b1n2/p1R3p1p/9/2N1p1P2/P7P/6r2/9/2BAKA3 w"},{"Id":22,"Name":"","Fen":"Cr2k4/P3a4/9/4R3p/9/9/8P/8B/3K5/2n6 b"},{"Id":23,"Name":"","Fen":"3aka3/9/9/p7p/1R1N5/P8/n2r5/4B4/4A4/4K1B2 w"},{"Id":24,"Name":"","Fen":"2bak4/4a4/9/8p/p2N2b2/P2R5/2P1P3P/r8/4A4/2cK1A3 w"},{"Id":25,"Name":"","Fen":"2b1ka3/4aP3/4b4/N2P3R1/9/9/1p4r2/4nA3/9/3AK4 b"},{"Id":26,"Name":"","Fen":"4k4/C8/b1N1ran2/p7p/5P3/9/2P5P/B1R6/9/5K3 b"},{"Id":27,"Name":"","Fen":"2bk1a3/2P1a4/4b4/p4R2p/2p1C1p2/4P4/P7P/7rn/4A4/3A1KB2 b"},{"Id":28,"Name":"","Fen":"3aka3/9/4N4/4r3p/3R5/6p2/P8/9/4An3/4K1B2 w"},{"Id":29,"Name":"","Fen":"4ka3/4a4/9/4p4/2R6/p5N2/9/4r4/4A4/c1BAK4 w"},{"Id":30,"Name":"","Fen":"2bak4/4a4/4b4/N1P5P/9/4R1B2/P2n5/9/3KA4/6r2 b"},{"Id":31,"Name":"","Fen":"2baka3/9/4b4/pR3P2p/2c6/9/P2n2R1P/4B3r/4A4/2BAK4 b"},{"Id":32,"Name":"","Fen":"2ba1kb2/4a4/9/1Pp6/4P1p1p/2P1C4/c6nP/4BAr2/C3A4/1R2K1B2 b"},{"Id":33,"Name":"","Fen":"4kab2/4a4/C1n1b4/p1p2r2p/9/2PN5/P6RP/6c2/4A4/2BAK1B2 w"},{"Id":34,"Name":"","Fen":"4kab2/4a4/bc7/1n7/4p1p2/5RP2/2P1P3P/4N1N2/3r5/3AKAB2 b"},{"Id":35,"Name":"","Fen":"3ak1b2/4a4/2R6/p3p3p/9/3NPn3/P4r2P/4CA3/9/4KABc1 w"},{"Id":36,"Name":"","Fen":"2Nk5/4a4/4n4/p1p6/6b2/2P2R1p1/P3c2r1/4BC3/4A4/2BAK4 w"},{"Id":37,"Name":"","Fen":"3aka3/9/n3b4/8R/2b6/cr2p4/4P3P/2C1B1N2/9/2BAKA3 w"},{"Id":38,"Name":"","Fen":"3ak4/4a4/4b4/6R2/C7p/2N6/1r5nc/4B3B/4A4/3K1A3 w"},{"Id":39,"Name":"","Fen":"5a1C1/3ka4/4b4/p8/2p6/r5R2/2n1N2c1/3AB4/4A4/2B1K4 w"},{"Id":40,"Name":"","Fen":"3k1ab2/2N6/1RCa5/p3p1p1p/9/9/P7P/9/4Ac3/2rAK1B2 w"},{"Id":41,"Name":"","Fen":"3akab2/7cR/4b4/7r1/3N1Pp2/2P6/P7P/9/4A4/3AK4 b"},{"Id":42,"Name":"","Fen":"1C1k1a3/4a4/2P1b4/4p3p/6p2/2p1c4/6P1P/2N1B4/4A1r2/4KR3 w"},{"Id":43,"Name":"","Fen":"3ak4/4a4/4P4/C7R/8p/1r7/p7P/3A5/3K5/4cA3 w"},{"Id":44,"Name":"","Fen":"3k1a3/4a4/4P4/p7p/4r4/6R2/n5C1c/4B4/4A4/4KAB2 w"},{"Id":45,"Name":"","Fen":"5a2C/3ka4/4b4/p4R3/1np3b2/9/P1P4r1/4B4/4A4/2BAK4 w"},{"Id":46,"Name":"","Fen":"3akab1C/2P6/1R6b/3r5/3c5/9/p8/4B4/4K4/6B2 b"},{"Id":47,"Name":"","Fen":"2b2k3/1R2C4/9/p8/8p/P5P2/4pc3/9/9/2BrNK3 w"},{"Id":48,"Name":"","Fen":"9/2C2k3/3a1a3/5r3/4P4/8p/6R2/1p2B4/4A4/3AK3c w"},{"Id":49,"Name":"","Fen":"3ak1c2/4a4/4b2r1/4N3R/9/6B2/2p1P4/9/4AK3/3A5 b"},{"Id":50,"Name":"","Fen":"3aka1rC/8R/9/4P4/9/9/4n4/9/9/3K5 w"},{"Id":51,"Name":"","Fen":"7R1/4ak3/3ab4/9/2b6/4r1B2/9/5C3/4A4/3AK1B2 w"},{"Id":52,"Name":"","Fen":"5Rb2/4k4/4ba3/4p3p/9/9/8r/C8/4A4/2BAK4 w"},{"Id":53,"Name":"","Fen":"3ak4/4a4/2R6/p3c4/9/P1B5p/9/4C1r1B/4A4/3AK4 w"},{"Id":54,"Name":"","Fen":"2b1k4/4a4/c8/8p/6b2/9/4P3P/2r2A2N/9/1R2KAB2 b"},{"Id":55,"Name":"","Fen":"5k3/9/4ra3/p8/9/9/P6RP/5K3/9/5A2c b"},{"Id":56,"Name":"","Fen":"2Rak4/4aP3/4c4/5P3/9/9/5r3/B8/9/4K4 b"},{"Id":57,"Name":"","Fen":"3ak4/4a4/7r1/5R3/p7p/9/9/2nA5/3C5/2BAK1B2 w"},{"Id":58,"Name":"","Fen":"2b1ka3/4a4/4bc3/6r2/3NR4/9/P7P/9/4A4/3AK4 b"},{"Id":59,"Name":"","Fen":"2caka3/r8/4b4/3R5/p7p/1C7/P8/4B4/4A4/2BAK4 w"},{"Id":60,"Name":"","Fen":"2b1k4/4a4/4c3N/8R/6r2/9/9/3K5/9/3A2B2 b"},{"Id":61,"Name":"","Fen":"3ak4/4a4/9/9/9/9/2R1rp3/4C4/4A4/n1BA1K3 w"},{"Id":62,"Name":"","Fen":"3ak4/4a4/3cN4/5r2p/5N3/2P6/3R5/5A3/5K3/2cA5 w"},{"Id":63,"Name":"","Fen":"3k1ab2/2N1a4/4b4/4n3p/p5n2/2B6/5NR2/4KA3/6C2/6r2 b"},{"Id":64,"Name":"","Fen":"3a3R1/5kN2/5a3/p2rp4/9/cN7/2P1n4/4B4/4A4/2BAK4 w"},{"Id":65,"Name":"","Fen":"4R4/5k3/9/4n1p1p/4n4/2B6/4r3P/9/4AC3/3AK1B2 b"},{"Id":66,"Name":"","Fen":"3k1ab2/4a1N2/b4n3/4p4/9/6P2/n3P3P/1C3R2B/4K4/3r5 b"},{"Id":67,"Name":"","Fen":"3ak4/4a4/b2rb3n/p7p/2p6/9/4P4/2c1B4/1C2A2C1/2BA1KR2 w"},{"Id":68,"Name":"","Fen":"4kab2/4a4/4b1R2/c3p3p/9/9/8P/2C1C1N2/r3A4/2c2KB2 b"},{"Id":69,"Name":"","Fen":"2bakab2/6rc1/9/p1p1C3p/1R7/2P6/P3P3P/7C1/4A4/2BAK1c2 b"},{"Id":70,"Name":"","Fen":"2Ca5/4k4/9/6n2/8p/2r6/9/3R5/2C1A4/4KAB1c w"},{"Id":71,"Name":"","Fen":"2ba2b2/C4c3/3k2C2/p2r4p/9/4R4/P7P/3A5/9/4KAB1c b"},{"Id":72,"Name":"","Fen":"2b1k4/4a4/4ba3/p1p1N3p/9/P1P1P1C1P/6R2/3ABK3/1c5r1/2B5c b"},{"Id":73,"Name":"","Fen":"2bak4/4a4/4b4/p1C5p/1C2Rn3/9/c3c3P/N4r3/9/2B1KA3 b"},{"Id":74,"Name":"","Fen":"2bak4/4a4/4b4/5C3/4CRp2/p8/r8/3nB4/4K4/5A3 w"},{"Id":75,"Name":"","Fen":"9/4a4/2C1ka3/2p6/5P3/4cR3/P1P1r3P/9/5K3/2Bc2B2 b"},{"Id":76,"Name":"","Fen":"3k5/9/2ra1a3/p7p/6p2/P2R5/6r1P/4C4/4C4/3AKAB2 w"},{"Id":77,"Name":"","Fen":"2b1k4/5c3/3a5/3NP4/7C1/2B1p4/5n3/3A5/4A4/4K4 b"},{"Id":78,"Name":"","Fen":"2b6/4k4/4b4/8p/N1n6/5N3/2p5P/4B4/5K3/3c1A3 b"},{"Id":79,"Name":"","Fen":"2bak4/4a4/9/7C1/6b2/4p1N2/1n3c2P/4B4/4A4/2B1KA3 b"},{"Id":80,"Name":"","Fen":"5k3/4a4/9/CP7/8p/7Nn/3c5/4B4/4A4/3K1AB2 w"},{"Id":81,"Name":"","Fen":"3k1ab2/4a4/4b4/p8/2p2Cp2/P1P1c4/4Nn2P/4B4/4AK3/3A2B2 b"},{"Id":82,"Name":"","Fen":"4k4/9/4b4/3c5/7P1/9/1N3p3/2n2A3/2C1A4/4K4 b"},{"Id":83,"Name":"","Fen":"3ak1b2/3Pa4/2c1b4/1N1P5/9/2C6/1p3p3/B8/4A1n2/3A1KB2 w"},{"Id":84,"Name":"","Fen":"5k3/4C4/4b4/2PN5/3c5/9/2n6/4p4/4A4/4K4 b"},{"Id":85,"Name":"","Fen":"5a3/4k4/3Pba3/1N1C4p/6b2/9/9/5A3/3p5/4KnB1c w"},{"Id":86,"Name":"","Fen":"9/3k5/5a2b/5c3/4N4/P6c1/9/3p4B/4K4/4C4 w"},{"Id":87,"Name":"","Fen":"3ak2n1/4a4/b3b4/3np1p1p/3N1c3/6P2/4P3P/1C2B4/2C6/2BAKA3 w"},{"Id":88,"Name":"","Fen":"1C1k1ab2/4a4/2n1b4/7c1/4N4/6B2/C6pp/4B4/4A4/3AK4 w"},{"Id":89,"Name":"","Fen":"3k1ab2/2N1a4/7c1/3C4p/p5b2/6N2/2n5P/4B4/4A4/1cBAK4 b"},{"Id":90,"Name":"","Fen":"4kab2/4a4/4b4/9/p3p4/2B3P2/P1n6/2NC5/4A1Nc1/2BAK3c b"},{"Id":91,"Name":"","Fen":"2b1kabC1/4a3N/9/3PP4/9/2c1n4/9/Nc7/4A4/2BAK4 b"},{"Id":92,"Name":"","Fen":"2baka3/9/4b4/p7C/9/4P1p2/6c1P/9/4A4/3AK4 b"},{"Id":93,"Name":"","Fen":"9/1C1Pak3/C2ab3b/3P5/3n5/2B1n4/6p2/4BA3/4A4/3K5 w"},{"Id":94,"Name":"","Fen":"4ka3/4a4/7n1/p7p/2p2P3/4cC3/2P5P/4B1C2/4A4/3AK4 w"},{"Id":95,"Name":"","Fen":"3ac1b2/3ka4/9/9/9/2B3N2/8P/5p3/3p3C1/5K3 b"},{"Id":96,"Name":"","Fen":"2C1kab2/4a4/7C1/p7P/3np4/2P6/P3c4/4B4/4A4/3K1AB2 w"},{"Id":97,"Name":"","Fen":"C1na1kb2/4a4/9/2P4P1/2b6/9/4p4/4B4/4A4/2B1KA3 w"},{"Id":98,"Name":"","Fen":"2bak4/3Pa4/4b1P2/5C3/9/5cB2/2p4C1/Bn4p2/4A4/3AK4 w"},{"Id":99,"Name":"","Fen":"2bak4/4a4/4b4/9/C8/1C2P2pp/P8/2cA5/4K4/1c3AB2 b"},{"Id":100,"Name":"","Fen":"3k5/4a4/b7b/3P1P3/9/3cp2CC/7c1/4B4/4A4/2BA1K3 w"},{"Id":101,"Name":"","Fen":"4k3C/3PaP3/5a3/9/4n4/6B2/5p3/9/9/2BK5 w"},{"Id":102,"Name":"","Fen":"3akn3/4a4/nP5r1/6P2/2R1R3p/9/8c/3AB4/9/4KAB2 w"},{"Id":103,"Name":"","Fen":"3aka3/9/4n4/2n3p2/8R/P3R4/r6p1/4B4/4A4/2B1KA3 w"},{"Id":104,"Name":"","Fen":"C3kab2/9/3ab4/p3p4/1r7/P3P1r2/4R3P/5C3/4A4/3AK4 b"},{"Id":105,"Name":"","Fen":"2bak4/4a2r1/8b/9/R5p2/9/4P3P/3rB4/9/2BAKR3 b"},{"Id":106,"Name":"","Fen":"2b1ka3/5R3/3rb4/2R6/8p/7r1/8P/4B4/4A4/2B1KA3 w"},{"Id":107,"Name":"","Fen":"4kab2/4a4/4b4/p2P5/3R5/2N6/P4R3/8B/2p4r1/1r1A1KB2 b"},{"Id":108,"Name":"","Fen":"2r1ka3/3Pa2r1/9/4P4/9/9/9/4B1R2/c3A4/1R1A1K3 w"},{"Id":109,"Name":"","Fen":"5a3/4k4/3a5/4r4/1rbR3PP/5C3/9/2p1B4/4A4/2B1KA3 b"},{"Id":110,"Name":"","Fen":"4kab2/2P1a4/9/p7p/6p2/3n3r1/PR4P1P/4B4/3rA4/R3KAB2 w"},{"Id":111,"Name":"","Fen":"2c1ka3/4a4/6R2/4R4/9/2P6/9/B2A1A3/7rp/4K3c w"},{"Id":112,"Name":"","Fen":"2bak4/4a4/9/p7R/6b2/1rP6/P2RP2rP/4B4/9/3AK1B2 b"},{"Id":113,"Name":"","Fen":"3ak1b2/4a4/4b4/p7p/9/2P3r2/P3R3P/3R5/2c1A2n1/2BK1A3 w"},{"Id":114,"Name":"","Fen":"4kab2/4a4/9/p1R3R1p/2b1P4/9/P1P2r2P/N3B4/3r5/2B1KA3 b"},{"Id":115,"Name":"","Fen":"2bakr3/4a4/n3b1n2/R3p1p1p/9/2BN5/P3P1P1P/Cr5N1/9/2BK1A1R1 b"},{"Id":116,"Name":"","Fen":"2bak1r2/4a4/2C1b4/p4R2p/2p1p4/5NP2/P1P1P3P/4C4/9/3rNKB2 b"},{"Id":117,"Name":"","Fen":"3rkab2/4a4/2n1b2R1/p1p1p3p/9/2P3P2/PcC1P3P/N5N2/9/1RBrCKB2 b"},{"Id":118,"Name":"","Fen":"3ak1b2/4a4/4b4/9/PP2R4/9/r7r/3A5/1R1KN4/9 b"},{"Id":119,"Name":"","Fen":"2b1ka3/9/b3r4/p1R5p/9/4n1r2/P7P/4B4/4A4/1R2KAB2 w"},{"Id":120,"Name":"","Fen":"1c2ka3/4a4/5R3/4R4/9/p2r5/P8/3AB4/9/4KA3 w"},{"Id":121,"Name":"","Fen":"4kab2/5R3/2nrb4/pR6p/6p2/3p5/P5P1P/9/4A4/2c1K1B2 w"},{"Id":122,"Name":"","Fen":"3k2b2/4acN2/3ab4/3N5/p1pn1P3/9/P2n4P/3AB4/4A2C1/2B1K4 w"},{"Id":123,"Name":"","Fen":"2bak4/4a2c1/4b4/pC1N4p/5Nn2/2P2nB1P/P8/3A5/9/2BAK4 w"},{"Id":124,"Name":"","Fen":"4kab2/4a4/4b4/4P4/4pn1P1/Pp4P2/5n1cC/4B1N2/4A4/3AK1B2 b"},{"Id":125,"Name":"","Fen":"3a1ab2/5kc2/9/p1p1P3p/4CNb2/2PNn4/P8/4B4/4K4/5cB2 w"},{"Id":126,"Name":"","Fen":"4kab2/4a4/4b4/4c4/4n2P1/9/C1N2p3/3AB1nN1/4A4/3K5 b"},{"Id":127,"Name":"","Fen":"4kab2/5cN2/3C5/3N5/5P3/6B1P/1n1n1p3/4pA2B/4A4/4K4 b"},{"Id":128,"Name":"","Fen":"2b1k4/2n1a4/3a4b/P1P1c3C/3N5/2N6/5p2n/4B4/4A4/2BAK4 w"},{"Id":129,"Name":"","Fen":"2bak4/4a4/6c2/p7p/5cb2/2N6/P3P1n1P/4B1N2/4A2C1/2BAK4 w"},{"Id":130,"Name":"","Fen":"3ak4/4a4/4b1n2/2PN2N1p/4p1b2/1p7/2c1Pn2P/4BA3/3C5/4KAB2 w"},{"Id":131,"Name":"","Fen":"3ak1b2/4a4/4b4/N5p2/9/2p1pnPN1/Pn3C2P/2c1B4/4A4/2BAK4 b"},{"Id":132,"Name":"","Fen":"4kab2/4a4/4b4/p4Cn2/2n6/P1B5P/5p3/8N/9/2BAKA3 b"},{"Id":133,"Name":"","Fen":"2bak4/2Nca4/b8/p4N2p/3P5/8P/c8/B4A3/9/4KAB2 w"},{"Id":134,"Name":"","Fen":"N1P1kab2/4a1c2/6nNb/8P/9/6B2/p8/5A3/9/2B1KA3 w"},{"Id":135,"Name":"","Fen":"2bak4/4a4/4b4/3N4p/C5n2/P3p4/6n2/9/4A4/3AK4 b"},{"Id":136,"Name":"","Fen":"3ak4/4a4/N5P2/5N3/4P4/9/c5n2/4BAp2/4A4/2B2K3 w"},{"Id":137,"Name":"","Fen":"2bak4/4a4/3nb4/C7p/5N3/N3P3c/2P6/2nAB2c1/6C2/2B1K4 w"},{"Id":138,"Name":"","Fen":"4kab2/4a4/9/p1n1N1PCp/1C7/9/5N3/B1n1B4/5K3/c5c2 w"},{"Id":139,"Name":"","Fen":"2ba1ab2/4k4/2n6/p7p/4Cn3/2p2N3/P1c1P3c/2N1B4/3C5/3AKAB2 w"},{"Id":140,"Name":"","Fen":"1Cbak4/4a4/2c1b2c1/9/3P4p/1N1n5/7nP/3AB1N2/5C3/2B1KA3 b"},{"Id":141,"Name":"","Fen":"3a2b2/N3a4/1C2k4/4p3p/2b6/9/4P1n2/3CB1N2/4A2r1/2BA1K2c w"},{"Id":142,"Name":"","Fen":"5ab2/C4k3/1N1ab4/5P2p/5c3/1C4B2/3n5/9/4A1n2/5K3 w"},{"Id":143,"Name":"","Fen":"3a1a3/4kc3/b8/p7p/1C1P5/3p5/P3PnC1P/3NB4/6c2/2BAK4 w"},{"Id":144,"Name":"","Fen":"4kab2/2n1a4/4b4/4n4/4C3p/2P3N2/3c5/4B4/3CA4/2BAK4 w"},{"Id":145,"Name":"","Fen":"4k4/4a4/5a2b/2N3P2/9/9/4cC3/4BnC2/3K5/2B1c4 w"},{"Id":146,"Name":"","Fen":"5a3/C2kan3/2N5b/9/P1C1p3p/3p2P2/1c7/9/9/1cBAKAB2 w"},{"Id":147,"Name":"","Fen":"2bakab2/9/4c4/2C1p3p/2n2n3/6N2/4P3P/1p2B1C2/4A4/2BAK4 w"},{"Id":148,"Name":"","Fen":"3a5/4k4/1N2bC3/8p/P1pnp1c2/6B2/2P5n/4C4/9/2BAKA3 w"},{"Id":149,"Name":"","Fen":"2bak4/4a4/3cb1c2/9/3P3N1/n8/5C2C/4B1p2/4A4/2BAK4 w"},{"Id":150,"Name":"","Fen":"4kab2/4a4/4b1N2/p1c5p/5P1c1/4p4/P2n4P/2N6/4A3C/2B1KAB2 b"},{"Id":151,"Name":"","Fen":"3a1a3/5k3/5rn2/p3p1N2/1C1P4p/4C4/4P3p/4B3B/4A4/4KA3 w"}];