function setup()
{
    video = createCapture(VIDEO);
    video.size(560 ,400);
    video.position(20,175);

    canvas = createCanvas(800 ,400);
    canvas.position(600 ,175);

    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on('pose' , gotPoses);
}

function draw()
{
    background('#33ffd6');
}

function modelLoaded()
{
    console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}