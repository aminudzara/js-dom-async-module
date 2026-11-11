function fetchDataWithCallback(callback) {
    setTimeout(function() {
        try {
            // Set error flag
            let error = true;

            // Create error message
            if (error) {
                throw new Error('Fetch failed');
            }

            // Call the callback with 'Data fetched'
            const data = 'Data fetched';
            callback(data);
        } catch (error) {
            // Log error message to the console
            console.error('Error: ' + error.message);
        }
    }, 2000);
}

// Define the callback function to handle fetching data
function getData(result) {
    console.log(result)
}

fetchDataWithCallback(getData);