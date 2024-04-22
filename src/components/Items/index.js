import "./index.css";
const Mycard = (props) => {
  const { cardData } = props;
  const { id, name, imgUrl } = cardData;
  return (
    <div className="fff">
      <img src={imgUrl} alt="IMAGE" className="image" />
      <h1 className="h1">{name}</h1>
    </div>
  );
};

export default Mycard;
