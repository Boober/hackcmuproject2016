
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

  
  
  $("#fontSelector").on('change', function (){
    window.console.log('change');
    var e = document.getElementById("fontSelector");
    var newfont = e.options[e.selectedIndex].text;
    var obj = {};
    obj["defFont"] = newfont;
    console.log(newfont);
    chrome.storage.local.set(obj, function() {
      window.console.log('BAlrao')
    });
  });


  $("#ital").on('change', function(){
    var ey = document.getElementById("ital");
    var check = ey.checked;
    var obj = {};
    obj["ital"] = check;
    chrome.storage.local.set(obj, function() {
      window.console.log(check)

    });
  });

  $("#under").on('change', function(){
    var ey = document.getElementById("under");
    var check = ey.checked;
    var obj = {};
    obj["under"] = check;
    chrome.storage.local.set(obj, function() {
      window.console.log(check)
    });
  });






});
