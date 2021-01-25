function sendMail(contactForm) {
    emailjs.send("service_maridel", "snailfarm", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("Submitted!");
            contactForm.name.value = ''
            contactForm.emailaddress.value = ''
            contactForm.projectsummary.value = ''
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}