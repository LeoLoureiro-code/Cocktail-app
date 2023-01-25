//Request cocktail info
 

const drink = document.getElementById('search-input')


const InfoOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a79a9a9bbmsha09b534b87ca8f0p12bf28jsnd791ae6f4792',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

async function requestDrink (drink){
	fetch('https://drinks-digital1.p.rapidapi.com/v1/cocktails?spirit='+{drink} + '&limit=20', InfoOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}


//Request cocktail image

async function requestDrinkImage(drink){

}

const ImageOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a79a9a9bbmsha09b534b87ca8f0p12bf28jsnd791ae6f4792',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=Aperol%20sunrise&pageNumber=1&pageSize=1&autoCorrect=true', ImageOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));