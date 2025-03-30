const url = 'https://reqres.in/api/users';
const body = JSON.stringify({
  name: 'kalle',
  job: 'teacher',
});
const options = {
  method: 'POST',
  body: body,
};

const response = await fetch(url, options);

if (!response.ok) {
  if (response.message) {
    throw new Error(`${json.message}, code:${response.message}`);
  }
  throw new Error(`Error ${response.statusText} occurred`);
}
const json = await response.json();
console.log(json);
