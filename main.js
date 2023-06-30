noseX=0;
noseY=0;

function preload() {
   Hat=loadImage("https://i.postimg.cc/pdLdZnMh/sombrero.png");

}

 function setup() {
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modeLoaded);
    poseNet.on("pose", gotPoses);

   }

   function modeLoaded(){
      console.log("poseNet está inicializado");
   }

   function gotPoses(results){
      if(results.length>0){
         console.log(results),
         noseX=results[0].pose.nose.x -90;
         noseY=results[0].pose.nose.y -170;
         console.log("nose x = "+ results[0].pose.nose.x);
         console.log("nose y = "+ results[0].pose.nose.y);
      }
   }

   function draw() {
      image(video,0,0,300,300);
      fill(255.0,0);
      stroke(103,21,21);
      //circle(noseX,noseY,30);
      image(Hat,noseX,noseY,200,150);

   }

   function take_snapshot() {
       save("Foto.jpg");
   }


 
