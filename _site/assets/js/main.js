window.addEventListener('load', (event) => {
    console.log("Page loaded.");
});

// Contact form submission
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const form = document.getElementById("contactForm");
        const formData = new FormData(form);

        fetch("../php/submit-form.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Handle successful form submission (e.g., show success message)
                    console.log("Form submitted successfully");
                    // You can perform any action here upon successful form submission
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch((error) => {
                // Handle error during form submission
                console.error("Error:", error);
                // You can display an error message or perform other actions upon form submission failure
            });
    });
});