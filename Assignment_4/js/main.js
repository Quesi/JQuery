

//exercise 1
function createImages() {

    //a list of the images names found in img folder
    var imageList = ["1","2","3","4","6"];

    //get the parent image element
    var element = document.getElementById("images");

    //loop through the list and extract the values
    imageList.forEach(function(image){

        //create a a block element
        var div = document.createElement("div");
        //add styling so images are arranged horizontally
        div.style.float = 'left';

        //create the image tag
        var img = document.createElement("img");

        //include the image directory, the image name and type
        img.src = "img/" + image + ".jpg";

        //append the image to the block element
        div.appendChild(img);

        //append the block element to the images dev found in Exercise1.html
        //this will diplay all the images
        element.appendChild(div);
    });
    
}

//exercise 2
//this function creates random colors
function getRandomColor(elem) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    //change color of element
    elem.style.backgroundColor = color;
}

//exercise 3
function Prompter() {
    var number = prompt("Pick a number between 1 and 10");

    if (number != null) {
        //convert number string to an integer using parseInt
        var numberValue = parseInt(number);
        if(numberValue >= 1 || numberValue <= 10){
            alert("you picked '" + numberValue + "' yay!");
        } else {
            alert("your number is not valid '" + number + "'");
        }
    }else {

        alert("You didn't pick any number");

    }
}


