import img1 from "./assets/estate.png";
import { TiThMenu } from "react-icons/ti";
export default function Header() {
  return (
    <div>
      <nav>
        <div className="flex justify-around items-center p-4 md:p-7">
          <img src={img1} alt="estate" />
          <ul className="text-[#eeeeff]   font-semibold font-serif items-center hidden md:flex gap-20 ml-10 ">
            <li>
              <a href="#residencies">Residencies</a>
            </li>
            <li>
              <a href="#value">Our Value</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#get-started">Get Started</a>
            </li>

            <button className="button bg-[#4066ff] mr-16 px-3 py-2 rounded-md">
              <a href="#">Contact</a>
            </button>
          </ul>
          <TiThMenu
            className="text-white items-center  mt-2  md:hidden"
            size={20}
          />
        </div>
      </nav>
    </div>
  );
}
