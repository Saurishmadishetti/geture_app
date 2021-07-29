Webcam.set({
    width:250,
    height:200,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach("#cam");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("re_cam").innerHTML="<img id='resulted_img' src='" + data_uri + "'>"; 
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fraetFZkd/model.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
};
function check_image(){
    camer=document.getElementById("resulted_img");
    classifier.classify(camer,got_result);
}
function got_result(error,result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result").innerHTML=result[0].label;
        if (result[0].label=="&#128406;"){
            document.getElementById("em").innerHTML="&#128406;"
        }
        if (result[0].label=="&#128078;"){
            document.getElementById("em").innerHTML="&#128078;"
        }
        if (result[0].label=="&#128077;"){
            document.getElementById("em").innerHTML="&#128077;"
        }
        if (result[0].label=="&#128076;"){
            document.getElementById("em").innerHTML="&#128076;"
        }
    }

}
