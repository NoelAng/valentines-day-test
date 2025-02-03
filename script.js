// Function to display the cat-heart.gif and add text after Yes selection
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        
        // Create a new paragraph element for the text
        var textElement = document.createElement('p');
        // Set the text content of the paragraph
        textElement.innerText = 'You chose YES! Here’s a cute cat heart for you! ❤️';
        
        // Append the text below the image
        imageContainer.appendChild(textElement);
        
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
