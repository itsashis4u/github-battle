import axios from 'axios';

const githubUrl = 'https://api.github.com/users/';
const ID = '';
const SECRET = '';
const param = `?client_id=${ID}&client_secret=${SECRET}`;

function getUserInfo(username) {
  return axios.get(`${githubUrl}${username}${param}`);
}

function getRepos(username) {
  // fetch Username's repos
  return axios.get(`${githubUrl}${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
// find all the stars a user has
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
// return object with the data
  return getRepos(player.login)
  .then(getTotalStars)
  .then((totalStars) => {
    return {
      followers: player.followers,
      totalStars
    };
  });
}

function calculateScores(players) {
// calculate the scores return array
  return [
    (players[0].followers * 3) + players[0].totalStars,
    (players[1].followers * 3) + players[1].totalStars
  ];
}

const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(username => getUserInfo(username)))
    .then(info => info.map(user => user.data))
    .catch(err => console.warn(`Errors in getPlayersInfo : ${err}`));
  },
  battle(players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(err => console.warn(`Error in battle : ${err}`));
  }
};

export default helpers;
