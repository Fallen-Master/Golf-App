console.log("hello World");

$(function () {
    const currentHoleDisplay = $("#currentHoleDisplay");

    function getCurrentNumber(displayElem) {
        return parseInt(displayElem.text(), 10);
    }

    function setNumber(displayElem, number) {
        displayElem.text(number.toString());
    }

    // Initialize localStorage if not done already
    if (!localStorage.getItem('savedScore')) {
        localStorage.setItem('savedScore', '0');
        currentHoleDisplay.text('1');
    }

    if (!localStorage.getItem('currentHole')) {
        localStorage.setItem('currentHole', '1');
        currentHoleDisplay.text(localStorage.getItem('currentHole'));
    }

    $('.game-playing').on('click', '.PlusButton', function (event) {
        const numberDisplay = $(this).siblings('.numberDisplay');
        let number = getCurrentNumber(numberDisplay);
        setNumber(numberDisplay, ++number);
    });

    $('.game-playing').on('click', '.MinusButton', function (event) {
        const numberDisplay = $(this).siblings('.numberDisplay');
        let number = getCurrentNumber(numberDisplay);
        if (number > 0) setNumber(numberDisplay, --number);
    });

    // TODO: Add other functions and event bindings as required

});
