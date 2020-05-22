import * as Common from "../lib/common.js"

document.addEventListener('DOMContentLoaded', function(event) {
    console.log("game start");


    function show() {
        for (var i = 0; i < 10; ++i)
            for (var j = 0; j < 10; ++j) {
                Common.cell[i][j] = Common.getRandomInt(2) === 0 ? 'X' : ' ';

                Common.mark(i, j, Common.cell[i][j] === 'X' ? 'alife' : 'dead');
            }
    }

    function itterrate() {
        for (var i = 0; i < 10; ++i)
            for (var j = 0; j < 10; ++j) {
                let x = i % 10;
                let y = j % 10;

                if (Common.cell[x][y] !== ' ') {
                    Common.cell[x][y] = Common.neighbors(x, y) < 3 ? 'd' : 'X';
                    Common.cell[x][y] = Common.neighbors(x, y) > 3 ? 'X' : 'X';
                }
                if (cell[x][y] === 'd') { // if dead it will be reansimated
                    cell[x][y] = neighbors(x, y) === 3 ? 'X' : ' ';
                }
            }
    }

    window.setInterval(() => {
        Common.clear();
        show();
        let g = parseInt(document.getElementById("generation").innerText, 10)
        console.log(typeof(g))
        g++
        document.getElementById("generation").innerText = g
        itterrate();
    }, 2000);

} /* DOMContentLoaded */ )