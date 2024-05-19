import ImgView from "./ImgView";
import Text from "./Text";
import "./style.scss";
import { useState, useEffect } from "react";
import dataList from "../assets/api/imgdata";

const Main = () => {
  const [data, setData] = useState(dataList);
  const [test, setTest] = useState(data[0]);
  const [count, setCount] = useState(0);
  const onView = (id) => {
    setTest(data.find((item) => item.id === id));
  };
  const onShow = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }
      )
    );
  };
  const onClickRight = (count) => {
    setCount((next) => next + 1);
    if (count > 4) {
      count = 0;
    }
  };

  const onClickLeft = (count) => {
    setCount((prev) => prev - 1);
    if (count < 0) {
      count = 4;
    }
  };

  useEffect(() => {
    setTest(data[count]);
    setData(
      data.map((item) => {
        return {
          ...item,
          isShow: item.id === count + 1 ? true : false,
        };
      })
    );
  }, [count]);

  return (
    <div className="wrap">
      <ImgView data={data} test={test} onView={onView} onShow={onShow} />
      <Text onShow={onShow} data={data} />
      <div className="icon">
        <p className="prev" onClick={onClickLeft}>
          <i className="xi-angle-left"></i>
        </p>
        <p className="next" onClick={onClickRight}>
          <i className="xi-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Main;
