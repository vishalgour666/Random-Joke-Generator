async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("joke").innerHTML = `${data.setup} <br><strong>${data.punchline}</strong>`;    
}

// here  mainly 3 functions are used
// fetch(...) is used to get the data from the API
// await tells JavaScript  to wait/pause until the promise is resolved or until the response comes back.
// json() is used to parse the response as JSON data.
// response now contains the raw response(not yet readable JSON).

// second Function 
// This converts the response into an actual JavaScript object using .json().

// third Function
// finds an HTML element with the ID "joke".
// Replace its Content with:
// 1. the setup of the joke
// 2. a line break (<br>)
// 3. the punchline of the joke, wrapped in <strong> tags for bold text.
// 4. This function is called when the button is clicked.