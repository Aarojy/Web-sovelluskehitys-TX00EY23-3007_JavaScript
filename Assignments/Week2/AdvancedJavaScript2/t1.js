import {restaurantModal, restaurantRow} from './components.js';
import {fetchData} from './utils.js';
import {apiUrl} from './variables.js';

const table = document.querySelector('table');
const modal = document.querySelector('#modal');
const filterButtons = document.querySelectorAll('.filter-btn');
let restaurants = [];
let lastHighlight;

const getRestaurants = async () => {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants/');
  } catch (error) {
    console.error(error.message);
  }
};

const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error.message);
  }
};

const sortRestaurants = () => {
  restaurants.sort(({name: nameA}, {name: nameB}) => (nameA > nameB ? 1 : -1));
};

const createMenuHtml = (courses) => {
  let html = `
  <article class="course" id="header">
    <p class="name">Ruokalaji</p>
    <p class="price">Hinta</p>
    <p class="allergens">Allergeenit</p>
  </article>
  `;

  for (const {name, price, diets} of courses) {
    html += `
    <article class="course">
      <p class="name">${name || 'Ei tietoa'}</p>
      <p class="price">${price || 'Ei tietoa'}</p>
      <p class="allergens">${diets || 'Ei tietoa'}</p>
    </article>
    `;
  }
  return html;
};

const createTable = (restaurants) => {
  table.innerHTML = `
    <tr class="header">
      <th>Nimi</th>
      <th>Osoite</th>
      <th>Kaupunki</th>
    </tr>
  `;

  for (const {_id, name, address, city} of restaurants) {
    const row = restaurantRow({name, address, city});

    row.addEventListener('click', async function () {
      try {
        lastHighlight?.classList.remove('highlight');
        row.classList.add('highlight');
        lastHighlight = row;

        const coursesResponse = await getDailyMenu(_id, 'fi');
        const menuHtml = createMenuHtml(coursesResponse?.courses || []);

        modal.innerHTML = restaurantModal(menuHtml, {
          name,
          address,
          city,
        }).innerHTML;

        modal.showModal();
      } catch (error) {
        console.error(error.message);
      }
    });

    table.append(row);
  }
};

const filterRestaurants = (company) => {
  const filtered = restaurants.filter(({company: restaurantCompany}) =>
    restaurantCompany.includes(company)
  );
  createTable(filtered);
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const company = button.dataset.company;
    filterRestaurants(company);
  });
});

modal.addEventListener('click', () => {
  modal.close();
});

const main = async () => {
  try {
    await getRestaurants();
    sortRestaurants();
    createTable(restaurants);
  } catch (error) {
    console.error(error.message);
  }
};

main();
