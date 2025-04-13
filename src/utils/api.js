class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  getObject() {
    return fetch(`${this.baseUrl}/objects?departmentIds=11`, {
      method: "GET",
    })
      .then((res) => {
        //res, regresa todos los objectos del deparatamento de la API
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      })
      .then((res) => {
        //firstObject regresa solo 30 elementos de res
        const firstObject = res.objectIDs.slice(40, 46);

        return Promise.all(
          firstObject.map((item) => {
            return fetch(`${this.baseUrl}/objects/` + item).then((res) =>
              res.json()
            );
          })
        ).then((res) => {
          return res;
        });
      });
  }

  getSearch(serachValue) {
    return fetch(`${this.baseUrl}/search?q=${serachValue || "sunflowers"}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error:${res.status}`);
      })
      .then((res) => {
        const filter = res.objectIDs.slice(0, 9);
        return Promise.all(
          filter.map((item) => {
            return fetch(`${this.baseUrl}/objects/` + item).then((res) => {
              if (res.ok) {
                return res.json();
              }
              return Promise.all.reject(`Error:${res.status}`);
            });
          })
        ).then((res) => {
          return res;
        });
      });
  }
}

const api = new Api({
  baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1",
});

export default api;
