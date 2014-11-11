function getURLParameter(paramName) {
  var searchString = window.location.search.substring(1),
      i, val, params = searchString.split("&");

  for (i=0;i<params.length;i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return decodeURIComponent(val[1]);
    }
  }
  return null;
}

function reverseWords(inputValue){
	var result = "";
	if(inputValue != "")
	{
		var wordArray = inputValue.split("");
		var length = wordArray.length;
		for(var i = 0; i < length/2; i++)
		{
			var temp = wordArray[i];
			wordArray[i] = wordArray[length - 1 - i];
			wordArray[length - 1 - i] = temp;	
		}
		result = wordArray.join("");
	}
	return result;
}