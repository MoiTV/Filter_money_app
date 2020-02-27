const main = document.getElementById('main');
const user = document.getElementById('add-user');
const double = document.getElementById('double');
const show_millionair = document.getElementById('show-millionair');
const sort = document.getElementById('sort');
const calculate_wealth = document.getElementById('calculate-wealth');

let data = [];



// fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');

    const data = await res.json();

    const user = data.results[0]

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser)
}



// Add new obj to data arr
function addData(obj) {
    data.push(obj);
}