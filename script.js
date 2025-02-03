function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            
            // Display the cat-heart.gif
            displayCatHeart();

            // Create the text message
            var message = document.createElement('p');
            message.innerText = "Yay! You made the right choice! ❤️";
            message.style.fontSize = "32px";
            message.style.fontFamily = "'Sacramento', cursive";
            message.style.color = "#FB607F";
            message.style.marginTop = "20px";
            message.id = "yes-message"; // Assign an ID for future reference
            
            // Ensure previous messages are removed before adding a new one
            var existingMessage = document.getElementById("yes-message");
            if (existingMessage) {
                existingMessage.remove();
            }

            // Insert the message ABOVE the image
            var imageContainer = document.getElementById('image-container');
            imageContainer.prepend(message);
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by *2
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}
