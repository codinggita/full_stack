const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

function getDataWithAxios() {
  axios
    .post(apiUrl)
    .then((response) => {
      console.log("Get Data with Axios: ", response);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

function postDataWithAxios() {
  axios({
    method: "POST",
    url: apiUrl,
    data: { key: "value" },
    headers: {},
  })
    .then((response) => {
      console.log("Get Data with Axios: ", response);
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

function getDataWithFetch() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Get Data using Fetch: ", data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

getDataWithFetch();
getDataWithAxios();
