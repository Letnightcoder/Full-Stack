// classes - es6 - ES2015 (new way to create objects)

class Player {
    constructor(name, score, pos, credits) {
        this.name = name;
        this.score = score;
        this.pos = pos;
        this.credits = credits;
    }

    move(x, y) {
        this.pos = [x, y];
    }

    changeCredits(newCredits) {
        this.credits = newCredits;
    }
}

const player1 = new Player("Rakesh", 5, [100, 150], 20);
player1.move(150, 280);
console.log(player1.pos); // [150, 280]

const player2 = new Player("Hitesh", 4, [80, 100], 15);
player2.score = 10; 
console.log(player2); // Player { name: 'Hitesh', score: 10, pos: [ 80, 100 ], credits: 15 }

const player3 = new Player("Roshan", 3, [120, 180], 30);
player3.changeCredits(40);
console.log(player3.credits); // 40
