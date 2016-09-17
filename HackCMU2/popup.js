$(document).ready(function() {
  $("#sizeUp").click(function (){
    console.log('clicked');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {"size": 1});
      console.log(tabs[0].id);
    });
  });
  $("#sizeDown").click(function (){
    console.log('clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {"size": -1});
      console.log(tabs[0].id);
    });
  });
  $("select").on("change",function (){
      console.log('change');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {"font": $(this).val()});
        console.log($(this).val());
    });
  });
});
  /*$("#sizeDown").click(function (){
    console.log('clicked');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"size": -1});
    console.log(tabs[0].id);
  });
  $("select").on("change",function (){
      console.log('change');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {"font": $(this).text()});
      console.log(tabs[0].id);
    });
  });*/
//console.log("popjs run");
//$("#sizeUp").click();
//console.log("artificial");
