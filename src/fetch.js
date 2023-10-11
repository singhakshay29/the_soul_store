import Api from "./Api";

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
