import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ChipBag from "./ChipBag";

const Chips = () => {
  const emptyList = [{ posX: -1000, posY: -1000, id: null }];
  const [chipNum, setChipNum] = useState(0);
  const [bagList, setBagList] = useState(emptyList);

  const getRandomNumX = () => {
    return Math.floor(Math.random() * (1880 - 100 + 1)) + 100;
  };
  const getRandomNumY = () => {
    return Math.floor(Math.random() * (800 - 50 + 1)) + 50;
  };

  const addBag = (e) => {
    e.preventDefault();
    const addNum = () => setChipNum(chipNum + 1);
    console.log(bagList[0].posX);
    if (bagList[0].posX === -1000) {
      setBagList((bagList) => [
        { posX: getRandomNumX(), posY: getRandomNumY(), id: uuid() },
      ]);
    } else {
      setBagList((bagList) => [
        ...bagList,
        { posX: getRandomNumX(), posY: getRandomNumY(), id: uuid() },
      ]);
    }
    addNum();
  };
  console.log(bagList);
  return (
    <div className="Chips">
      <Link to="/" className="HomeLink">
        Go Back
      </Link>
      <div className="chipAdded">
        <p>{chipNum} Bag of chips</p>
        <button onClick={addBag}>Get Chips</button>
      </div>
      {bagList.map(({ posX, posY, id }) => {
        return <ChipBag X={posX} Y={posY} key={id} />;
      })}
    </div>
  );
};

export default Chips;
