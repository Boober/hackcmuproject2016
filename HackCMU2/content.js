
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

for (var i = 0; i < max; i++) {
    elements[i] = fontProp(all[i],'font-family').toLowerCase()
    window.console.log(elements[i])

    if ($.inArray(elements[i], validfonts) == -1) {
        window.console.log('Not a valid font.')
        all[i].style.fontFamily = defaultFont
    }
}

//Performing font style checks, replacing italics w/ alt-font and underlines
//with highlights.

Array.prototype.forEach.call(document.querySelectorAll("*"), function (element) {


    var style = fontProp(element,'font-style')
    var weight = fontProp(element,'font-weight')
    var dec = fontProp(element,'text-decoration')


    if (style == "italic") {
        element.style.fontStyle = 'normal' 
        if (element.style.fontFamily = defaultFont) {
            element.style.fontFamily = altFont
             
        } else element.style.fontFamily = defaultFont
           
    }

    if (dec == "underline") {
        element.style.textDecoration = 'none'
        element.style.backgroundColor = 'yellow'
    }
});


//Text-To-Speech

var synth = window.speechSynthesis;

$("p").on("click", function(){
  var utterThis = new SpeechSynthesisUtterance($(this).text());
  synth.speak(utterThis);
});

window.onunload = function(){
  console.log("hello");
  synth.cancel();
};


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

