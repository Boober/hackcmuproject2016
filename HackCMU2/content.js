$(document).ready(function()
	{
	//incease the font size of all elements
	var x = $('*');
	for (c in x)
	{
	var currSize = parseInt($(x[c]).css('font-size'));
	
	console.log(currSize);
	if (currSize < 9)
		$(x[c]).css({'font-size' : 9});
	else
		$(x[c]).css({'font-size' : currSize+2});

	}
	});
