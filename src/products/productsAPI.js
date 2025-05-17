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
