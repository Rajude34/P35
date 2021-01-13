var dog
var happyDog
var database
var foodS
var foodStock

function preload()
{
  dogImg = loadImage("images/doglmg.png");
  dog1Img = loadImage("images/doglmg.1png");
}

function setup() {
	createCanvas(500, 500);
  dog = new dog(250,250,20,20)

}


function draw() {  

  drawSprites();
  if(KeyWentUp(UP_ARROW)){
writeStock(foodS)
    dog.addImage(dogHappy)
  }

}

function readStock(data){

foodS=data.val()

}

function writeStock(x){
database.ref('/').update({

})

}



