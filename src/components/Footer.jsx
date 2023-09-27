import { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+201212134234" },
    { icon: "icon-email.svg", text: "example@flyo.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    'instagram",',
  ]);
  return (
    <section className=" bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="2-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[40px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full ">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-image"
              className="2-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, modi
              ullam ex aspernatur cumque neque dolores omnis cupiditate
              voluptate.
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex gap-[15px] items-center mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt="icon-image"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[25xp]">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors duration-200 text-base "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a href="" className="group ">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full ">
                    {item === "facebook" ? (
                      <FaFacebookF className=" group-hover:text-primary transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className=" group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className=" group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
