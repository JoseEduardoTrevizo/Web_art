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
      })
      .then((res) => {
        //firstObject regresa solo 30 elementos de res
        const firstObject = res.objectIDs.slice(9, 18);

        return Promise.all(
          firstObject.map((item) => {
            return fetch(`${this.baseUrl}/objects/` + item).then((res) =>
              res.json()
            );
          })
        ).then((res) => {
          console.log(res);
          return res;
        });
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
