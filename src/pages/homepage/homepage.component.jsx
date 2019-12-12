import React from "react";
import { HomepageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <HomepageContainer>
    <Directory />
  </HomepageContainer>
);

export default HomePage;
