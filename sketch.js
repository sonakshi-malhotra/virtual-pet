var dog,happyDog,database
var database
var foodS, foodStock

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  databse=firebase.database
	createCanvas(500, 500);
  dog=createSprite(200,200,10,10)
  dog.addImage("dogImg")

foodStock=database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  
backroundColor(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImg)
}
  drawSprites();
}
function readStock(data){
  foodS=data.val
}

function writeStock(x){

  if(x<=0){
     x=0
  }else{
    x=x-1
  }   

  database.ref('/').update({
    food:x
  })
}



