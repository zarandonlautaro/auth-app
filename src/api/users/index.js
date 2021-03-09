/* eslint-disable import/prefer-default-export */
import axios from "../../services/axiosInstance";
import errorHandler from "../error/handler";

const get = async () => {
  try {
    const response = await axios.get("/users");

    return {
      success: true,
      data: response.data.body,
    };
  } catch (err) {
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

const getByID = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);

    return {
      success: true,
      data: response.data.data,
    };
  } catch (err) {
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

const getRelatedProducts = async (productId) => {
  try {
    const response = await axios.get(`/products/${productId}/related_products`);

    return {
      success: true,
      data: response.data.data,
    };
  } catch (err) {
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

const getPromotedProducts = async (storeId) => {
  try {
    const response = await axios.get(
      `/products/promotions_products?code=${storeId}`,
    );

    return {
      success: true,
      data: response.data.data,
    };
  } catch (err) {
    console.log(err.message);
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

const getNewnessProducts = async (storeId) => {
  try {
    const response = await axios.get(
      `/products/newness_products?code=${storeId}`,
    );

    return {
      success: true,
      data: response.data.data,
    };
  } catch (err) {
    console.log(err.message);
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

export default {
  get,
  getByID,
  getRelatedProducts,
  getPromotedProducts,
  getNewnessProducts,
};
