
/*
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var user = getCookie(cname);
    return user;
}*/
/*
function selectFont() {
  var e = document.getElementById("fontSelector");
  var newfont = e.options[e.selectedIndex].text;
  console.log(newfont);
  setCookie('deffont', newfont, 365);
}
*/




var bob = document.getElementById("#fontSelector")

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
