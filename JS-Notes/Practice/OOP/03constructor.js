// Constructor Function, bofore 2015 (es5)

function Player (name, score, pos) {
        this.name = name;
        this.score = score;
        this.pos = pos;

        this.move = function (x, y) {
            this.pos = [x, y];
        }
    }

const player1 = new Player("Rakesh", 5, [100, 150]);
player1.move(150, 280);
console.log(player1.pos); // [150, 280]

const player2 = new Player("Hitesh", 4, [80, 100]);
console.log(player2.pos); // [80, 100]
