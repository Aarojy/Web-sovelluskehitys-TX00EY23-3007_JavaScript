const url = 'https://reqres.in/api/unknown/23';

const response = await fetch(url);

if (!response.ok) {
  if (response.message) {
    console.log(`${json.message}, code:${response.message}`);
    //throw new Error(`${json.message}, code:${response.message}`);
  }
  console.log(`Error ${response.statusText} occurred`);
  //throw new Error(`Error ${response.statusText} occurred`);
}
const json = await response.json();
console.log(json);
