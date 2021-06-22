function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`)
    if(location == "Google") {
      resolve("Google says hi")
    } else {
      reject("Only Google is accepted.")
    }
  })
}

function processResponse(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Desired information + ${response}`)
  })
}

// makeRequest("Google").then(response => {
//   console.log("Response recieved!");
//   return processResponse(response);
// }).then(finalResult => {
//   console.log(finalResult);
// }).catch(err => {
//   console.log(err);
// })

async function getGoogleInfo() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received!");
    const finalResult = await processResponse(response);
    console.log(finalResult);
  } catch(err) {
    console.log(err);
  };
}

getGoogleInfo();