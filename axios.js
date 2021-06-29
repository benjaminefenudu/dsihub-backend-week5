axios.get('url')
.then((response) => {

	// Code for handling the response
})
.catch((error) => {

	// Code for handling the error
});





// --- --- --- ---
const axios = require('axios')
 
const getRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
}
 
getRequest()