const ImgData = ({ item, onView, onShow }) => {
  const { title, imgurl, id, isShow } = item;
  return (
    <li
      className={isShow ? "on" : ""}
      onClick={() => {
        onView(id);
        onShow(id);
      }}
    >
      <img src={imgurl} alt={title}></img>
    </li>
  );
};

export default ImgData;
