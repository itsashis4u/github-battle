import axios from 'axios';

const githubUrl = 'https://api.github.com/users/';
const ID = '';
const SECRET = '';
const param = `?client_id=${ID}&client_secret=${SECRET}`;

function getUserInfo(username) {
  return axios.get(`${githubUrl}${username}${param}`);
}

const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(username => getUserInfo(username)))
    .then(info => info.map(user => user.data))
    .catch(err => console.warn(`Errors in getPlayersInfo : ${err}`));
    // .then(data => console.log(data));
  }
};

export default helpers;
