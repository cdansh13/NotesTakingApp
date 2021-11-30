function UpperCase() {
    console.log("UpperCase Working!");
    let text = document.getElementById("TextToAnalyze").value;
    let newText = text.toUpperCase();
    console.log(newText);
    document.getElementById("TextToAnalyze").value = newText;
}
function LowerCase() {
    console.log("LowerCase Working!");
    let text = document.getElementById("TextToAnalyze").value;
    let newText = text.toLowerCase();
    console.log(newText);
    document.getElementById("TextToAnalyze").value = newText;
}
function RemoveSpaces(){
    console.log("RemoveSpace is working")
    let text = document.getElementById("TextToAnalyze").value;
    let a1 = text.trim();
    let p = document.getElementById("para").innerHTML = a1;
}
function CopyText(){
    let text = document.getElementById("TextToAnalyze");
    text.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
    alert("Text Copied into Clipboard");
}
function TextToSpeech(){
    let text = document.getElementById("TextToAnalyze").value;
    var speech = new window.SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}
function wordCount(){
    let text = document.getElementById("TextToAnalyze").value;
    let str = text.match(/(\w+)/g). length;
    alert("Word: "+str+" length: "+text.length)
}