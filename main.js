function setup(){
    video= createCapture(VIDEO);
    video.size(500, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560.150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Initialized!');
}
function draw (){
    background('#96a97');
}
function gotPoses(){
    if(results.length>0){
        console.log(results);
    }
}