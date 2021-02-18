class Paper {
    constructor(x, y, r) {
    var options = {
        isStatic:false,
        restitution:0.7,
        friction:0.5,
        density:3
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.image = loadImage('paper.png');
    World.add(world, this.body);
}


display() {
    
    var papos = this.body.position;

    push();
    imageMode(CENTER);
    image(this.image, papos.x, papos.y, this.r, this.r);
    pop();
}
}