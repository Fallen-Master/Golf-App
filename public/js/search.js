const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'a41af16ff5msh7a6c6e9df83c957p184bbajsncd5a40f520fb',
		'X-RapidAPI-Host': 'golf-course-api.p.rapidapi.com'
	}
};

function getAPI() {
    var searchBar = $("#search-bar")
    var query = searchBar.val();
    console.log(query);
    var requestUrl = 'https://golf-course-api.p.rapidapi.com/search?name=' + query;
    fetch(requestUrl, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            
            localStorage.setItem('courseResult', "");
            localStorage.setItem('courseResult', JSON.stringify(data));
        });

    }

function searchBtn(e){
    console.log("hello");
    e.preventDefault();
    getAPI();
  displayCourseResults();  
}


function displayCourseResults(){
    
    var courseData = JSON.parse(localStorage.getItem('courseResult')); 
    var data;
    if (courseData && courseData.length > 0){data=courseData}
    var resultsContainer = $('#displayResult');
     resultsContainer.empty();
     if (data && data.length > 0) { 
         // function to dynamically add the container and the styling to the HTML
         data.forEach(function(course) {
             if (course.name){var titleName = `<h1 class="title has-text-weight-bold card-title">${course.name}
             </h1>`} else { var titleName = 
                `<h1 class="title has-text-weight-bold card-title">${course.title} 
                </h1>`}
                var displayCourseHTML = `
                <div class="card recipe-card mt-5">
                <div class="card-content"> `+ titleName +`
                <p class="subtitle card-website">${course.website}</p> 
                <p class="card-address">${course.address}</p>
                <p class="card-address">${course.phone}</p>
                <p class="card-address">${course.holes}</p>
                </div>
                <footer class="card-footer">
                <div class="buttons is-centered">
                      <button id="start-round">Start Round</button>
                  </div>
                </footer>
                <script src="./public/js/startbtn.js" rel="javascript"></script>
                `;
                resultsContainer.append(displayCourseHTML);
            });
        } else {
            resultsContainer.append('<p id="noCourses"></p>');
        }
    }
    
    $('#search-course').on('click',searchBtn)