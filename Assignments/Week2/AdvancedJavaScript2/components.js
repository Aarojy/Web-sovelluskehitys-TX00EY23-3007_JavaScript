export const restaurantRow = ({name, address, city}) => {
  const row = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.innerText = name;
  tdName.classList.add('name');

  const tdAddress = document.createElement('td');
  tdAddress.innerText = address;
  tdAddress.classList.add('address');

  const tdCity = document.createElement('td');
  tdCity.innerText = city;
  tdCity.classList.add('city');

  row.append(tdName, tdAddress, tdCity);

  return row;
};

export const restaurantModal = (menu, {name, address}) => {
  const modalHtml = document.createElement('div');

  const nameH3 = document.createElement('h3');
  nameH3.innerText = name + ' - ' + address;

  modalHtml.append(nameH3);
  modalHtml.insertAdjacentHTML('beforeend', menu);

  return modalHtml;
};
