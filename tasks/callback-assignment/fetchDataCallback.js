function fetchDataWithCallback(callback) {
    setTimeout(function() {
        // Call the callback with 'Data fetched'
        const data = 'Data fetched';
        callback(data);
    }, 2000);
}

// Define the callback function to handle fetching data
function getData(result) {
    console.log(result)
}

fetchDataWithCallback(getData);