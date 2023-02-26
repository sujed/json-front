export const get = (url) => {
  return _send("GET", url);
};

export const post = (url, data) => {
  if (!data) {
    throw Error(`No data to send`);
  }
  return _send("POST", url, data);
};

export const put = (url, data) => {
  if (!data) {
    throw Error(`No data to send`);
  }
  return _send("PUT", url, data);
};

export const remove = (url) => {
  return _send("DELETE", url);
};

function _send(method, url, toSend) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    toSend ? xhr.setRequestHeader("Content-Type", "application/json") : null;
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
