class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    //this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.Visibility=255
  }
  score(){
    if(this.Visibility< 0 && this.Visibility> -1005){
      score++;
    }
    
      }
  display(){
   // console.log(this.body.speed);
    if(this.body.speed < 3){
     super.display()
     }
     else{
       World.remove(world,this.body);
       push()
     this.Visibility=this.Visibility-5;
     tint(250,this.Visibility);
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop()
     }
}
}