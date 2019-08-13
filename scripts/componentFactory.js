const createHTMLComponent = (object) => {
    return `
    <article class="employee">
        <header class="employee__name">
            <h1>${object.name}</h1>
        </header>
        <section class="employee__department">
            <p>Works in the ${object.department.name} department</p>
        </section>
        <section class="employee__computer">
            <p>Currently using a ${object.computer.brand} ${object.computer.model} that was manufactured in ${object.computer.yearManu}</p>
        </section>
    </article>

    `
}

export default createHTMLComponent