const searchBar = document.getElementById("searchBar");
const results = document.getElementById('results');

function displayCourseResults(){ //functions to display recipes to HTML

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
          //displays recipe instructions and ingredients for both food and drinks pages
        var displayCourseHTML = `
        <div class="card recipe-card mt-5">
          <div class="card-content"> `+ titleName +`
            <p class="subtitle card-website">${course.website}</p> 
            <p class="card-address">${course.address}</p>
            <p class="card-address">${course.contact}</p>
            <p class="card-address">${course.hours}</p>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item has-text-black startBTN">Start Round</a>
          </footer>
        `;
        resultsContainer.append(displayCourseHTML);
      });
    } else {
        resultsContainer.append('<p id="noCourses"></p>');
    }
  }