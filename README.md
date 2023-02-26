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

get(url).then((res) => {
  // do magic here.
});
```

- POST

```javascript
import { post } from "json-front";

post(url, data).then((res) => {
  // do magic here.
});
```

- PUT

```javascript
import { put } from "json-front";

put(url, data).then((res) => {
  // do magic here.
});
```

- DELETE

```javascript
import { remove } from "json-front";

remove(url).then((res) => {
  // do magic here.
});
```

---

### Examples

```javascript
import { get, post } from "json-front";

//GET users array from jsonplaceholder
get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //only return users name.
  const users = res.body.map((user) => user.name);
});

//POST
post("https://jsonplaceholder.typicode.com/posts", { title: "title" }).then(
  (res) => {
    if (res.status === 201 /*Created*/) {
      //do something
    }
  }
);
```

---

License MIT
