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
$jf.get(url).then(res => {
  // do magic here.
});
```

- POST

```javascript
$jf.post(url, data).then(res => {
  // do magic here.
});
```

- PUT

```javascript
$jf.put(url, data).then(res => {
  // do magic here.
});
```

- DELETE

```javascript
$jf.delete(url).then(res => {
  // do magic here.
});
```

---

### Examples

```html
<script src="path-to-the-package"></script>
<script>
  //GET users array from jsonplaceholder
  $jf.get("https://jsonplaceholder.typicode.com/users").then(res => {
    //only return users name.
    const users = res.body.map(user => user.name);
  });

  //POST
  $jf.post("https://jsonplaceholder.typicode.com/posts",{title:"title"}).then(res => {
      if(res.status === 201/*Created*/){
          //do something
      }
  });
</script>
```

---

License MIT
