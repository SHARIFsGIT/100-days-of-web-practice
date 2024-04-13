import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="text-black bg-yellow-50 p-6">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose></IoMdClose> : <HiMenuAlt1></HiMenuAlt1>}
      </div>
      <ul className={`md:flex absolute bg-yellow-50 px-6 duration-1000 md:static ${open ? 'top-16' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
