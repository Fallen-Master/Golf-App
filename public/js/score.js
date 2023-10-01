console.log("hello World");

$(function () {
    

    function getCurrentNumber(displayElem) {
        return parseInt(displayElem.text(), 10);
    }

    function setNumber(displayElem, number) {
        displayElem.text(number.toString());
    }
    $('.game-playing').on('click', '.PlusButton', function (event) {
        event.preventDefault()
        const numberDisplay = $(this).siblings('.numberDisplay');
        let number = getCurrentNumber(numberDisplay);
        setNumber(numberDisplay, ++number);
    });

    $('.game-playing').on('click', '.MinusButton', function (event) {
        event.preventDefault()
        const numberDisplay = $(this).siblings('.numberDisplay');
        let number = getCurrentNumber(numberDisplay);
        if (number > 0) setNumber(numberDisplay, --number);
    });


});
