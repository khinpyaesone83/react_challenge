import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import _ from "lodash";

const ViewCart = ({ handleCart, data }) => {
  const filtered = _.uniq(data, "id");
  let counts = 0;
  filtered.map((card) => {
    counts += card.count;
  });

  return (
    <>
      <CartContainer onClick={handleCart}>
        <Cart>
          <CartBadge>{counts}</CartBadge>
          <Icon />
          <Text>View cart</Text>
        </Cart>
      </CartContainer>
      <Shadow></Shadow>
    </>
  );
};

export default ViewCart;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const CartBadge = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -8px;
  top: -8px;
  font-size: 15px;
`;
const Cart = styled.div`
  width: 100px;
  background-color: dodgerblue;
  color: #fff;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0px 8px;
  bottom: 0px;
  cursor: pointer;

  &:hover {
    background-color: #0000ff;
    transition: transform 0.5 ease-in;
  }
`;
const Icon = styled(AiOutlineShoppingCart)`
  font-size: 20px;
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-left: 7px;
`;

const Shadow = styled.div`
  background-color: red;
`;
