var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {
        img_id = "selfie1";
        takesnapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function () {
        image_id = "selfie2"
        takesnapshot()
        speak_data = "Taking your selfie in 10 seconds";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(UtterThis);
    }, 10000);

    setTimeout(function () {
        image_id = "selfie3"
        takesnapshot()
    }, 15000);

}

function takesnapshot() {
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (image_id == "selfie1") {
            document.getElementById('result_1').innerHTML = '<img id="s1" src="' + data_uri + '"/>';
        }
        if (image_id == "selfie2") {
            document.getElementById('result_2').innerHTML = '<img id="s2" src="' + data_uri + '"/>';
        }
        if (image_id == "selfie3") {
            document.getElementById('result_3').innerHTML = '<img id="s3" src="' + data_uri + '"/>';
        }
    });
}
