fetch('path-to-the-resource-to-be-fetched')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
});





// --- --- --- ---
const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
   
  fetch('https://jsonplaceholder.typicode.com/todos/1', options)
    .then(response => response.json())
    .then(console.log)