// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * 타입을 지정해주게 되면 아래의 response에서 객체에 대한 property들이
 * 자동으로 출력된다.
 * 
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerHTML = user.company.name;
      email.innerHTML = user.email;
      address.innerHTML = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
