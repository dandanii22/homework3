import BigImg from "./BigImg";
import ImgList from "./ImgList";

const ImgView = ({ data, test, onView, onShow }) => {
  return (
    <div>
      <BigImg test={test} />
      <ImgList data={data} onView={onView} onShow={onShow} />
    </div>
  );
};

export default ImgView;
