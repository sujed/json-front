export const get = (url, headers) => {
  return _send({ method: "GET", url, headers });
};

export const post = (url, data, headers) => {
  if (!data) {
    throw Error(`No data to send`);
  }
  return _send({ method: "POST", url, toSend: data, headers });
};

export const put = (url, data, headers) => {
  if (!data) {
    throw Error(`No data to send`);
  }
  return _send({ method: "PUT", url, toSend: data, headers });
};

export const remove = (url, headers) => {
  return _send({ method: "DELETE", url, headers });
};

function _send({ method, url, toSend, headers }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (toSend) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }
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

export function createInstance({ baseUrl, baseHeaders = {} }) {
  if (!baseUrl || typeof baseUrl !== 'string') {
    throw new Error("json-front error while creating request instance: 'baseUrl' is required and it must be a string")
  }
  return {
    get: (extendedUrl, extendedHeaders = {}) => {
      return get(`${baseUrl}${extendedUrl}`, { ...baseHeaders, ...extendedHeaders })
    },
    post: (extendedUrl, data, extendedHeaders = {}) => {
      return post(`${baseUrl}${extendedUrl}`, data, { ...baseHeaders, ...extendedHeaders })
    },
    put: (extendedUrl, data, extendedHeaders = {}) => {
      return put(`${baseUrl}${extendedUrl}`, data, { ...baseHeaders, ...extendedHeaders })
    },
    remove: (extendedUrl, extendedHeaders = {}) => {
      return remove(`${baseUrl}${extendedUrl}`, { ...baseHeaders, ...extendedHeaders })
    }
  }
}