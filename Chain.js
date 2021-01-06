class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var opt = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX,y:this.offsetY},
            stiffness:0.04
        }
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }

    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        push();
        fill(0);
        line(pointA.x,pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        pop();
    }
}