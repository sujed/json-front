# HLib
Made with ES6

## Small JavaScript Http Library

## Methods
* GET
* POST
* PUT
* DELETE

If response is in JSON format, it will parse it and the response in promise is an obj that contains
```{status:200, body:{//parsed JSON here}}
```

and if the content type is not JSON
it will return this 
```{status:200, body:{//response data}, content_type://here}
```

## Usage
* GET
```
Http.get(url).then(res => {
// do magic here.
});
```
* POST
```
Http.post(url, data).then(res => {
// do magic here.
});
```
* PUT
```
Http.put(url, data).then(res => {
// do magic here.
});
```
* DELETE
```
Http.delete(url).then(res => {
// do magic here.
});
```

## Instructions
1. Inlcude in HTML
2. Use as shown above

Curently, this is not on any package manager, so to use just download it.