function foodButton(e){
  //API call for food commented out so that we dont use api calls while working out rest of page
    e.preventDefault();
    localStorage.removeItem('courseResult');
    var query = searchBar.val();
    var url = 'https://golf-course-api.p.rapidapi.com/search?name=' + query;
  
    $.ajax({
      method: 'GET',
      url: url,
      headers: { 'X-Api-Key': '41af16ff5msh7a6c6e9df83c957p184bbajsncd5a40f520fb', 
                 'X-RapidAPI-Host': 'golf-course-api.p.rapidapi.com'},
      contentType: 'application/json',
      success: function(result) {
        localStorage.setItem('foodResult', "");
        localStorage.setItem('foodResult', JSON.stringify(result));
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
    });
    setTimeout(function(){//using timeout to make sure and get data from api before the page is redirected
      if (!(localStorage.getItem('foodResult') === '[]'))
      {
        window.location.href = 'results.html';
    } else {
      $('#noResult').removeAttr('hidden');
    } //redirect user to saved recipes
    }, 1000);
  
    }