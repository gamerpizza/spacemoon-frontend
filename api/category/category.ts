import { Category } from "../../model/category";
import { fullUrl } from "../api";

const categoryRoute = "/api/order";

const CategoryAPI = Object.freeze({
  createCategory: (formData: any, token: any) =>
    createCategory(formData, token),
  deleteCategory: (id: number) => deleteCategory(id),
  updateCategory: (id: number, category: Category) =>
    updateCategory(id, category),
  getAllCategories: () => getAllCategories(),
  getCategory: (id: number) => getCategory(id),
});

const createCategory = (formData: any, token: any) =>
  fetch(`${fullUrl}/api/category/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

const updateCategory = (id: number, category: Category) =>
  fetch(`${fullUrl}${categoryRoute}/updateCategory/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category: category, id: id }),
  });

const deleteCategory = (id: number) =>
  fetch(`${fullUrl}${categoryRoute}/deleteCategory/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
    body: JSON.stringify({ id }),
  });

const getCategory = (id: number) =>
  fetch(`${fullUrl}/api/category/${id}/get`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
  });
const getAllCategories = () => {
  return fetch(`${fullUrl}/api/category/get/0/1000`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
  });
};
export default CategoryAPI;
