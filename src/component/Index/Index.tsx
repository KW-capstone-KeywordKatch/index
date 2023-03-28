import React from "react";
import GridLayout from "../Layout/GridLayout";
import IndexFeature from "./IndexFeature";
import IndexImageSlide from "./IndexImageSlide";
import IndexLine from "./IndexLine";
import IndexStartWithUs from "./IndexStartWithUs";
import Footer from "./../Footer/Footer";

const Index: React.FunctionComponent = () => {
  return (
    <main className="relative top-[64px] overflow-x-hidden">
      <GridLayout>
        <IndexImageSlide />
        <IndexFeature />
        <IndexLine />
        <IndexStartWithUs />
      </GridLayout>
      <Footer />
    </main>
  );
};

export default Index;
