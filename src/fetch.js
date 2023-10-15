import Api from "./Api";

export async function productList() {
  try {
    const response = await fetch(Api.productlistAPI, {
      method: "GET",
      headers: {
        projectId: "dm3s7h4e43m1",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const products = data.data;
    localStorage.setItem(
      "stock",
      JSON.stringify({
        stock: products,
      })
    );
    return products;
  } catch (error) {
    console.error("Something went wrong");
  }
}

export async function loginUser(email, password) {
  const url = Api.login;
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      projectId: "dm3s7h4e43m1",
    },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      appType: "ecommerce",
    }),
  });
  return response;
}

export async function signup(username, email, password) {
  const url = Api.signup;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      projectId: "dm3s7h4e43m1",
    },
    body: JSON.stringify({
      name: `${username}`,
      email: `${email}`,
      password: `${password}`,
      appType: "ecommerce",
    }),
  });
  return response;
}

export async function addWishlist(productId) {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.wishlist;
      const response = await fetch(baseUrl, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectId: "dm3s7h4e43m1",
        },
        body: JSON.stringify({ productId: productId }),
      });
      return response;
    } catch (error) {
      console.error("Somethings went wrong");
    }
  }
}

export async function removeWishlist(productId) {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseApi = Api.wishlist + productId;
      const response = await fetch(baseApi, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectId: "dm3s7h4e43m1",
        },
      });
      return response;
    } catch (error) {
      console.error("Something went wrong");
    }
  }
}

export async function getWishlist() {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.wishlist;
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
      });
      const data = await response.json();
      console.log(data);
      const databox = data.data;
      return databox;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function getCart() {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const response = await fetch(Api.cart, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
      // setResults(data.results);
      // setProducts(data.data);
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function addCart(productId, qty) {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.cart + productId;
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
        body: JSON.stringify({ quantity: qty }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function removeCart(productId, qty) {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.cart + productId;
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
        body: JSON.stringify({ quantity: qty }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}
