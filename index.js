export const get = (url, headers) => {
  return _send({ method: "GET", url, headers });
};

export const post = (url, data, headers) => {
  if (!data) {
    throw Error(`No data to send`);
  }
  return _send({ method: "POST", url, data, headers });
};

export const put = (url, data, headers) => {
  if (!data) {
    throw Error(`No data to send`);
  }
  return _send({ method: "PUT", url, data, headers });
};

export const remove = (url, headers) => {
  return _send({ method: "DELETE", url, headers });
};

function _send({ method, url, toSend, headers }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    toSend ? xhr.setRequestHeader("Content-Type", "application/json") : null;
    if (headers) {
      for (const header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }
    }
    xhr.onload = function () {
      if (
        this.getResponseHeader("Content-Type").split(" ")[0] ===
        "application/json;"
      ) {
        resolve({
          content_type: this.getResponseHeader("Content-Type"),
          status: this.status,
          body: JSON.parse(this.response),
        });
      } else {
        resolve({
          content_type: this.getResponseHeader("Content-Type"),
          status: this.status,
          body: this.response,
        });
      }
    };
    toSend ? xhr.send(JSON.stringify(toSend)) : xhr.send();
  });
}
