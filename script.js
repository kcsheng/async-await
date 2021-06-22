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

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Desired information + ${response}`)
  })
}

makeRequest("Google").then(response => {
  console.log("Request recieved!");
  return processRequest(response);
}).then(finalResult => {
  console.log(finalResult);
}).catch(err => {
  console.log(err);
})