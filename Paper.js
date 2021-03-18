class Paper{
 constructor(x,y,r){
     var options = {
         isStatic: false,
         restitution: 0.3,
         friction: 0.5,
         density: 1.2,
     }
     this.y = y
     this.r = r
     this.x = x

     this.image = loadImage("paper.png")
     this.body = Bodies.circle(this.x, this.y, this.r, options)
     World.add(world, this.body)
 }
 display(){
     var paperPos = this.body.position
     push()
     translate(paperpos.x, paperpos.y);
     imageMode(CENTER); 
     image(this.image, 0,0,this.r, this.r)
     pop();
 }
}
