class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getObject({ title, primaryImage }) {
    return fetch(`${this.baseUrl}/objects/[objectID]`, {
      method: "GET",
      body: JSON.stringify({
        title,
        primaryImage,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        //Si devuelve error se rechaza el promise
        return Promise.reject(`Error:${res.status}`);
      })
      .catch((err) => {
        console.err(err);
      });
  }

  getSearch() {
    return fetch(`${this.baseUrl}/search`, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      })
      .catch((err) => {
        console.err(err);
      });
  }
}

const api = new Api({
  baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1",
});

export default api;
