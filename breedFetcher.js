


const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);
  if (error) {
    console.log(`Erorr: ${error}`);
  } else {
    let data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Error: requested breed is not found');
    } else {
      console.log(`\n Breed Description: \n${data[0].description}\n`);
    }
  }
});


