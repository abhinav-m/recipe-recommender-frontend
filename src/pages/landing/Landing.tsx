import * as React from "react";

type LandingPageProps = {
  title: string;
};

const LandingPage = ({ title }: LandingPageProps): JSX.Element => {
  return <div className="container">{title}</div>;
};

export default LandingPage;
