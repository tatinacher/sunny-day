import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { citiesWeather } from "../lib/constants";

export const Navbar = () => (
  <Menu>
    <Link to="/">Home</Link>
    {citiesWeather.map(({ name, url }) => (
      <Link to={url} key={url}>
        {name}
      </Link>
    ))}
  </Menu>
);

export const Menu = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #f5f5f5;
  flex-direction: column;
  font-size: 30px;
  padding-top: 45px;
  a {
    padding: 10px 30px;
    text-decoration: none;
    color: black;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;
