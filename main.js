const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
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
        money: Math.floor(Math.random() * 2000000)
    }

    addData(newUser)
}



// Add new obj to data arr
function addData(obj) {
    data.push(obj);


    updateDOM();
}

// update DOM()
function updateDOM(proviedDate = data) {
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    proviedDate.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('person');

        div.innerHTML = `<strong>${item.name}</strong> $${formatMoney(item.money)}`

        main.appendChild(div)
    });
}

// function money
function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// double money
function doubleMoney() {
    data = data.map(user => {
        return {
            ...user,
            money: user.money * 2
        }
    });
    updateDOM();
}

// sort riches
function sortByRiches() {
    data = data.sort((a, b) => b.money - a.money);
    updateDOM();
}

// show millionairs
function showMillionair() {
    data = data.filter(user => user.money > 1000000);
    updateDOM()
}

// calculate wealth
function calculateWealth() {
    const wealth = data.reduce((total, user) => total += user.money, 0);


    const div = document.createElement('div');
    div.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;

    main.appendChild(div);
}

// event listener
addUser.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
sort.addEventListener('click', sortByRiches);
show_millionair.addEventListener('click', showMillionair);
calculate_wealth.addEventListener('click', calculateWealth);