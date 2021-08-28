status = "";
object = "";
synth = "";
utterThis = "";
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
    if(status != ""){
         for (i = 0; i < objects.length; i++){ 
            object = document.getElementById("object_input").value;
            document.getElementById("object_found").innerHTML = "Detecting object";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent +  "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("confidence").innerHTML = percent;
        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";

    if(object == objects[i]){
        video.stop();
        objectDetector.detect(gotResult);
        document.getElementById("object_found").innerHTML = "object mentioned found";
        synth = window.speechSynthesis;
        utterThis = new SpeechSynthesisUtterance("object mentioned found");
        speak(utterThis);
    }
    else{
        document.getElementById("object_found").innerHTML = "object mentioned not found";
    }
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
    objects = result;
}