import TextList from "./TextList";

const Text = ({ data, onShow }) => {
  return (
    <dl className="text">
      {data.map((item) => (
        <TextList key={item.id} item={item} onShow={onShow} />
      ))}
    </dl>
  );
};

export default Text;
