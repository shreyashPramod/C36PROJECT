class Umbrella{
    constructor(x,y) {
        
    this.image=loadImage('images/umbrella.jpg');
    }

display(){
  imageMode(CENTER);
  image(this.image,50,200,70,70);
}
}