const TextList = ({ item, onShow }) => {
  const { id, title, desc, isShow } = item;
  return (
    <div className="acco">
      <dt className={isShow ? "on" : ""} onClick={() => onShow(id)}>
        <h3>{title}</h3>
      </dt>
      <dd className={isShow ? "on" : ""}>
        <p>{desc}</p>
      </dd>
    </div>
  );
};

export default TextList;
