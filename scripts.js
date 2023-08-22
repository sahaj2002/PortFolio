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
  
