function submitData(name, email){

    const obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          name: `${name}`,
          email: `${email}`
      })
    };
  
    return fetch("http://localhost:3000/users", obj)
    .then(res => {
      return res.json();
    })
    .then(function(obj2) {
      document.body.innerHTML = obj2["id"];
    })
    .catch(function(err) {
      document.body.innerHTML = err.message;
    }); 
  }