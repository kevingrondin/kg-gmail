import "./Sidebaroption.css";

const Sidebaroption = ({ Icon, number, title, selected }) => (
  <div className={` sidebaroption ${selected && "sidebaroption--active"}`}>
    <Icon />
    <h3>{title}</h3>
    <p>{number}</p>
  </div>
);

export default Sidebaroption;
