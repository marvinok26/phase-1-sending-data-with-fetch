function submitData(name, email) {

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    };

    // Return the fetch() so that the tests can access it
    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            console.log(error.message);
        });
}