function feedbackSubmitted() {
    
    // Variables
    var form = document.getElementById("feedbackForm");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var feedback = document.getElementById("feedbackTxt").value;
    
    // Checks to make sure that all checkboxes are filled
    if(firstName.length >= 1 && lastName.length >= 1 && feedback.length >= 1) {
        // If all boxes have one or more character then the form will be processed and outputted
        
        // Removes output class, which makes Output visible (turns display into block from none)
        document.getElementById("outputDiv").classList.remove("output");
        
        // Outputs the first name, last name, and feedback to the user
        outputTxt.innerHTML = "First Name: " + firstName + "<br>\nLast Name: " + lastName + "<br>\nFeedback: " + feedback;
        
        // Resets the form so they can fill the form out again if they want
        form.reset();
        
    }
    else if(firstName.length == 0 && lastName.length == 0 && feedback.length == 0) {
        // If no boxes are filled, displays this message
        alert("Please provide your name and feedback before submitting,");
    }
    else if(feedback.length == 0) {
        // Checks for if feedback is missing first, displays message if feedback is empty
        alert("Please provide feedback before submitting.");
    }
    else if(firstName.length == 0) {
        // Checks for a firstName after feedback (since feedback is the most important piece) is confirmed to have content, displays following message
        alert("Please provide a first name.");
    }
    else if(lastName.length == 0) {
        // Checks for a lastName after feedback and firstName are confirmed to have content in them, provides the following message
        alert("Please provide a last name.");
    }
    else {
        alert("Error. Please refresh the page and try again.");
    }
    
    
    
}
