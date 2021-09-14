//setup before functions
let typingTimer;                //timer identifier  //time in ms (5 seconds)


//on keyup, start the countdown
let text = document.getElementById('myInput');
text.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (text.value) {
        typingTimer = setTimeout(doneTyping, 5000);
    }
});

//user is "finished typing," do something
function doneTyping () {
    //do something
}