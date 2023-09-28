$(function(){
 const clubInfoPage = $("#club-information");

function updateClubInfo(e) {
    let btnClicked = $(e.target);
    let parentLI = btnClicked.parent('li');
    let txtBx = parentLI.children('#club-range');
    let rangeDisplay = parentLI.children('#current-range');
    let clubRange = txtBx.val();

    rangeDisplay.text(`${clubRange} yrds`);
    txtBx.val('');
    
    console.log(rangeDisplay.text());
    console.log(clubRange);
}


 clubInfoPage.on('click', '.update-club', updateClubInfo);
});