const BigImg = ({ test }) => {
  const { title, imgurl, id } = test;
  return (
    <div className="bigimg">
      <div>
        <h2>{title}</h2>
        <p>{id}/5</p>
      </div>

      <img src={imgurl} alt={title} />
    </div>
  );
};

export default BigImg;
