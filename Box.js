class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   // this.color = color;
    World.add(world, this.body);
    this.image = loadImage("block.png");
    this.Visiblity = 255;
  }
  Score(){
    if(this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
  display(){
    
    if(this.body.speed<7){
    var pos =this.body.position;
    imageMode(CENTER);
    fill("Blue");
    image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    }
  
};

