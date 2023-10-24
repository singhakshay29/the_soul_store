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
      const databox = data.data;
      const wishlist = databox.items;
      localStorage.setItem(
        "wishlist",
        JSON.stringify({
          wishlist: wishlist,
        })
      );
      console.log(databox);
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
      localStorage.setItem(
        "cartItem",
        JSON.stringify({
          cartItem: data,
        })
      );
      return data;
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
      await fetch(baseUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
        body: JSON.stringify({ quantity: qty }),
      });
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
      await fetch(baseUrl, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
        body: JSON.stringify({ quantity: qty }),
      });
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}
export async function placeOrder(productId, address, quantity) {
  const { addressType, streetName, state, country, city, pinNo } = address;
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.order;
      await fetch(baseUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
        body: JSON.stringify({
          productId: productId,
          quantity: quantity,
          addressType: addressType,
          address: {
            street: streetName,
            city: city,
            state: state,
            country: country,
            zipCode: pinNo,
          },
        }),
      });
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function getOrderList() {
  const user = localStorage.getItem("userDetails");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const response = await fetch(Api.order, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectId: "dm3s7h4e43m1",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Something went wrong");
    }
  }
}
