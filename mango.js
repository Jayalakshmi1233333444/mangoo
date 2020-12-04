class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.r=r;
        this.mango=Bodies.circle(x,y,this.r,options);
      
        this.image=loadImage("mango.png");
        World.add(world,this.mango);
    }
    display(){
        var pos=this.mango.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }
}