import React from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CardModal = ({ item, handleDecrease, handleIncrease }) => {
  return (
    <>
      <Container>
        <ImgContainer>
          <Img src={item.images.small} />
        </ImgContainer>
        <Cone>
          <Tone>
            <H1>{item.name}</H1>
            <Price>${item.cardmarket.prices.averageSellPrice} per card</Price>
            <CardLeft>
              <span style={{ color: "red" }}>{item.set.total}</span> cards left
            </CardLeft>
          </Tone>
          <Ttwo>
            <H2>
              {item.count}
              <Sup>
                <Icon>
                  {item.set.total === 0 && <UpDisableIcon />}
                  {item.set.total !== 0 && (
                    <UpIcon onClick={() => handleIncrease(item)} />
                  )}
                  <DownIcon onClick={() => handleDecrease(item)} />
                </Icon>
              </Sup>
            </H2>
            <Pone>price</Pone>
            <H3>${item.totalPrice}</H3>
          </Ttwo>
        </Cone>
      </Container>
    </>
  );
};

export default CardModal;

const Container = styled.div`
  display: flex;
  margin: 10px;
  background-color: #fff;
  justify-content: space-evenly;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
  height: 130px;
  border-radius: 10px;

  @media screen and (max-width: 470px) {
    width: 60px;
    height: 100px;
  }
`;

const ImgContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cone = styled.div`
  display: flex;
`;
const Tone = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Ttwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px;
`;

const Price = styled.p`
  font-size: 1rem;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 18px;
  text-align: left;

  @media screen and (max-width: 470px) {
    font-size: 0.8rem;
    padding-bottom: 3px;
  }
`;
const Pone = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 0;
`;

const H3 = styled.h2`
  font-size: 1.3rem;
  margin-top: 0;
  color: dodgerblue;
  @media screen and (max-width: 470px) {
    font-size: 1rem;
  }
`;

const H2 = styled.h2`
  color: dodgerblue;
  @media screen and (max-width: 470px) {
    font-size: 1.3rem;
  }
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  padding-bottom: 0;
  margin-bottom: 0;
  padding-top: 20px;
  text-align: left;
  padding-right: 15px;

  @media screen and (max-width: 470px) {
    font-size: 1rem;
  }
`;

const CardLeft = styled.p`
  text-align: left;
  font-size: 15px;
  color: #c6c6c6;
  margin-top: 0;

  @media screen and (max-width: 470px) {
    font-size: 13px;
  }
`;

const Sup = styled.sup`
  vertical-align: supper;
  font-size: smaller;
  position: relative;
`;
const Icon = styled.span`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  top: -10px;
`;
const UpIcon = styled(IoIosArrowUp)`
  font-size: 15px;
  cursor: pointer;
`;

const UpDisableIcon = styled(IoIosArrowUp)`
  font-size: 15px;
  cursor: pointer;
  disabled: true;
  color: #c5c5c5;
`;
const DownIcon = styled(IoIosArrowDown)`
  font-size: 15px;
  cursor: pointer;
`;
