function rgb2hex(rgb){
    rgb = rgb.match(/\d+/g);
    if (!rgb) return rgb 
    return '#' + 
        ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2)
}


$(document).ready(function() {
    var bodyBg = rgb2hex($('body').css('background'))
    $('p, span').css('text-align', 'left')
    $('p,div,a,h1,h2,h3,h4,h5,h6')
    .css('color', function(index, textColor) {
        var bgColor = rgb2hex($(this).css('background-color'))
        if (bgColor == '#000000') {
            bgColor = bodyBg
        }
        console.log($(this).text(), textColor, ':', bgColor)

    })
    $('p,a,div,h1,h2,h3,h4,h5,h6').mouseover(function() {
        console.log($(this).css('color'), ': ', $(this).css('background-color'))
    })
})