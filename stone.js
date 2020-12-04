class Stone{
    constructor(x,y,r){
      var options={
        isStatic:false,
        
          
          
        
      }  
      this.r=r;
     this.body=Bodies.circle(x,y,r,options) 
    this.image=loadImage("stone.png");
      World.add(world,this.body);
    }
    display(){
       var pos=this.body.position;
      //  pos.x = mouseX;
      //  pos.y =mouseY;
     // console.log(this.body.position)
       push();
      translate(pos.x,pos.y);
      imageMode(CENTER)
      ellipseMode(RADIUS)
     //strokeWeight(4);
      fill("black");
      //ellipse(0,0,this.r,this.r);
     image(this.image,0,0,this.r*2,this.r*2);
      pop() ;

    }
    
}