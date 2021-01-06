class Bob {
    constructor(x,y) {
        var options = {
            isStatic:false,
            'resitution':33,
            'density': 0.25
            
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,30,options);

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,30,30);
    }
}