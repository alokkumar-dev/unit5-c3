import { Link } from "react-router-dom";

export const Navbar = () => {
  // const links = [
  //   { to: "/", title: "Home" },
  //   { to: "/history", title: "History" },
  //   { to: "/mystery", title: "Mystery" },
  //   { to: "/mythology", title: "Mythology" },
  //   { to: "/technology", title: "Technology" },
  // ];
  return (
    <>
      <div
        className="navbar"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <button className="home">
          
          <Link to="/" >Home</Link>
        </button>
        <button className="mystery">
          Mystery
          <Link to="/mystery"></Link>
        </button>
        <button className="technology">
          Technolory
          <Link to="/technology"></Link>
        </button>
        <button className="mythology">
        Mythology
          <Link to="/mythology"></Link>
        </button>
        <button className="history">
        History
          <Link to="/history"></Link>
        </button>
      </div>
    </>
  );
};
