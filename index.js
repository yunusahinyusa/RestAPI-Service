const config = require('./config.js');
const getFromDB = require('./dbconnection').getFromDB;

const run = async (param) => {
  try {
    let res = await getFromDB(param);
    console.log("Sonuc:", res)
  } catch (e) {
    console.log(e)
  }
};

let x = 'd4'
run(x);
