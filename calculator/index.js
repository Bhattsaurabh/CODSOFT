let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");

let screenValue = "";

for (item of buttons) 
{
    item.addEventListener("click", (e) => {

        buttonText = e.target.innerText;

        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } 
        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } 
        else if (buttonText == "=") {
            var result;
            result = eval(screenValue);
            screen.value = result;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}