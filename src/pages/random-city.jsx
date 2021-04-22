import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { units } from "../lib/constants";

export const RandomCityPage = () => {
  const { city, list } = useSelector((state) => state.cities);
  const all = useSelector((state) => state.cities);

  const { name, country, population } = city;

  if (!name) return null;
  const [temperature_now, ...other] = list;
  console.log(temperature_now);
  return (
    <Container>
      <div>
        <div>
          <h2>Random city</h2>
          <h1>{name}</h1>
          <h2>{country}</h2>
          <p>Population {population}</p>
        </div>
        <h1>
          {temperature_now?.main?.temp}
          {units.metric.symbol}
        </h1>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  padding: 30px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
`;

export const CardBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
