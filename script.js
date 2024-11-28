document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const amount = document.getElementById('amount').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const card = document.getElementById('card').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;
    const terms = document.getElementById('terms').checked;

    // Validate input fields
    if (!amount || !name || !email || !phone || !address || !city || !state || !zip || !card || !expDate || !cvv || !terms) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Simulate processing the donation (e.g., send data to server)
    setTimeout(() => {
        // Hide the form and show success message
        document.getElementById('donationForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }, 1500); // Simulate network delay for a more realistic experience
});
