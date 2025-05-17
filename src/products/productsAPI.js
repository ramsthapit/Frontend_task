export const fetchCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");

  if (!res.ok) {
    throw {
      status: res.status,
      message: "Failed to fetch categories.",
    };
  }

  return await res.json();
};

export const fetchProducts = async (page = 1, category = "") => {
  const skip = (page - 1) * 10;
  const baseUrl =
    category === ""
      ? "https://dummyjson.com/products"
      : `https://dummyjson.com/products/category/${category}`;

  const res = await fetch(
    `${baseUrl}?limit=10&skip=${skip}&select=title,category,rating,price`
  );

  if (!res.ok) {
    throw {
      status: res.status,
      message:
        res.status === 404
          ? "Requested category or resource was not found."
          : res.status === 500
          ? "Server error. Please try again later."
          : "An unexpected error occurred.",
    };
  }

  return await res.json();
};
