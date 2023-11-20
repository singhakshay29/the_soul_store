import Api from "./Api";
import axios from "axios";
import { service2 } from "./service";

export async function productList() {
  const data = localStorage.getItem("productsList");
  const productsList = JSON.parse(data);
  let productItemData = [];
  let products = [];
  if (productsList) {
    productItemData = service2(productsList);
  } else {
    try {
      const response = await axios.get(Api.productlistAPI, {
        headers: {
          projectId: "dm3s7h4e43m1",
        },
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      products = response.data.data;
      if (products.length > 0) {
        productItemData = service2(products);
      }
      localStorage.setItem("productsList", JSON.stringify(products));
    } catch (error) {
      console.error("Something went wrong");
    }
  }
  return {
    products,
    productItemData,
  };
}

export async function loginUser(email, password) {
  try {
    const url = Api.login;
    const response = await axios.post(
      url,
      {
        email: `${email}`,
        password: `${password}`,
        appType: "ecommerce",
      },
      {
        headers: {
          "Content-Type": "application/json",
          projectId: "dm3s7h4e43m1",
        },
      }
    );
    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem(
        "authorization",
        JSON.stringify({
          signup: data,
        })
      );
      return data;
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log("Something went Wrong");
  }
}

export async function signup(username, email, password) {
  try {
    const url = Api.signup;
    const response = await axios.post(
      url,
      {
        name: `${username}`,
        email: `${email}`,
        password: `${password}`,
        appType: "ecommerce",
      },
      {
        headers: {
          "Content-Type": "application/json",
          projectId: "dm3s7h4e43m1",
        },
      }
    );
    if (response.status === 200) {
      const responseData = response.data;
      localStorage.setItem(
        "authorization",
        JSON.stringify({
          signup: responseData,
        })
      );
      return responseData;
    }
  } catch (error) {
    console.log("Something went Wrong");
  }
}

export async function addWishlist(productId) {
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.wishlist;
      const response = await axios.patch(
        baseUrl,
        { productId: productId },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectId: "dm3s7h4e43m1",
          },
        }
      );
      const data = response.data;
      return data.status;
    } catch (error) {
      console.error("Somethings went wrong");
    }
  }
}

export async function removeWishlist(productId) {
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseApi = Api.wishlist + productId;
      const response = await axios.delete(baseApi, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectId: "dm3s7h4e43m1",
        },
      });
      const data = response.data;
      return data.status;
    } catch (error) {
      console.error("Something went wrong");
    }
  }
}

export async function getWishlist() {
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.wishlist;
      const response = await axios.get(baseUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
      });

      const databox = response.data.data;
      const wishlist = databox.items;

      localStorage.setItem(
        "wishlist",
        JSON.stringify({
          wishlist: wishlist,
        })
      );

      return databox;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function getCart() {
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const response = await axios.get(Api.cart, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
      });

      const data = response.data;
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
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.cart + productId;
      const response = await axios.post(
        baseUrl,
        { quantity: qty },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectid: "dm3s7h4e43m1",
          },
        }
      );

      const data = response.data;
      return data.status;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function removeCart(productId, qty) {
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.cart + productId;
      const response = await axios.delete(baseUrl, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectid: "dm3s7h4e43m1",
        },
        data: { quantity: qty },
      });

      const data = response.data;
      return data.status;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}
export async function placeOrder(productId, address, quantity) {
  const { addressType, streetName, state, country, city, pinNo } = address;
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const baseUrl = Api.order;
      const response = await axios.post(
        baseUrl,
        {
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
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedData.signup.token}`,
            projectid: "dm3s7h4e43m1",
          },
        }
      );

      const data = response.data;
      return data.status;
    } catch (error) {
      console.log("Somethings went wrong");
    }
  }
}

export async function getOrderList() {
  const user = localStorage.getItem("authorization");
  if (user) {
    const parsedData = JSON.parse(user);
    try {
      const response = await axios.get(Api.order, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedData.signup.token}`,
          projectId: "dm3s7h4e43m1",
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = response.data;
      return data;
    } catch (error) {
      console.error("Something went wrong");
    }
  }
}

export function handleLoginGoogle(decoded) {
  const { given_name, family_name, email, jti } = decoded;
  return {
    given_name,
    family_name,
    email,
    jti,
  };
}
export async function searchList(title) {
  try {
    const response = await axios.get(Api.searchApi + title, {
      headers: {
        projectId: "dm3s7h4e43m1",
      },
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = response.data;
    return data?.data;
  } catch (error) {
    console.error("Something went wrong");
  }
}
