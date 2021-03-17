var canvas;
var music;

var block1;
var block2;
var block3;
var block4;

var movingBlock;

var rightWall;
var leftWall;
var northWall;
var southWall;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,550,200,20);
    block1.shapeColor = 'lightblue';

    block2 = createSprite(300,550,200,20);
    block2.shapeColor = 'orange';

    block3 = createSprite(500,550,200,20);
    block3.shapeColor = 'red';

    block4 = createSprite(700,550,200,20);
    block4.shapeColor = 'pink';

    movingBlock = createSprite(random(20,750),20,20,20);
    movingBlock.shapeColor = 'white';
    movingBlock.velocityX = 3;
    movingBlock.velocityY = 3;

    

}

function draw() {
   background('black');
    //create edgeSprite
    // createEdgeSprites();
    // movingBlock.bounceOff(edges);

    if (movingBlock.bounceOff(block1))
    {
        block1.shapeColor = 'blue';
        movingBlock.shapeColor = 'blue';
    }

    if (movingBlock.bounceOff(block2))
    {
        block2.shapeColor = 'lightorange';
        movingBlock.shapeColor = 'lightorange';
    }

    if (movingBlock.bounceOff(block3))
    {
        block3.shapeColor = 'lightred';
        movingBlock.shapeColor = 'lightred';
    }

    if (movingBlock.bounceOff(block4))
    {
        block4.shapeColor = 'lightpink';
        movingBlock.shapeColor = 'lightpink';
    }

    edges = createEdgeSprites();
    movingBlock.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    drawSprites();
}
