
import createHTMLComponent from "./componentFactory.js"



const whereToDisplayInTheDOM = document.querySelector("#employeeInfo")

const renderToDOM = (objectArray) => {
    objectArray.forEach(employee => {
        const htmlRepresentation = createHTMLComponent(employee)
        console.log('htmlRepresentation: ', htmlRepresentation);
        whereToDisplayInTheDOM.innerHTML += htmlRepresentation;
        
        
    });
}




export default renderToDOM