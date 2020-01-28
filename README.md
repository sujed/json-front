# jsonhttp
Made with ES6, ``` XMLHttpRequest  and Promise```
For working with JSON data comming from http request's.

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
    status:200,
    body:{/*parsed JSON here*/}
}
```

and if the content type is not JSON
it will return 
```javascript
{
    content_type:/*some format here*/
    status:200, 
    body:{/*response data here*/},
}
```
The POST and PUT ```data``` is automatically formated in JSON

## Usage
* GET
```javascript
$ht.get(url).then(res => {
// do magic here.
});
```
* POST
```javascript
$ht.post(url, data).then(res => {
// do magic here.
});
```
* PUT
```javascript
$ht.put(url, data).then(res => {
// do magic here.
});
```
* DELETE
```javascript
$ht.delete(url).then(res => {
// do magic here.
});
```

## Instructions
1. Inlcude in HTML
2. Use as shown above
---
Licence MIT