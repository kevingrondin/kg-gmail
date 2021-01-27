import "./Section.css";

const Section = ({ title, Icon, color, selected }) => (
  <div
    className={`section ${selected && "selection--selected"}`}
    style={{
      borderBottom: ` 3px solid ${color} `,
      color: ` ${selected && color}`,
    }}
  >
    <Icon />
    <h4>{title}</h4>
  </div>
);

export default Section;
