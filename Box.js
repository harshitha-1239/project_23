class Box{

  constructor(x,y,width,height){
  var body_options ={
 isStatic:true
  }
 
this.body=Bodies.rectangle(x,y,width,height,body_options)
this.width =width;
this.height =height;
World.add(world,this.body);

  }

display(){
var pose=this.body.position;
fill("red");
rect(pose.x,pose.y,this.width,this.height);


}


}




