function rgb2hex(rgb){
    rgb = rgb.match(/\d+/g);
    if (!rgb) return rgb 
    return ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2)
}

function getContrastYIQ(hexcolor){
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return yiq
}

function modify(color, amount, sign) {
    var r = Math.round(sign(parseInt(color.substr(0,2),16), amount));
    var g = Math.round(sign(parseInt(color.substr(2,2),16), amount));
    var b = Math.round(sign(parseInt(color.substr(4,2),16), amount));
    console.log(r,g,b, "asdfasdfasdf", amount)
    var colorArray = [r, g, b]
    for (var i = 0; i < colorArray.length; i++) {
        var color = colorArray[i]
        if (color > 255) {
            color = 255
        }
        else if (color < 0) {color = 0}
    }
    return '#' + 
        ("0" + colorArray[0].toString(16)).slice(-2) +
        ("0" + colorArray[1].toString(16)).slice(-2) +
        ("0" + colorArray[2].toString(16)).slice(-2);

}

$(document).ready(function() {
    var finalColor;
    var toPrint = '000000';
    var bodyBg = rgb2hex($('body').css('background'))
    $('p, span').css('text-align', 'left')
    $('div,p,h1,h2,h3,h4,h5,h6,span')
    .css('color', function(index, textColor) {
        textColor = rgb2hex(textColor)
        var bgColor = rgb2hex($(this).css('background-color'))
        if (bgColor == '000000') {
            bgColor = bodyBg
        }
        var textYiq = getContrastYIQ(textColor)
        var bgYiq = getContrastYIQ(bgColor)
        var diff = Math.round(Math.abs(bgYiq - textYiq))
        if (diff < 180) {
            if (bgYiq > textYiq) {
                toPrint = modify(textColor, 180 - diff, function(a, b) {return (a - b)})
                $(this).css('color', modify(textColor, 180 - diff, 
                    function(a, b) {return (a - b)}))
            }
            else if (bgYiq < textYiq) {
                toPrint = modify(textColor, 180 - diff, function(a, b) {return (a + b)})
                $(this).css('color', modify(textColor, 180 - diff, 
                    function(a, b) {return (a + b)}))
            }
        }
    })
})