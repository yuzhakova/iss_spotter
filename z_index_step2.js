// The code below is temporary and can be commented out.
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});
