class Ground{
constructor(x,y,width,height){
    var ground_options ={
        isStatic: true
    }
    
    this.width = width
    this.height = height
    this.land = Bodies.rectangle(x,y,width,height,ground_options);
    World.add(world,this.land);


}

display(){
    rectMode(CENTER);
    fill('green');
    rect(this.land.position.x,this.land.position.y,this.width,this.height);

}













}