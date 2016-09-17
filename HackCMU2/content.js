//alert("Hello World");
var synth = window.speechSynthesis;

$("p").on("click", function(){
  var utterThis = new SpeechSynthesisUtterance($(this).text());
  synth.speak(utterThis);
});

window.onunload = function(){
  console.log("hello");
  synth.cancel();
};
