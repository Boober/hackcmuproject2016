


var validfonts = [
'Agency FB',
'Akzidenz-Grotesk',
'Andalé Sans',
'Antique Olive',
'Arial',
'Arial Unicode MS',
'Avant Garde Gothic',
'Avenir',
'Bank Gothic',
'Bauhaus',
'Bell Centennial',
'Bell Gothic',
'Benguiat Gothic',
'Berlin Sans',
'Brandon Grotesque',
'Calibri',
'Casey',
'Century Gothic',
'Charcoal',
'Chicago',
'Clearview',
'Comic Sans',
'Compacta',
'Corbel',
'DejaVu Sans',
'DIN',
'Dotum',
'Droid Sans',
'Dyslexie',
'Ecofont',
'Eras',
'Espy Sans',
'Eurocrat',
'Eurostile',
'Square 721',
'FF Dax',
'FF Meta',
'FF Scala Sans',
'Fira Sans',
'Folio',
'Franklin Gothic',
'FreeSans',
'Frutiger',
'Futura',
'Geneva',
'Gill Sans',
'Gill Sans Schoolbook',
'Gotham',
'Haettenschweiler',
'Handel Gothic',
'Hei',
'Helvetica',
'Helvetica Neue',
'Swiss 721',
'Highway Gothic',
'Hobo',
'Impact',
'Industria',
'Interstate',
'Johnston/New Johnston',
'Kabel',
'Klavika',
'Lexia Readable',
'Liberation Sans',
'Linux Biolinum',
'Lucida Sans',
'Lucida Grande',
'Lucida Sans Unicode',
'Lydian',
'Meiryo',
'Meta',
'Microgramma',
'Modern',
'Motorway',
'MS Sans Serif',
'Myriad',
'Neutraface',
'Neuzeit S',
'News Gothic',
'Nimbus Sans L',
'Open Sans',
'Optima',
'Parisine',
'Product Sans',
'Proxima Nova',
'PT Sans',
'Rail Alphabet',
'Roboto',
'Rotis Sans',
'Segoe UI',
'Skia',
'Source Sans Pro',
'Sweden Sans',
'Syntax',
'Tahoma',
'Template Gothic',
'Thesis Sans',
'Tiresias',
'Trade Gothic',
'Transport',
'Trebuchet MS',
'Twentieth Century',
'Ubuntu',
'Univers',
'Zurich',
'Vera Sans',
'Verdana']




var defaultFont = 'Verdana'       //Possibly changeable by the user.
var altFont = 'Times New Roman'   //Also possibly changeable by user. (Make sure it's at least different than the primary.)


function fontProp( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property )
}

var all = document.getElementsByTagName("*")
var max = all.length;
var elements = new Array(max)

//Checking for non sans-serif fonts, and replacing them.

for (var i = 0; i < max; i++) {
    elements[i] = fontProp(all[i],'font-family')
    if ($.inArray(elements[i], validfonts) == -1) {
        all[i].style.fontFamily = defaultFont
    }
}

Array.prototype.forEach.call(document.querySelectorAll("*"), function (element) {


    var style = window.getComputedStyle(element).fontStyle
    var weight = window.getComputedStyle(element).fontWeight
    var dec = window.getComputedStyle(element).textDecoration


    if (style == "italic") { // can also use .getPropertyValue("font-weight")
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



