class outStage {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("scottKellyBañandose1.jpg","scottKellyImg/scottKellyBañandose2.jpg")
      World.add(world, this.body);
    }
    display(){
      
imageMode(CENTER);
image(this.image,600,400,this.width,this.height)

}
};