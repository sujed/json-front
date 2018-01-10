# Hlib
Made with ES6, based on ``` XMLHttpRequest ```

## Small JavaScript Http Library

## Methods
* GET
* POST
* PUT
* DELETE

If the response is in JSON format, it will parse it and the response in promise is an obj that contains
```javascript
{status:200, body:{/*parsed JSON here*/}}
```

and if the content type is not JSON
it will return 
```javascript
{status:200, body:{/*response data here*/},
content_type:/*some format here*/}
```
The POST and PUT 'raw data to send' is automaticly formated in JSON

## Usage
* GET
```javascript
Http.get(url).then(res => {
// do magic here.
});
```
* POST
```javascript
Http.post(url, data).then(res => {
// do magic here.
});
```
* PUT
```javascript
Http.put(url, data).then(res => {
// do magic here.
});
```
* DELETE
```javascript
Http.delete(url).then(res => {
// do magic here.
});
```

## Instructions
1. Inlcude in HTML
2. Use as shown above

## Future Features
* Options to send custom headers.

Curently, this is not on any package manager, so to use just download it.
