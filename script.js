<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Cat GIF</title>
    <style>
        /* Styling for centering the image */
        #image-container {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <div id="image-container"></div> <!-- Image container for cat.gif -->

    <script>
        // Function to display the initial cat.gif before interaction
        function displayCat() {
            var imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = ''; // Clear the container

            // Create and append the initial cat.gif
            var catImage = new Image();
            catImage.src = 'cat.gif'; // Ensure this path is correct
            catImage.alt = 'Cat';

            // Log to check if the image is loading correctly
            catImage.onload = function() {
                console.log('cat.gif loaded successfully!');
            };
            catImage.onerror = function() {
                console.log('Error loading cat.gif');
            };

            imageContainer.appendChild(catImage); // Append image to the container
        }

        // Display the initial cat.gif immediately on page load
        window.onload = displayCat;
    </script>

</body>
</html>
