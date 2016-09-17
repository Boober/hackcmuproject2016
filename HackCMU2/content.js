
var validfonts = [
'agency fb','akzidenz-grotesk','andalé sans','antique olive','arial',
'arial unicode ms','avant garde gothic','avenir','bank gothic','bauhaus',
'bell centennial','bell gothic','benguiat gothic','berlin sans',
'brandon grotesque','calibri','casey','century gothic','charcoal','chicago',
'clearview','comic sans','compacta','corbel','dejavu sans','din','dotum',
'droid sans','dyslexie','ecofont','eras','espy sans','eurocrat','eurostile',
'square 721','ff dax','ff meta','ff scala sans','fira sans','folio',
'franklin gothic','freesans','frutiger','futura','geneva','gill sans',
'gill sans schoolbook','gotham','haettenschweiler','handel gothic','hei',
'helvetica','helvetica neue','swiss 721','highway gothic','hobo','impact',
'industria','interstate','johnston/new johnston','kabel','klavika',
'lexia readable','liberation sans','linux biolinum','lucida sans',
'lucida grande','lucida sans unicode','lydian','meiryo','meta','microgramma',
'modern','motorway','ms sans serif','myriad','neutraface','neuzeit s',
'news gothic','nimbus sans l','open sans','optima','parisine','product sans',
'proxima nova','pt sans','rail alphabet','roboto','rotis sans','segoe ui',
'skia','source sans pro','sweden sans','syntax','tahoma','template gothic',
'thesis sans','tiresias','trade gothic','transport','trebuchet ms',
'twentieth century','ubuntu','univers','zurich','vera sans','verdana']

var defaultFont = 'Verdana'       //Possibly changeable by the user.
var altFont = 'Arial'   //Also possibly changeable by user. (Make sure it's at least different than the primary.)

function fontProp( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property )
}

var all = document.getElementsByTagName("*")
var max = all.length;
var elements = new Array(max)


//Checking for non sans-serif fonts, and replacing them.

function changeText() {
        for (var i = 0; i < max; i++) {
        elements[i] = fontProp(all[i],'font-family').toLowerCase()
        window.console.log(elements[i])

        if ($.inArray(elements[i], validfonts) == -1) {
            window.console.log('Not a valid font.')
            all[i].style.fontFamily = defaultFont
        }
    } 
}

chrome.storage.local.get(null, function(items) {
    if (items.defFont != null) {
        defaultFont = items.defFont
        window.console.log(defaultFont + ":Woop there it is")
    } else window.console.log('Failed!')
    changeText()

    if (items.ital != null) {
        if (items.under != null) {
            changeStyle(items.ital,items.under)
            window.console.log('Changing both.')
        }
        changeStyle(items.ital,false)
        window.console.log('Changing italics.')
    } else if (items.under != null) {
        changeStyle(false,items.under)
        window.console.log('Changing underline.')
    } else changeStyle(false,false)
    window.console.log('Changing neither.')
});





//Performing font style checks, replacing italics w/ alt-font and underlines
//with highlights.

function changeStyle(changeItalics,changeUnderlines) {
    Array.prototype.forEach.call(document.querySelectorAll("*"), function (element) {

    var style = fontProp(element,'font-style')
    var weight = fontProp(element,'font-weight')
    var dec = fontProp(element,'text-decoration')


    if (style == "italic" && changeItalics) {
        element.style.fontStyle = 'normal'
        if (element.style.fontFamily = defaultFont) {
            element.style.fontFamily = altFont

        } else element.style.fontFamily = defaultFont

    }

    if (dec == "underline" && changeUnderlines) {
        element.style.textDecoration = 'none'
        element.style.backgroundColor = 'yellow'
    }
});
}



//Text-To-Speech

var synth = window.speechSynthesis;

$("p").on("click", function(){

  console.log(window.getSelection().toString());
  if(sessionStorage.getItem("selected")&&window.getSelection().toString())
  {
    console.log(sessionStorage.getItem("selected") +window.getSelection().toString());
    synth.cancel();
    //sessionStorage.removeItem("selected");
    synth.speak(new SpeechSynthesisUtterance(window.getSelection()));
  }
  else if(sessionStorage.getItem("selected")&&!window.getSelection().toString())
  {
    console.log('clear cache');
    sessionStorage.removeItem("selected");
    synth.cancel();
  }
  else if(!sessionStorage.getItem("selected")&&window.getSelection().toString()){
    console.log('not selected');
    sessionStorage.setItem("selected","yes");
    var utterThis = new SpeechSynthesisUtterance(window.getSelection());
    synth.speak(utterThis);
  }
  else
  {
    console.log('nothing');
  }
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



//Setting Minimum Font-Size

/***The size changes seem to be really exaggerated for some websites.***/

/*

$(document).ready(function()
	{
	//set the font size
	var x = $('p,div,span,h1,h2,h3,h4,h5,h6');

	for (c in x)
	{
	var currSize = parseInt($(x[c]).css('font-size'));

	console.log(currSize);
	if (currSize < 12)
		$(x[c]).css({'font-size' : 12});
	else
		$(x[c]).css({'font-size' : currSize+(currSize/3)});
	}
	});
*/

$(document).ready(function() {
    $('p').css('text-align', 'left')
})
