import axios from "axios";
import {  GetTodosParams } from "../data/types/types";

const instance = axios.create({ baseURL: "http://localhost:8000" });

export const GET = (url: string, params?: GetTodosParams) => {
  return instance.get(url, { params }).then((res) => res.data);
};

export const PATCH = async (url: string, body: any) => {
  return await instance.patch(url, body).then((res) => res.data);
};

export const DELETE = (url: string) => {
  return instance.delete(url).then((res) => res.data);
};

export const POST = (url: string, body: any) => {
  console.warn("PPOST BODY", body);
  return instance.post(url, body).then((res) => res.data);
};
