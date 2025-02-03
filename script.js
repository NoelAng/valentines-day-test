<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat GIF</title>
    <style>
        /* Basic styling for the buttons and images */
        #image-container {
            text-align: center;
            margin-top: 20px;
        }
        #options {
            text-align: center;
            margin-top: 20px;
        }
        #question {
            text-align: center;
            font-size: 24px;
        }
        button {
            font-size: 20px;
            padding: 10px 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div id="question">
        <p>Do you want to see a cat heart?</p>
    </div>
    
    <div id="options">
        <button id="yes-button" onclick="selectOption('yes')">Yes</button>
        <button id="no-button" onclick="selectOption('no')">No</button>
    </div>

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
                alert('Error loading cat.gif! Please check the file path.');
            };

            imageContainer.appendChild(catImage); // Append image to the container
        }

        // Function to handle button click events
        function selectOption(option) {
            if (option === 'yes') {
                // Flash rainbow colors
                flashRainbowColors(function() {
                    document.getElementById('question').style.display = 'none'; // Hide the question
                    displayCatHeart(); // Display the cat-heart.gif and add text
                });
            } else if (option === 'no') {
                document.getElementById('no-button').innerText = 'You sure?'; 
                var yesButton = document.getElementById('yes-button');
                var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
                var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2px
                yesButton.style.fontSize = newSize + 'px';
            } else {
                alert('Invalid option!');
            }
        }

        // Function to flash rainbow colors and then execute a callback function
        function flashRainbowColors(callback) {
            var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
            var i = 0;
            var interval = setInterval(function() {
                document.body.style.backgroundColor = colors[i];
                i = (i + 1) % colors.length;
            }, 200); // Change color every 200 milliseconds
            setTimeout(function() {
                clearInterval(interval);
                document.body.style.backgroundColor = ''; // Reset background color
                callback(); // Call the callback once flashing is done
            }, 2000); // Flash colors for 2 seconds
        }

        // Function to display the cat-heart.gif and add text after Yes selection
        function displayCatHeart() {
            var imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = ''; // Clear the container

            // Create and append the cat-heart.gif
            var catHeartImage = new Image();
            catHeartImage.src = 'cat-heart.gif'; // Path to your cat-heart image
            catHeartImage.alt = 'Cat Heart';
            imageContainer.appendChild(catHeartImage); // Append image to the container

            // Create and append the text below the cat-heart.gif
            var textElement = document.createElement('p');
            textElement.innerText = 'You chose YES! Here’s a cute cat heart for you! ❤️';
            textElement.style.textAlign = 'center';
            textElement.style.fontSize = '20px';
            textElement.style.fontWeight = 'bold';
            textElement.style.marginTop = '10px';
            imageContainer.appendChild(textElement); // Append text below the image

            // Hide the options container
            document.getElementById('options').style.display = 'none';
        }

        // Display the initial cat.gif immediately on page load
        window.onload = displayCat;
    </script>

</body>
</html>
