import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      }else{
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  const [links, setlinks] = useState(["Features", "Team", "Signin"]);
  return (
    <header ref={headerRef} className="pt-[60px] fixed top-0 w-full z-50 transition-all duration-200">
      <div className="container mx-auto flex justify-between items-center px-[60px] sm:gap-5 gap-[30px]  flex-col sm:flex-row ">
        <a href="/" >
          <img src="../../src/assets/images/logo.svg" alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-12 ">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 mb-[50px]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
