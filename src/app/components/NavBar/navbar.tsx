import Image from "next/image";
import NavBarButtons from "../Navbar-Buttons/navbar-buttons";
function NavBar() {
  return (
    <header>
      <nav className="pokeBall-Bg">
        <div className="justify-between flex">
          <div className=" flex flex-wrap items-center justify-start p-2">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/logo.png"
                width={200}
                height={150}
                className=" text-white relative"
                alt="Pokemon logo"
              />
            </a>
          </div>
          <div style={{ marginBottom: "10vh" }}>
            <ul className="flex  font-medium p-2 md:p-0 mt-4 border mr-5 align-middle ">
              <NavBarButtons name="Inicio" reference="/" />
              <NavBarButtons name="Acerca de" reference="/about" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
