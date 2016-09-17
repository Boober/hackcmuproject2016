//alert("Hello World");
var synth = window.speechSynthesis;

$("p").on("click", function(){
  var utterThis = new SpeechSynthesisUtterance(window.getSelection());
  synth.speak(utterThis);
});

window.onunload = function(){
  console.log("hello");
  synth.cancel();
};
var anon = function() {};
chrome.runtime.onMessage.addListener(function (message,sender,anon){
  console.log("halo");
  if(!!message.size)
  {

    var fsize = parseInt($("*").css("font-size"));
    fontSize = fsize + message.size + "px";
    $("*").css({'font-size':fontSize})
  }
  if(!!message.font)
  {
    var fon = message.font + ", "+"sans-serif";
    $("*").css({'font-family': fon});
  }
});
