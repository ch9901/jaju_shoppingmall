const getProduct = () => {
  return async (dispatch) => {
    const url =
      "https://my-json-server.typicode.com/ch9901/jaju-shoppingmall/products";
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

export const productAction = { getProduct };