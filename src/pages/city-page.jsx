import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { fetchCity } from "../features/city";
import { units } from "../lib/constants";

export const CityPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { city, list } = useSelector((state) => state.city);

  const { name, country, population } = city;

  React.useEffect(() => {
    if (id && name.toLowerCase() !== id) {
      dispatch(fetchCity(id));
    }
  }, [id]);

  if (!name || name.toLowerCase() !== id) return null;

  const [temperature_now, ...other] = list;

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
