import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="Home">
      <div className="welcomeText">
        <p>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT</p>
      </div>
      <div className="Nav">
        <Link to={"Soda"} className="link">
          SODA
        </Link>
        <Link to={"Chips"} className="link">
          CHIPS
        </Link>
        <Link to={"Fresh_Sardines"} className="link">
          FRESH SARDINES
        </Link>
      </div>
    </div>
  );
};

export default Home;
