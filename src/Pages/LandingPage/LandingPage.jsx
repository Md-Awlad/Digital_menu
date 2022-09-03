import React from "react";
import Menu from "../../Components/AllMenu/Menu/Menu";
import Banner from "../../Components/Banner";
import Layout from "../../Components/Layouts/Layouts";

const LandingPage = () => {
  return (
    <Layout>
      <Banner />
      <Menu />
    </Layout>
  );
};

export default LandingPage;
