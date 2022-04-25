// Add your code here

const body = document.getElementsByTagName("body") [0];

function submitData(firstName, email) {
    const configObject = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", configObject)
    .then(response => response.json())
    .then(body => addNewContact(body.id))
    .catch(response => document.body.innerHTML = "Unauthorized Access")
}
function addNewContact(newID) {
    document.getElementsByTagName("body")[0].innerHTML = newID;
}
submitData("Name", "name@name.com");