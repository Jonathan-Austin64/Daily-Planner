function saveToStorage() {
    // var input = document.getElementById("Input-Text9");
    // console.log(input.value);

    myStorage = window.localStorage;
    // localStorage.setItem('plan9', input.value);

    var i;
    for (i = 1; i < 10; i++) {
        var input = document.getElementById("Input-Text".concat(i));
        localStorage.setItem("Input-Text".concat(i), input.value);
    }
 }

console.log(window)