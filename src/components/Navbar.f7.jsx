const Navbar = ({ name }) => {
  return () => (
    <div class="navbar  ">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <a href="#" class="link">
            <i class="icon f7-icons">bars</i>
          </a>
        </div>
        <div
          class="title text-color-blue"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
