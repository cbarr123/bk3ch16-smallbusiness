//* place for information in DOM
//* html representation
//* invoke the function
//* inject into DOM
import getEmployeeDeptInfo from "./data.js"
import renderToDOM from "./entriesDOM.js"



getEmployeeDeptInfo().then(renderToDOM)


// getEmployeeDeptInfo().then(results => {
//     results.forEach(result => {
//         console.log(result.name)
        
        
//     });
    
// })