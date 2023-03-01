# json-front

Made with ES6, `XMLHttpRequest and Promise` for working with JSON data, in the browser.

---

## Methods

- GET
- POST
- PUT
- DELETE

If the response is in JSON, it will be parsed and returned

```javascript
{
    content_type: 'application/json',
    status: 200,
    body:{ /*parsed JSON here*/ }
}
```

and if the content type is not JSON
it will return

```javascript
{
    content_type: xyz
    status: 200,
    body:{ /*response data here*/ },
}
```

The POST and PUT `data` is automatically formated in JSON,
so it can be passed just as Javascript `object`

## Usage

- GET

```javascript
import { get } from "json-front";

get(url,headers).then((res) => {
  // do magic here.
});
```

- POST

```javascript
import { post } from "json-front";

post(url, data, headers).then((res) => {
  // do magic here.
});
```

- PUT

```javascript
import { put } from "json-front";

put(url, data, headers).then((res) => {
  // do magic here.
});
```

- DELETE

```javascript
import { remove } from "json-front";

remove(url, headers).then((res) => {
  // do magic here.
});
```

---

It is also possible to create request instances that are allowing reuse of requests and headers against an API

```javascript

// Define target API base url(required) and headers(optional) if needed
const jsonPlaceholderAPI = createInstance({baseUrl: "https://jsonplaceholder.typicode.com", baseHeaders: { "Ping":"Pong" }})

// another instance
const myVeryCoolAPI = createInstance({baseUrl: "https://my.cool.api", baseHeaders: { "Meow":"woof" }})

// it is also possible to extend base headers if needed
const extendedBaseHeaders = { Pong:"Ping" }

jsonPlaceholderAPI.get("/users", extendedBaseHeaders).then((res) => {
  //only return users name.
  const users = res.body.map((user) => user.name);
});

jsonPlaceholderAPI.post("/posts", { title: "title" }, extendedBaseHeaders).then(
  (res) => {
    if (res.status === 201 /*Created*/) {
      //do something
    }
  }
);

myVeryCoolAPI.post("/coolEndpoints", {cool:'daata'}).then(res => {
  return res
})

```

### General Examples

These methods ara always available and are independent of any existing instances

```javascript
import { get, post } from "json-front";

const headers = {
  "This-IS":"SPARTA!"
}

//GET users array from jsonplaceholder
get("https://jsonplaceholder.typicode.com/users", headers).then((res) => {
  //only return users name.
  const users = res.body.map((user) => user.name);
});

//POST
post("https://jsonplaceholder.typicode.com/posts", { title: "title" }, headers).then(
  (res) => {
    if (res.status === 201 /*Created*/) {
      //do something
    }
  }
);
```

---

License MIT
