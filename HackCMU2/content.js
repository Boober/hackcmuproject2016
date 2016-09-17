$(document).ready(function()
	{
	//set the font size
	var x = $('p,div,span,h1,h2,h3,h4,h5,h6');
	
	for (c in x)
	{
	var currSize = parseInt($(x[c]).css('font-size'));
	
	console.log(currSize);
	if (currSize < 15)
		$(x[c]).css({'font-size' : 15});
	else
		$(x[c]).css({'font-size' : currSize+currSize});
	}
	});
	
