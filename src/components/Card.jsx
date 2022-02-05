import React from "react";
import styled from "styled-components";

const Card = ({ image, title, rarity, price, stock, onSelect }) => {
  return (
    <>
      <CardContainer>
        <Image src={image} alt="pokemon" />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardStatus>{rarity}</CardStatus>
          <CardPrice>
            <Price>$ {price}</Price>
            <Stock>{stock} left</Stock>
          </CardPrice>
        </CardContent>
        <Button onClick={onSelect}>Select card</Button>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  height: 200px;
  width: 300px;
  background-color: #fff;
  border-radius: 25px;
  margin-top: 230px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-left: 50px;
  position: relative;
`;
const CardContent = styled.div`
  padding-top: 50px;
  text-align: center;
`;
const Image = styled.img`
  width: 200px;
  height: 270px;
  position: absolute;
  top: -190px;
  border-radius: 20px;
`;
const CardTitle = styled.h2`
  padding: 0;
  margin: 0;
`;
const CardStatus = styled.p`
  padding: 0;
  margin: 3px;
  color: #1f51ff;
`;
const CardPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c5c5c5;
`;
const Price = styled.p`
  color: #808080;
`;
const Stock = styled.p`
  margin-left: 15px;
  color: #808080;
`;
const Button = styled.button`
  padding: 15px 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #ffc000;
  position: absolute;
  bottom: -20px;
  cursor: pointer;
  font-weight: 600px;
  font-size: 1rem;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: transform 0.5s ease-out;
  }
`;
