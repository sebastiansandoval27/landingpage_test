const fetchWithoutToken = (endpoint, data, method = "GET") => {
  const base_url =
    process.env.NODE_API_URL ||
    "https://landing-test-backend.herokuapp.com/api";
  const url = `${base_url}/${endpoint}`;

  if (method === "GET") {
    return fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },

      body: JSON.stringify(data),
    });
  }
};

const fetchWithToken = (endpoint, data, method = "GET") => {
  const base_url =
    process.env.NODE_API_URL ||
    "https://landing-test-backend.herokuapp.com/api";
  const url = `${base_url}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (token) {
    if (method === "GET") {
      return fetch(url, {
        method,
        headers: {
          "x-token": token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      });
    } else {
      return fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "x-token": token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(data),
      });
    }
  }
};

export { fetchWithoutToken, fetchWithToken };
