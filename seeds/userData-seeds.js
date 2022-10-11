const { User } = require('../models');

const userData = [
  {
    username: "mnghinguyen",
    email: "mnghinguyen@github.com",
    password: "pikachu"
  },
  {
    username: "Verzo361219",
    email: "Verzo361219@github.com",
    password: "pickachu"
  },
  {
    username: "bp4924",
    email: "bp4924@github.com",
    password: "pickachu"
  },
  {
    username: "nickhufler1",
    email: "nickhufler1@github.com",
    password: "pickachu"
  },
  {
    username: "cbrunote",
    email: "cbrunote@github.com",
    password: "pickachu"
  },
  {
    username: "garethtflynn",
    email: "garethtflynn@github.com",
    password: "pickachu"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
  