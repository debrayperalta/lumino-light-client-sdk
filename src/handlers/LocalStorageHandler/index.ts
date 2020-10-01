import { SaveLuminoData, GetLuminoData } from "../../types/store";

const getLuminoData: GetLuminoData = () => {
  const data = JSON.parse(localStorage.getItem("lumino"));
  return data;
};

const saveLuminoData: SaveLuminoData = data =>
  localStorage.setItem("lumino", JSON.stringify(data));

export default {
  getLuminoData,
  saveLuminoData,
};
