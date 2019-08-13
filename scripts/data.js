//*  code that deals with getting the data.
//* fetch the data from the json object
const getEmployeeDeptInfo = search => {
    return fetch("http://localhost:3000/employees/?_expand=department&_expand=computer")
        .then(response => response.json())
}




export default getEmployeeDeptInfo
