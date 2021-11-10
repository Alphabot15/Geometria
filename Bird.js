class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,200,450);
    this.image = loadImage("ScottKellyImg/scottKellyFlotando.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}