import * as React from "react";
import Carousel from "../../components/Carousel.tsx";

type LandingPageProps = {
  title: string;
};

const LandingPage = ({ title }: LandingPageProps): JSX.Element => {
  return (
    <div className="text-bold text-center m-16 text-slate-600 font-sans">
      {title}
      <Carousel />
    </div>
  );
};

export default LandingPage;
