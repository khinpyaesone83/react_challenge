import React from "react";
import styled from "styled-components";
import _ from "lodash";

const Buttons = ({
  handleChange,
  searchQuery,
  handleSelect,
  selectData,
  cards,
}) => {
  let types = [];
  let raritys = [];
  let sets = [];
  cards.map((card) => {
    types = [card.types[0], ...types];
    raritys = [card.rarity, ...raritys];
    sets = [card.set.name, ...sets];
  });
  let cardTypes = _.uniq(types);
  let cardRarity = _.uniq(raritys);
  let cardsRar = _.reject(cardRarity, _.isEmpty);
  let cardSets = _.uniq(sets);

  return (
    <>
      <ButtonGp>
        <G1>
          <MInput
            type="text"
            placeholder="Name.."
            value={searchQuery}
            onChange={handleChange}
          />
        </G1>
        <G2>
          <SelectBtn>
            <Bone onChange={handleSelect} name="type" value={selectData.type}>
              <DropdownItem>Type</DropdownItem>

              {cardTypes.map((type) => (
                <DropdownItem key={type}>{type}</DropdownItem>
              ))}
            </Bone>
            <Btwo
              onChange={handleSelect}
              name="rarity"
              value={selectData.rarity}
            >
              <DropdownItem>Rarity</DropdownItem>
              {cardsRar.map((rar) => (
                <DropdownItem key={rar}>{rar}</DropdownItem>
              ))}
            </Btwo>
            <Bthree onChange={handleSelect} name="set" value={selectData.set}>
              <DropdownItem>Set</DropdownItem>
              {cardSets.map((set) => (
                <DropdownItem key={set}>{set}</DropdownItem>
              ))}
            </Bthree>
          </SelectBtn>
        </G2>
      </ButtonGp>
    </>
  );
};

export default Buttons;

const DropdownItem = styled.option``;

const ButtonGp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30px;
    flex-direction: column;
  }
`;
const MInput = styled.input`
  padding: 6.5px 30px;
  border: none;
  outline: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-right: 3px;

  @media screen and (max-width: 450px) {
    padding: 6.5px 70px;
    border: none;
    outline: none;
    border-radius: 20px;
    text-align: center;
  }
`;
const G1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const G2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  @media screen and (max-width: 450px) {
    margin-top: 20px;
    flex-wrap: wrap;
  }
`;
const SelectBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Bone = styled.select`
  margin-right: 3px;
  border: none;
  outline: none;
  color: #c0c0c0;
  padding: 5.4px 10px;
  cursor: pointer;
  background-color: #fff;

  @media screen and (max-width: 450px) {
    border-radius: 15px;
    padding: 6.5px 20px;
  }
`;
const Btwo = styled.select`
  margin-right: 3px;
  border: none;
  outline: none;
  color: #c0c0c0;
  padding: 5.4px 10px;
  cursor: pointer;
  background-color: #fff;

  @media screen and (max-width: 450px) {
    border-radius: 15px;
    padding: 6.5px 20px;
    // margin-top: 10px;
  }
  @media screen and (max-width: 425px) {
    // margin-bottom: 10px;
  }
  @media screen and (max-width: 375px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 10px;
  }
`;
const Bthree = styled.select`
  margin-right: 3px;
  border: none;
  outline: none;
  color: #c0c0c0;
  padding: 5.4px 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  background-color: #fff;

  @media screen and (max-width: 450px) {
    border-radius: 15px;
    padding: 6.5px 20px;
    margin-top: 10px;
  }
`;
