import Image from "next/image";
import Logo from "../components/assets/Footer-Logo.png";
import InstagramLogo from "../components/assets/Instagram.png";
import TwiterLogo from "../components/assets/Twitter.png";
import YoutubeLogo from "../components/assets/Youtube.png";

const Footer = () => {
  return (
    <footer className=" text-[0.60rem] text-[#D9DBE1] bg-[#503431] h-[70px] flex justify-between items-center p-5 md:text-[0.6rem] md:h-[80ingpx] md:px-[80px]">
      <Image
        src={Logo}
        alt="Logo"
        quality={100}
        placeholder="blur"
        className=" w-[80px]"
      />
      <p className=" text-center w-[140px] md:w-[250px] ">&copy; 2024 Rockbottom Initiative. All rights reserved</p>
      <div className=" flex gap-1 md:gap-5 ">
        <Image
          src={InstagramLogo}
          alt="Logo"
          quality={100}
          placeholder="blur"
        />
        <Image
          src={TwiterLogo}
          alt="Logo"
          quality={100}
          placeholder="blur"
        />
        <Image
          src={YoutubeLogo}
          alt="Logo"
          quality={100}
          placeholder="blur"
        />
      </div>
    </footer>
  );
};

export default Footer;
