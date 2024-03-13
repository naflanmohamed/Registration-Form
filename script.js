document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var full_name = document.getElementById("full_name").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;
    var occupation = document.getElementById("occupation").value;
    var id = document.getElementById("id").value;
    var id_number = document.getElementById("id_number").value;
    var issue_authority = document.getElementById("issue_authority").value;
    var issue_date = document.getElementById("issue_date").value;
    var issue_state = document.getElementById("issue_state").value;
    var expiry_date = document.getElementById("expiry_date").value;

    var output = document.getElementById("output");
    
    output.innerHTML = "<h2>Registration Form Data</h2><p><strong>Name:</strong> " + full_name + "</p><p><strong>Date of Birth:</strong> " + dob + "</p><p><strong>Email:</strong> " + email
        + "</p><p><strong>Mobile:</strong> " + mobile + "<p><strong>Gender:</strong> " + gender + "<p><strong>Occupation:</strong> " + occupation + "<p><strong>ID Type:</strong> " + id +
        "<p><strong>ID Number:</strong> " + id_number + "<p><strong>Issue Authority:</strong> " + issue_authority + "<p><strong>Issue Date:</strong> " + issue_date + 
        "<p><strong>Issue State:</strong> " + issue_state + "<p><strong>Expiry Date:</strong> " + expiry_date;
    
            output.classList.add("output-visible");
    document.getElementById("registrationForm").reset();

});