import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 240px;
  height: 100vh;
  max-height: 240px;
  display: flex;
  gap: 5px;
  margin: 20px auto 20px auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  padding: 5px;
  text-align: center;
`;
export const Winner = styled.h2`
  font-size: 18px;
  font-weight: bold;
  font-family: "Audiowide", cursive;
  color: #2ba1f0;
  text-align: center;
`;

export const ActualPlayer = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: "Audiowide", cursive;
  color: #2ba1f0;
  text-align: center;
`;
