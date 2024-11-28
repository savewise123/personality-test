import { Outlet } from "react-router-dom";
function LayOut() {
  return (
    <>
      <header>헤더</header>
      <Outlet />
      <footer>푸터</footer>
    </>
  );
}

export default LayOut;
