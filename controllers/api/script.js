
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





// Function to fetch and display course info
function courseInfo() {
    const apiUrl = 'https://golf-course-api.p.rapidapi.com/search?name=augusta%20national';
  
    const courseInfoContainer = document.getElementById('courseInfoContainer');
  
    courseInfoContainer.innerHTML = 'Fetching info...';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        courseInfoContainer.innerHTML = `
          <h2>Address Details</h2>
          <p>Street: ${data.address}</p>
          <p>City: ${data.city}</p>
          <p>State: ${data.state}</p>
          <p>Zip Code: ${data.zip}</p>
          <p>Country: ${data.country}</p>`;
      })
      .catch(error => {
        console.error('There was a problem fetching the address data:', error);
        courseInfoContainer.innerHTML = 'Failed to fetch address data.';
      });
  }
  
  document.getElementById('fetchButton').addEventListener('click', courseInfo);
  

getAPI()