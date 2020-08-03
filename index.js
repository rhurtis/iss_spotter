// index.js
 const { fetchMyIP } = require('./iss');
 const { fetchCoordsByIP } = require('./iss');
 const { fetchISSFlyOverTimes} = require('./iss');
 const { nextISSTimesForMyLocation} = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("there was an error" , error);
//     return;
//   }

//   console.log('here is the ip address:' , ip);
// });


// fetchCoordsByIP('70.49.196.188', (error, coords) => {
//   if (error) {
//     console.log("there was an error" , error);
//     return;
//   }

//   console.log('here are the coordinates:' , coords);
// });


// const scarbCoords = { latitude: '43.77120', longitude: '-79.21440' };

// fetchISSFlyOverTimes(scarbCoords, (error, passTimes) => {
//   if (error) {
//     console.log("an error happened: " , error);
//     return;
//   }

//   console.log('here are the flyover times:' , passTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

module.exports = { printPassTimes };