import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "lightgreen",
          color: "while",
          padding: "5px"
          
        }}
      >
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button className="home"><Link to={"/"}>Home</Link></button>
        <button className="history"><Link to={"section/history"}>History</Link></button>
        <button className="mystory"><Link to={"section/mystory"}>Mystory</Link></button>
        <button className="mytholory"><Link to={"section/mytholory"}>Mythology</Link></button>
        <button className="technolory"><Link to={"section/technolory"}>Technolory</Link></button>
      </div>
    </>
  );
};
