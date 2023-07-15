const ChipBag = (props) => {
  console.log(props.X);
  return (
    <img
      className="Bag"
      style={{
        position: "absolute",
        left: `${props.X}px`,
        top: `${props.Y}px`,
        width: "70px",
      }}
      src="https://thumbs.dreamstime.com/z/yellow-chips-pack-icon-flat-illustration-yellow-chips-pack-vector-icon-web-design-yellow-chips-pack-icon-flat-style-158722659.jpg?w=768"
      alt="chip bag"
    />
  );
};

export default ChipBag;
