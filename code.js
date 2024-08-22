printFreelancers() {
    //prints the data
    return console.log(this.data);
}

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// const table = document.createElement("table");
// const tr = document.createElement("tr");
// const th = document.createElement("th");

const headers = ["Name", "Starting Price", "Occupation"];

// setInterval calls 'addRow' every 3 seconds and returns interval id
// interval id will be used later to stop the interval
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render ();

function render() {
    const table = document.querySelector("#table");
    const tableElements = table.map((table) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        element.classList.add(table);
        return element;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    })

    freelancers.forEach((freelancer) => {
        const th = document.createElement("th");
        th.textContent = {freelancer};
        tr.appendChild(th);
    });

    table.replaceChildren(...tableElements);
}

// table.appendChild(tr);
// div.appendChild(table);

function addFreelancer (name, price, occupation) {
    freelancers.push({name, price, occupation});
    render();
}

function updateAveragePrice() {
    if (freelancers.length === 0) {
        averagePrice.textContent = 0;
        return;
    }

    const totalPrice = freelancers.reduce((sum, freelancer) => {
        sum + freelancer.price, 0
    });

    const averagePrice = totalPrice / freelancers.length;
}