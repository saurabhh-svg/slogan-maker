import "./button.css";

function Button(props) {
  return (
    <>
      <button className="btn-primary">{props.text}</button>
    </>
  );
}

export default Button;
