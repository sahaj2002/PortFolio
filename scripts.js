var myInterval = setInterval(slideshow, 3000);

function slideshow() {

    var i = document.getElementById("Imagey");
    if (i.src.match("images/myPic1.png")) {
        i.src = "images/myPic2.png";
    } else if (i.src.match("images/myPic2.png")) {
        i.src = "images/myPic3.png";
    } else {
        i.src = "images/myPic1.png";
    }
}



// Certificate
const productContainers = [...document.querySelectorAll('.certificate-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// function cardsb(y) {
//   y.style.backgroundColor = "orange";
//   y.style.transition = "all 2s ease-in-out";
//   // y.style.transform = "rotate(360deg)";
//   y.style.border = "5px solid black";
//   y.style.borderRadius = "50%";
//   y.style.boxShadow = "10px 10px 5px grey";
//   y.style.height = "56px";
//   y.style.width = "56px";
// }
// function cardsm(y) {

//   border: 1px solid gray;
//     display: block;
//     border-radius: 6px;
//     text-align: center;
//     margin: 50px;
//     /* padding: 10px; */
//     width: 2in;
//     font-size: 20px;
//     box-shadow: 0 3px 10px gray;
// }

function big(x) {
    var body = document.body;
    x.style.backgroundColor = "orange";
    x.style.transition = "all 1s ease-in-out";
    x.style.transform = "rotate(360deg)";
    x.style.borderRadius = "50%";
    x.style.boxShadow = "10px 10px 5px grey";

    x.style.height = "35vw";
    x.style.width = "35vw";

}
function small(x) {
    x.style.height = "30vw";
    x.style.width = "30vw";
    x.style.padding = "10px";
    x.style.backgroundColor = "powderblue"
    x.style.transition = "all 3s ease-in-out";
    x.style.transform = "rotate(-360deg)";
}

function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");

    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");

        showPopup(true);
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
        // Add this element to the end of the list of recommendations
        document.getElementById("all-recommendations").appendChild(element);
        // Reset the value of the textarea
        recommendation.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popUp').style.visibility = 'visible'
    } else {
        document.getElementById('popUp').style.visibility = 'hidden'
    }
}

