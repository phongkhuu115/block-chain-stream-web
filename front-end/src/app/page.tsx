"use client"
import { useAxios } from '../hooks/useAxios';
import { getAxiosParam } from '../helpers/api';
const MainPage = () => {
  console.log(useAxios(getAxiosParam("https://provinces.open-api.vn/api/?depth=2")));

  return <main>Hello World</main>;
};

export default MainPage;
