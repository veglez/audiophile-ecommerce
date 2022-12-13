export default class API {
  static async getAllProduct() {
    try {
      const response = await fetch("/products");
      const result = await response.json();
      return result;
    } catch (e: any) {
      console.log("An error: ", e.message);
      return "Cannot get products";
    }
  }

  static async addProduct(product: Cart.Product) {
    try {
      const response = await fetch("/products", {
        body: JSON.stringify(product),
        method: "POST",
      });

      return response.json();
    } catch (error) {
      console.log("We could add a product: ", error);
      return "Cannot add product";
    }
  }
}
