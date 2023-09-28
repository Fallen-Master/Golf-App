function startRoundButton(e){
  //API call for food commented out so that we dont use api calls while working out rest of page
    e.preventDefault();
    localStorage.getItem('courseResult');
    alert('Hello World')
};

$('#start-round').on('click',startRoundButton)