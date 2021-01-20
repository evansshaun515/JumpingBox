var canvas;
var music;

var block1, block2, block3, block4;

var movingBlock;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,550,200,50);
    block1.shapeColor = 'lightblue';

    block2 = createSprite(300,550,200,50);
    block2.shapeColor = 'orange';

    block3 = createSprite(500,550,200,50);
    block3.shapeColor = 'red';

    block4 = createSprite(700,550,200,50);
    block4.shapeColor = 'darkpink';

    movingBlock = createSprite(400,300,20,20);
    movingBlock.velocityX = 3;
    movingBlock.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    dtawSprites();
}
