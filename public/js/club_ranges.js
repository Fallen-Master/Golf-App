$(function(){
 const clubInfoPage = $("#club-information");

function updateClubInfo(e) {
    let btnClicked = $(e.target);
    let parentLI = btnClicked.parent('li');
    let txtBx = parentLI.children('#club-range');
    let rangeDisplay = parentLI.children('#current-range');
    let clubRange = txtBx.val();
    let clubRangeIntChecker = parseInt(txtBx.val());

    //input validation
    if (txtBx.val() === "" || isNaN(clubRangeIntChecker) || clubRangeIntChecker < 0)
    {
        clubRange = 0;
        rangeDisplay.text(`Must be a postive number!`);
        txtBx.val('');
    }
    else{
        rangeDisplay.text(`${clubRange} yards`);
        txtBx.val('');
    }
    
}


 clubInfoPage.on('click', '.update-club', updateClubInfo);
});