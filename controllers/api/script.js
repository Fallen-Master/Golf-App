const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a41af16ff5msh7a6c6e9df83c957p184bbajsncd5a40f520fb',
		'X-RapidAPI-Host': 'golf-course-api.p.rapidapi.com'
	}
};
  
function getAPI() {
    var requestUrl = "https://golf-course-api.p.rapidapi.com/search?name=augusta%20national";

    fetch(requestUrl, options)
        .then(function (response) {
            console.log(response)
            return response.json();
    })
        .then(function (data) {
            console.log(data)

    });
}


getAPI()