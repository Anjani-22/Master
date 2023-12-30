const main = document.querySelector("#main");
const btn = document.querySelector(".getAPIdataButton");

const getApiData = function (param) {
  fetch(`https://domain-name-of-API-link/resouce-path/${param}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return fetch(
        `https://domain-name-of-API-link/resouce-path//${data.param}`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`data not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data))
    .catch((err) => console.error(`${err.message} 💥`)) // executed in case error occurs in any "then" method
    .finally(() => {
      console.log("Promise Experiment completed"); //always executed after promise completion
    });
};

const getApiDataAsyncAwait = async function (param) {
  try {
    const response = await fetch(
      `https://domain-name-of-API-link/resouce-path/${param}`
    );
    const data = await response.json();
    const response2 = await fetch(
      `https://domain-name-of-API-link/resouce-path/${data.param}`
    );

    if (response2.ok) throw new Error("error occured");

    const data2 = await response2.json();
    console.log(data2);
  } catch (error) {
    console.log(error.message);
  }
  return "23"; //returns Promise
};
console.log(getApiDataAsyncAwait()); // Output: Promise Object
getApiDataAsyncAwait().then((data) => console.log(data)); //Output: 23

btn.addEventListener("click", function () {
  getApiData("some-api-param");
});

fetch(`https://domain-name-of-API-link/resouce-path/${param}`)
  .then(function (response) {
    console.log(response);
    return "no-promise-retured from callback function but a resolved-Value";
  })
  .then(function (data) {
    console.log(data);
  });

//Output: no-promise-retured from callback function but a resolved-Value

const creatingPromise = new Promise(function (resolve, reject) {
  console.log("Aync task being executed");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("Resolved");
    } else {
      reject(new Error("Rejected"));
    }
  }, 2000);
});

creatingPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

Promise.resolve("imddediately resolved promise").then((x) => console.log(x));
Promise.reject(new Error("Err..error occured ")).catch((x) => console.error(x));

/*
  Fulfill your JS Promises, or let your async tasks await
Promises were created to provide clean code for call back hell about which we will discuss later. But lets first talk about the present day promise and later see its history of orgin from Calback hell, just like in movies😜.
In simpler words promises are placeholders for holding the resolved value of async tasks, which gets accessed by call-back function of "then" method as parameter.
In the below example, 
→we make api request using fetch (a web api), 
→ which returns a promise, 
→its resolved value (response) is consumed by "then call-back function", →which returns response.json (a promise), 
→which again returns promise, 
→the resolved value of this promise, is consumed by 2nd "then" method, →where the callback functions finally logs it and appends to html element with id #main
A few key-point, from above is:
 →Even if the callback function of "then" method didnt return a promise, the "then" method always returns a promise, and the reolved value of this promise will be returned value of its callback function, which will be consumed by next "then" method.
Now like, "then" method, promise also has "catch" and "finally" method.
Any error occurs in any-of the "then" methods, its handled by "catch" block, and "finally" block is always executed irrespective whether its resolved or rejected.
Now let's create a very simple promise.
A promise takes an executor function, to which resolve, and reject method is passed.
A value passed to resolve method, sets the fulfilled value, and the value passed to reject method sets the rejected value of that promise*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

Promise.race(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://domain-name-of-API-link/resouce-path/testparam`),
  timeout(5),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const promis1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promis2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise_1, promise_2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

const promise_1 = Promise.resolve(3);
const promise_2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// Expected output:
// "fulfilled"
// "rejected"

callbackHell();
// Assume we have three asynchronous functions: getData, processData, and saveData

function getData(callback) {
  setTimeout(function () {
    console.log("Data received");
    const data = { id: 1, name: "John" };
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(function () {
    console.log("Data processed");
    data.email = "john@example.com";
    callback(data);
  }, 1000);
}

function saveData(data, callback) {
  setTimeout(function () {
    console.log("Data saved " + data);
    callback();
  }, 1000);
}

getData(function (data) {
  processData(data, function (processedData) {
    saveData(processedData, function () {
      console.log("All operations completed");
    });
  });
});

// Callback hell example

getData(function (data) {
  processData(data, function (processedData) {
    saveData(processedData, function () {
      console.log("All operations completed");
    });
  });
});

function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Data received");
      const data = { id: 1, name: "John" };
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Data processed");
      data.email = "john@example.com";
      resolve(data);
    }, 1000);
  });
}

function saveData(data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Data saved");
      resolve();
    }, 1000);
  });
}

// Using Promises

getData()
  .then(processData)
  .then(saveData)
  .then(function () {
    console.log("All operations completed");
  })
  .catch(function (error) {
    console.error("Error:", error);
  });

async function performOperations() {
  try {
    const data = await getData();
    const processedData = await processData(data);
    await saveData(processedData);
    console.log("All operations completed");
  } catch (error) {
    console.error("Error:", error);
  }
}

performOperations();
