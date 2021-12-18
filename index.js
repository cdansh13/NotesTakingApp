var myFile = new File(
    ['Hello World'],
    "ansh.txt",
    {type:"text/plain;charset=utf8"}
);
saveAs(myFile)
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
function saveText(){
let text = document.getElementById("TextToAnalyze").value;
let fname = prompt("What should be the file name?(Please also add .txt or any extention at last!")
var a = document.createElement("a");
a.href = window.URL.createObjectURL(new Blob([text], { type: "text/plain" }));
a.download = fname;
a.click();
}
