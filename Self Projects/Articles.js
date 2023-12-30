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
