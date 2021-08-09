// Get the string from the page
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string
function reverseString(userString){
    let revString = "";
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index]; 
    }
    return revString;
}

//Display the reversed string back on the page.
function displayString(revstring){
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    document.getElementById("alert").classList.remove("invisible");
}

