import ImgData from "./ImgData";

const ImgList = ({ data, onView, onShow }) => {
  return (
    <ul>
      {data?.map((item) => (
        <ImgData key={item.id} item={item} onView={onView} onShow={onShow} />
      ))}
    </ul>
  );
};

export default ImgList;
