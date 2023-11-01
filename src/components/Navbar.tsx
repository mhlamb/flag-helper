import icon from "../assets/earth-icon.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center px-20 py-5 nav-bar">
        <img src={icon} width="30px" />
        <h1 className="font-bold text-2xl mx-3">Flag Helper</h1>
        <img src={icon} width="30px" />
      </div>
    </>
  );
};

export default Navbar;
