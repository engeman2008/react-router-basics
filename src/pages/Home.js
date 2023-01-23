import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandöler = () => {
    navigate("products");
  };
  return (
    <>
      <h1>My home page</h1>
      <button onClick={navigateHandöler}>Products</button>
    </>
  );
};

export default Home;
