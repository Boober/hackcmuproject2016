


alert('Hello World')

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


function fontProp( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property )
}

var all = document.getElementsByTagName("*")
var max = all.length;
var elements = new Array(max)

for (var i = 0; i < max; i++) {
    elements[i] = fontProp(all[i],'font-family')
    if ($.inArray(elements[i], validfonts) == -1) {
        all[i].style.fontFamily = 'Verdana'
    }
}


alert('Heyo.')

