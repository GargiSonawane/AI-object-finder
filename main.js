status = "";
function preload(){
}

function setup(){
     canvas = createCanvas(300, 300);
     canvas.center();
     video=createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}