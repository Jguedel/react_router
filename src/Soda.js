import { Link } from "react-router-dom";

const Soda = (props) => {
  return (
    <div className="Soda">
      <Link to="/" className="HomeLink">
        Go Back
      </Link>
    </div>
  );
};

export default Soda;
