function movePage(courseName){
  window.location.replace(`/playingPage/${courseName}`)
};
$(".start-round").each(function (){
  $(this).on("click", function(){
   const courseName = $(this)[0].dataset.name 

   movePage(courseName)
  })
})