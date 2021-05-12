class PPlock {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.2,
        //friction: 0.0,
        //isStatic:true
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible=true;  
      World.add(world, this.body);

    }
    display() {
      if(this.body.speed<3){
          var angle = this.body.angle;
          var pos = this.body.position;
          fill("violet");
          push();
          strokeWeight(2);
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
      }
      
      }
    }