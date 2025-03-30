import {fetchData} from './fetchData.js';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const table = document.querySelector('table');
const modal = document.querySelector('#modal');
let restaurants = [];
let lastHighlight;

async function getRestaurants() {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants/');
  } catch (error) {
    console.error(error.message);
  }
}

async function getDailyMenu(id, lang) {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error.message);
  }
}

function sortRestaurants() {
  restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function createMenuHtml(courses) {
  let html = `
  <article class="course" id="header">
    <p class="name">Ruokalaji</p>
    <p class="price">Hinta</p>
    <p class="allergens">Allergeenit</p>
  </article>
  `;

  for (const course of courses) {
    html += `
  <article class="course">
    <p class="name">${course.name}</p>
    <p class="price">${course.price}</p>
    <p class="allergens">${course.diets}</p>
  </article>
  `;
  }
  return html;
}

function createTable() {
  for (let restaurant of restaurants) {
    const row = document.createElement('tr');
    row.addEventListener('click', async function () {
      try {
        lastHighlight?.classList.remove('highlight');
        row.classList.add('highlight');
        lastHighlight = row;

        const coursesResponse = await getDailyMenu(restaurant._id, 'fi');
        const menuHtml = createMenuHtml(coursesResponse.courses);

        modal.innerHTML = '';
        modal.showModal();

        const nameH3 = document.createElement('h3');
        nameH3.innerText = restaurant.name + ' - ' + restaurant.address;

        modal.append(nameH3);
        modal.insertAdjacentHTML('beforeend', menuHtml);
      } catch (error) {
        console.error(error.message);
      }
    });

    const name = document.createElement('td');
    name.innerText = restaurant.name;
    name.classList.add('name');

    const address = document.createElement('td');
    address.innerText = restaurant.address;
    address.classList.add('address');

    const city = document.createElement('td');
    city.innerText = restaurant.city;
    city.classList.add('city');

    row.append(name, address, city);
    table.append(row);
  }
}

modal.addEventListener('click', function () {
  modal.close();
});

async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
    createTable();
  } catch (error) {
    console.error(error.message);
  }
}

main();
