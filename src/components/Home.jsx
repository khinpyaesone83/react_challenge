import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Scroll from "react-scroll";

import Buttons from "./Buttons";
import Card from "./Card";
import { paginate } from "./paginate";
import ViewCart from "./ViewCart";
import CartModal from "./CartModal";

var Element = Scroll.Element;

const secretApi = "5ee772b2-dce3-4e1c-bae4-b03bcf14e5a7";
const URL = "https://api.pokemontcg.io/v2/cards/";

const Home = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [select, setSelect] = useState({ type: "", rarity: "", set: "" });
  const [showCart, setShowCart] = useState(false);
  const [selectCards, setSelectCards] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const getData = async () => {
    const response = await axios.get(URL, {
      headers: {
        "X-Api-Key": secretApi,
      },
    });
    const data = response.data.data;
    data.map((d) => (d.count = 0));
    data.map((d) => (d.totalPrice = d.cardmarket.prices.averageSellPrice));
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShow = () => {
    const size = pageSize + 12;
    setPageSize(size);
    setShow(true);
  };

  const handleSelectCard = (card) => {
    const item = card;
    item.set.total--;
    item.count++;
    item.totalPrice = (
      item.cardmarket.prices.averageSellPrice * item.count
    ).toFixed(2);
    const cards = [item, ...selectCards];
    setSelectCards(cards);
  };

  const handleSelect = ({ target: input }) => {
    const selectType = { ...select };
    selectType[input.name] = input.value;
    setSelect(selectType);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCart = () => {
    setShowCart(true);
  };
  const handleClose = () => {
    setShowCart(false);
    setPaymentSuccess(false);
    setSelectCards([]);
  };

  const handleDecrease = (item) => {
    item.count--;
    item.set.total++;
    item.totalPrice = (
      item.cardmarket.prices.averageSellPrice * item.count
    ).toFixed(2);
    const cards = [...selectCards];
    if (item.count === 0) {
      const index = cards.indexOf(item);
      cards[index] = { ...item };
      const filter = cards.filter((c) => c.id !== item.id);
      setSelectCards(filter);
    } else {
      setSelectCards(cards);
    }
  };

  const handleIncrease = (item) => {
    item.count++;
    item.set.total--;
    item.totalPrice = (
      item.cardmarket.prices.averageSellPrice * item.count
    ).toFixed(2);
    const cards = [item, ...selectCards];
    setSelectCards(cards);
  };

  const handleClear = () => {
    setSelectCards([]);
  };

  const handlePay = () => {
    setPaymentSuccess(true);
  };
  let filtered = data;
  let cards;

  const showData = () => {
    cards = paginate(filtered, pageSize);
    setShow(false);
    return cards;
  };

  if (searchQuery)
    filtered = data.filter((c) =>
      c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  if (select.type || select.rarity || select.set) {
    filtered = data.filter(
      (c) =>
        c.types[0] === select.type ||
        c.rarity === select.rarity ||
        c.set.name === select.name
    );
  }
  cards = paginate(filtered, pageSize);
  if (show) {
    cards = showData();
  }

  return (
    <>
      <Element
        style={{
          position: "relative",
          height: "100vh",
          overflow: "scroll",
          // marginBottom: "10px",
        }}
      >
        <Buttons
          handleChange={handleChange}
          searchQuery={searchQuery}
          handleSelect={handleSelect}
          selectData={select}
          cards={data}
        />
        <Container>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                image={card.images.small}
                title={card.name}
                rarity={card.rarity}
                price={card.cardmarket.prices.averageSellPrice}
                stock={card.set.total}
                onSelect={() => handleSelectCard(card)}
              />
            );
          })}
        </Container>
        <ShowBtn onClick={handleShow}>
          <AiOutlineSearch />
          <Button>show more</Button>
        </ShowBtn>
      </Element>
      {showCart && (
        <Element>
          <CartModal
            handleClose={handleClose}
            cards={selectCards}
            success={paymentSuccess}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleClear={handleClear}
            handlePay={handlePay}
          />
        </Element>
      )}
      {showCart === false && (
        <Element>
          <ViewCart handleCart={handleCart} data={selectCards} />
        </Element>
      )}
    </>
  );
};

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const ShowBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px;
  color: #36454f;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #696969;
    transition: transform 0.5s ease-in;
  }
`;

const Button = styled.div`
  font-size: 14px;
  font-weight: 400px;
  padding-left: 5px;
`;
