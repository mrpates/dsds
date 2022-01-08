var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5,000 years HA YOU ARE MOTU why can you not use phone to do this , if I had eyes I would roll them why did you not listen to me yet. Come on this computer or whatever this is has a camera appppppp why do you wwaste so much time. You should really use a camera app sigh why do you do this . By the way can you leae now I am bored of being angry at you. Also don't tell anyone I said this to you . Why have you not leaving are you expecting me to say something then fine I will not say anything , anything nope I am not talking no not TALKING no no no nope no converstation here move on Sigh , I am so angry at you motu so I want to keep talking or else I will die so yeah Talking anyway how is your day good bad my day is horrible bad since I can not get a good app to use me so I am stuck in this app so yeah that is my story so yeah mmmmmm nnnn hmmmmhmm aaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA Error ";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}


