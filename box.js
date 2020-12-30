class Box{
    constructor(x,y,width,height){
        var box_options ={
           restitution: 1

        }
        
        this.width = width
        this.height = height
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.box);
    
    
    }
    
    display(){
        push();
        translate(this.box.position.x,this.box.position.y)
        rotate(this.box.angle)
        rectMode(CENTER);
        fill('brown');
        rect(0,0,this.width,this.height);
    
        pop();

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    }