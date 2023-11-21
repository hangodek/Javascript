const button = document.querySelector("#myBtn");
const input = document.querySelector("#myInput");
const mypara = document.querySelector("#demo");

const { promisify } = require("util")

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

const newPromise = promisify(getProvinces);

newPromise("id")
    .then((data) => console.log(data))

module.exports = { getProvinces: getProvinces };