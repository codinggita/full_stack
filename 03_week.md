# figma

## Reading + Videos [Suggested Path]

- https://kalvium.community/livebooks/design_for_developers

## Youtube Tutorials

- A Beginners Guide to Figma [https://www.youtube.com/watch?v=bI6q16ffdgQ]
- Basics of Frames and Autolayout [https://www.youtube.com/watch?v=d88nvmnj5mU&list=PLlHtucAD9KT19ckHqXpPSStZOyDSq9AW-&index=2]

## Working With APIs using Fetch

In JavaScript, "fetch" is a modern API used for making network requests, typically to retrieve data from a server. It is a more powerful and flexible alternative to the older XMLHttpRequest object for making asynchronous requests. Fetch is commonly used for working with APIs, fetching data, and handling responses. Here's a comprehensive overview of how to use the `fetch` API:

### Basic Fetch Syntax:

```javascript
fetch(url, options)
  .then((response) => {
    // Handle the response
  })
  .catch((error) => {
    // Handle errors
  });
```

- `url` is the URL of the resource you want to fetch.
- `options` (optional) is an object containing configuration options for the request, such as method (GET, POST, PUT, etc.), headers, and more.

### Handling the Response:

Once you initiate a fetch request, you handle the response and any associated data within the `then` block. The `response` object has several methods and properties that you can use to work with the response data. Some of the most commonly used ones include:

- `response.json()`: This method parses the response body as JSON and returns a Promise that resolves to the JavaScript object. This is often used when fetching JSON data from an API.

- `response.text()`: This method reads the response body as text and returns a Promise containing the text data.

- `response.status`: A property that holds the HTTP status code of the response (e.g., 200 for a successful request, 404 for not found, etc.).

- `response.headers`: A property that provides access to the response headers.

### Error Handling:

The `.catch` block allows you to handle errors that occur during the fetch request. Common errors include network issues, CORS issues, and server errors. You can log the error or take other appropriate actions based on your application's requirements.

### Example:

Here's a simple example of using the fetch API to retrieve JSON data from a remote API:

```javascript
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

This code fetches data from a remote API (in this case, JSONPlaceholder) and then logs the resulting JSON data to the console.

### Fetch Options:

You can include additional options when making a fetch request to customize it. Some common options include:

- `method`: The HTTP request method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
- `headers`: An object containing additional headers to include in the request, such as authorization headers.
- `body`: The request body for methods like 'POST' or 'PUT'. You can pass data as a string, FormData, or a JavaScript object, which will be serialized as JSON.
- `mode`: Specifies the mode for the request (e.g., 'cors', 'no-cors', 'same-origin', 'navigate').
- `credentials`: Controls what credentials, if any, should be sent with the request (e.g., 'same-origin', 'include', 'omit').

Here's an example using fetch options to send a POST request with JSON data:

```javascript
fetch("https://example.com/api/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

This is just a basic introduction to using the `fetch` API in JavaScript. Fetch is a versatile tool for handling network requests in modern web development, and you can further customize your requests and error handling as per your project's requirements.
