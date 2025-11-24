import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h1 className=" text-primary">Navbar</h1>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
