// JavaScript functionality for the Parihar Clinic website

// Function to display the current date and time
function displayDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const formattedDateTime = now.toLocaleString('en-GB', options);
    document.getElementById('datetime').innerHTML = `Current Date and Time (UTC): ${formattedDateTime}`;
}

// Call the function to display the date and time
window.onload = displayDateTime;

// Additional functionality can be added here