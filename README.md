# json-front
Made with ES6, ``` XMLHttpRequest  and Promise```
For working with JSON data coming from http request's.

---
## Methods
* GET
* POST
* PUT
* DELETE

If the response is in JSON format, it will parse it and return
```javascript
{
    content_type: xyz,
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
The POST and PUT ```data``` is automatically formated in JSON

## Usage
* GET
```javascript
$jf.get(url).then(res => {
    // do magic here.
});
```
* POST
```javascript
$jf.post(url, data).then(res => {
    // do magic here.
});
```
* PUT
```javascript
$jf.put(url, data).then(res => {
    // do magic here.
});
```
* DELETE
```javascript
$jf.delete(url).then(res => {
    // do magic here.
});
```
---
### Example
```html
<script src="path-to-the-package"></script>
<script>
    //Get users array from jsonplaceholder
    $jf.get("https://jsonplaceholder.typicode.com/users").then(res => {
        //only return users name.
        const users = res.body.map(user => user.name);
    });
</script>

```

---
Licence MIT