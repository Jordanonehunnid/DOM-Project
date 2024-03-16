document.addEventListener("DOMContentLoaded", function() { // Event listener for when the DOM content is loaded
    const colorBox = document.getElementById("color-box"); // Gets the color box element
    const changeColorBtn = document.getElementById("change-color-btn"); // Gets the change color button element

    function getRandomColor() { // Function to generate a random color
        const letters = '0123456789ABCDEF'; // Possible characters for a color code
        let color = '#'; // Starts building the color code with a hash symbol
        for (let i = 0; i < 6; i++) { // Loop to generate six characters for the color code
            color += letters[Math.floor(Math.random() * 16)]; // Appends a random character to the color code
        }
        return color; // Returns the generated color code
    }

    changeColorBtn.addEventListener("click", function() { // Event listener for when the change color button is clicked
        colorBox.style.backgroundColor = getRandomColor(); // Changes the background color of the color box to a random color
    });
});
