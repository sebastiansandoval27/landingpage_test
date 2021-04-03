const fetchWithoutToken = (endpoint, data, method = "GET") => {
  const base_url =
    process.env.NODE_API_URL ||
    "https://git.heroku.com/landing-test-backend.git/api";
  const url = `${base_url}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchWithToken = (endpoint, data, method = "GET") => {
  const base_url =
    process.env.NODE_API_URL ||
    "https://git.heroku.com/landing-test-backend.git/api";
  const url = `${base_url}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (token) {
    if (method === "GET") {
      return fetch(url, {
        method,
        headers: {
          "x-token": token,
        },
      });
    } else {
      return fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
          "x-token": token,
        },
        body: JSON.stringify(data),
      });
    }
  }
};

export { fetchWithoutToken, fetchWithToken };
