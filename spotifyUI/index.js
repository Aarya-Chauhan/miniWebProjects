

var numberOfButtons = document.querySelectorAll(".clkbtn").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".clkbtn")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.buttonInnerHTML
        makeSound(buttonInnerHTML);
        console.log(buttonInnerHTML)
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});


function makeSound(key) {
    switch (key) {
        case "1":
            var s1 = new Audio("songs/1.mp3");
            s1.play();
            break;

        case "2":
            var s2 = new Audio("songs/2.mp3");
            s2.play();
            break;

        case "3":
            var s3 = new Audio("songs/3.mp3");
            s3.play();
            break;
        case "4":
            var s4 = new Audio("songs/3.mp3");
            s4.play();
            break;
        case "5":
            var s5 = new Audio("songs/5.mp3");
            s5.play();
            break;
        case "6":
            var s6 = new Audio("songs/6.mp3");
            s6.play();
            break;
        case "7":
            var s7 = new Audio("songs/7.mp3");
            s7.play();
            break;   
        case "8":
            var s8 = new Audio("songs/7.mp3");
            s8.play();
            break;
        case "9":
            var s9 = new Audio("songs/7.mp3");
            s9.play();
            break;
            
    }
}
