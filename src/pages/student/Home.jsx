import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-7 text-center">
        <Hero />
        <Companies />
      </div>
    </div>
  );
};

export default Home;
