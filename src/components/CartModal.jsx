import React from "react";
import styled from "styled-components";
import CardModal from "./CardModal";
import { AiOutlineClose } from "react-icons/ai";
import Scroll from "react-scroll";
import _ from "lodash";
import { AiFillCheckCircle } from "react-icons/ai";

var Element = Scroll.Element;

const CartModal = ({
  handleClose,
  handlePay,
  handleClear,
  cards,
  handleDecrease,
  handleIncrease,
  success,
}) => {
  const filtered = _.uniq(cards, "id");
  console.log(filtered);
  let totalCounts = 0;
  let totalPrice = 0;
  filtered.map((card) => {
    totalCounts += card.count;
    totalPrice += Number(card.totalPrice);
  });

  return (
    <>
      <Container>
        <C1>
          {success === false && (
            <Modal>
              <Element
                style={{
                  position: "relative",
                  height: "300px",
                  overflow: "scroll",
                  marginBottom: "100px",
                }}
              >
                {filtered.length === 0 && (
                  <NoCard>There are no selected cards.</NoCard>
                )}
                {filtered.map((card) => (
                  <Element key={card.id}>
                    <CardModal
                      item={card}
                      handleDecrease={handleDecrease}
                      handleIncrease={handleIncrease}
                    />
                  </Element>
                ))}
              </Element>
              <CardFooter>
                <Content>
                  <Clear onClick={handleClear}>Clear all</Clear>
                  <Cone>
                    <Tcard>Total cards</Tcard>
                    <Num>{totalCounts}</Num>
                  </Cone>
                  <Ctwo>
                    <TPrice>Total price</TPrice>
                    <Price>${totalPrice.toFixed(2)}</Price>
                  </Ctwo>
                  <PayContainer>
                    <Button onClick={handlePay}>Pay now</Button>
                  </PayContainer>
                </Content>
              </CardFooter>
            </Modal>
          )}
          {success && (
            <PaymentContainer>
              <PaymentIconContainer>
                <AiFillCheckCircle />
              </PaymentIconContainer>
              <PaymentHeader>Payment success!</PaymentHeader>
            </PaymentContainer>
          )}
          <ButtonContainer>
            <Icon onClick={handleClose}>
              <AiOutlineClose />
            </Icon>
          </ButtonContainer>
        </C1>
      </Container>
    </>
  );
};

export default CartModal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px;
  flex-direction: column;
`;

const C1 = styled.div`
  position: absolute;
  bottom: -10px;
  @media screen and (max-width: 768px) {
    top: 100px;
  }
`;
const Modal = styled.div`
  max-width: 400px;
  background-color: #fff;
  height: 500px;
  width: 400px;
  // padding: 10px;
  border-radius: 20px;

  @media screen and (max-width: 320px) {
    padding: 0px;
    width: auto;
  }
  @media screen and (max-width: 375px) {
    padding: 0px;
    width: 350px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
  }
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  z-index: 12;
`;
const Icon = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  font-size: 0.7rem;
  background-color: red;
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  position: absolute;
  cursor: pointer;
  bottom: -5px;

  &:hover {
    background-color: #d2042d;
    transition: transform 0.5 ease-in;
  }
`;

const CardFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  z-index: 10;
`;
const Content = styled.div`
  background-color: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Cone = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  margin-top: 10px;
  padding: 0px 80px;
`;
const Tcard = styled.p`
  font-size: 15px;
  margin-bottom: 0;
  margin-right: 55px;
  font-weight: 600;
`;
const Num = styled.p`
  margin-bottom: 0;
  font-size: 15px;
  color: red;
`;
const Ctwo = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  margin-top: 5px;
  padding: 0px 80px;
`;
const TPrice = styled.h2`
  font-size: 1.1rem;
  margin-top: 0;
`;
const Price = styled.h2`
  font-size: 1.1rem;
  margin-top: 0;
  color: red;
`;

const PayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: cetner;
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 60px;
  border-radius: 20px;
  background-color: dodgerblue;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: blue;
  }
`;

const Clear = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 0.8rem;
  color: #c5c5c5;
  text-decoration: underline;
  cursor: pointer;
`;

const NoCard = styled.h2`
  padding-top: 50px;
  text-align: center;
  font-weight: 500;
  @media screen and (max-width: 320px) {
    padding: 20px;
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: cetner;
  align-items: cetnter;
  width: 270px;
  height: 250px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  flex-direction: column;
`;

const PaymentHeader = styled.h2`
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 400;
`;
const PaymentIconContainer = styled.div`
  color: #4cbb17;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: cetner;
  margin-top: 50px;
`;
