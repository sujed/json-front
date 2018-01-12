const Http = (function () {

    function get(url) {
        return _send('GET', url)
    }

    function post(url, data) {
        if (!data) {
            throw Error(`No data to send`);
        }
        return _send('POST', url, data);
    }

    function put(url, data) {
        if (!data) {
            throw Error(`No data to send`);
        }
        return _send('PUT', url, data);
    }

    function $delete(url) {
        return _send('DELETE', url);
    }

    function _send(method, url, toSend) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            toSend ? xhr.setRequestHeader("Content-Type", 'application/json') : null
            xhr.onload = function () {
                if (this.getResponseHeader('Content-Type').split(" ")[0] === 'application/json;') {
                    return resolve({
                        status: this.status,
                        body: JSON.parse(this.response)
                    });
                } else {
                    return resolve({
                        content_type: this.getResponseHeader('Content-Type'),
                        status: this.status,
                        body: this.response
                    });
                }
                if (this.getResponseHeader('Content-Type').split(" ")[0] === 'application/json;') {
                    return reject({
                        status: this.target.status,
                        body: JSON.parse(data.target.response)
                    });
                }
                console.log(data);
                reject({
                    status: this.status,
                    body: this.target.response
                })
            }
            toSend ? xhr.send(JSON.stringify(toSend)) : xhr.send();
        })
    }
    return {
        get,
        post,
        put,
        $delete
    }
}());