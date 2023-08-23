function big(x) {

  x.style.backgroundColor = "orange";
  x.style.transition = "all 2s ease-in-out";
  x.style.transform = "rotate(360deg)";
  x.style.border = "5px solid black";
  x.style.borderRadius = "50%";
  x.style.boxShadow = "10px 10px 5px grey";
  x.style.height = "500px";
  x.style.width = "500px";
  }
  function small(x) {
  x.style.height = "400px";
  x.style.width = "400px";
  x.style.padding = "10px";
  x.style.backgroundColor = "powderblue"
  x.style.transition = "all 3s ease-in-out";
  x.style.transform = "rotate(-360deg)";
  }

function addRecommendation(){
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
   
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      
      showPopup(true);
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
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
  
