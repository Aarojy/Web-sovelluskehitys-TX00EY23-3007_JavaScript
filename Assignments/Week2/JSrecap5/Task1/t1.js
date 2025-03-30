const url = 'https://reqres.in/api/users/1';

const response = await fetch(url);

if (!response.ok) {
  if (response.message) {
    throw new Error(`${json.message}, code:${response.message}`);
  }
  throw new Error(`Error ${response.statusText} occurred`);
}
const json = await response.json();
console.log(json);
