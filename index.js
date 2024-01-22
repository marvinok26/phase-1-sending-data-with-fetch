// Add your code here

function submitData(name, email) {
    const url = 'http://localhost:3000/users'
    const Data = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Data),
    };
  
    return fetch(url, configurationObject)
      .then((response) => response.json())
      .then((data) => {
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch((error) => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  
  
  submitData(name,email);