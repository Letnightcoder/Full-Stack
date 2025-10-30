// objects literals

const player1 = {
  name: "Rakesh",
  score: 5,
  pos: [100, 200],
  move(){
    this.pos = [150, 280]
  }

};

console.log(player1.pos); // [ 100, 200 ]   

player1.move();
console.log(player1.pos); // [ 150, 280 ]


const player2 ={
  name: "Hitesh",
  score: 4,
  pos: [80, 150],
  move() {
    this.pos = [50, 80];
  },
};

console.log(player2.pos); // [ 80, 150 ]

player2.move();
console.log(player2.pos); // [ 50, 80 ]