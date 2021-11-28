nosex=0;
nosey=0;
function preload() 
{
    nose=loadImage('https://i.postimg.cc/SsM7qb3r/moustache-PNG34.png')
}

function setup() 
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded) 
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("noseX =" + nosex);
        console.log("nosey =" + nosey);
    }
}


function modelLoaded()
{
    console.log('posenet initialized')
}

function draw()
{
image(video,0, 0, 300, 300); 
/*
fill(255,0,0)
stroke(255,0,0)
circle(nosex, nosey, 20)
*/
image(nose, nosex-10, nosey+0, 30, 30)
}

function take_snapshot() 
{
save('moustache_PNG34.png');
}
