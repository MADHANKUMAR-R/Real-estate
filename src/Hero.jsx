import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import img2 from "./assets/hero.png";
export default function Hero() {
  return (
    <section className="Hero mt-10 min-h-screen p-5 ">
      <div
        className="flex flex-col p-4 space-y-8 md:justify-evenly md:flex-row md:p-0 md:gap-3
       items-center "
      >
        <div className="Descrption mt-9">
          <h1 className="text-white font-serif font-bold text-6xl">
            Discover <br />
            Most Suitable
            <br /> Property
          </h1>
          <div className="mt-10">
            <p className="text-[#eeeeff] ">
              Find a variety of properties that suit you very easilty
            </p>
            <p className="text-[#eeeeff]">
              Forget all difficulties in finding a residence for you
            </p>
          </div>

          <div className="flex px-1 py-2 justify-between items-center gap-2 bg-white mt-10 md:p-3">
            <HiLocationMarker className="bg-white text-[#4066ff]" size={25} />
            <input type="text " className=" md:px-5 py-2" />
            <button className="button bg-[#4066ff] px-4 py-2 rounded-md ">
              Search
            </button>
          </div>
          <div className="text-white flex flex-col items-center mt-5 md:mt-10 md:flex-row gap-8 md:items-center">
            <div className="flex  md:flex gap-8 ">
              <div className="Premium flex flex-col items-center ">
                <span className="text-2xl md:flex place-content-center">
                  <CountUp start={8800} end={9000} duration={4} />{" "}
                  <span className="text-yellow-500">+</span>
                </span>

                <span className="secondaryText text-[#eeeeff] md:text-center">
                  Premium Product
                </span>
              </div>
              <div className="Customer flex flex-col items-center md:text-center">
                <span className="text-2xl ">
                  <CountUp start={1950} end={2000} duration={4} />{" "}
                  <span className="text-yellow-500">+</span>
                </span>
                <span className="secondaryText text-[#eeeeff] md:text-center">
                  Happy Customer
                </span>
              </div>
            </div>

            <div className="Awards flex flex-col items-center">
              <span className="Awards text-2xl">
                <CountUp end={28} /> <span className="text-yellow-500">+</span>
              </span>
              <span className="secondaryText text-[#eeeeff] md:text-center">
                Awards Winning
              </span>
            </div>
          </div>
        </div>
        <div className="Image ">
          <img
            src={img2}
            alt=""
            className="h-full w-96 border-8 border-[#1d1207] rounded-t-full"
          />
        </div>
      </div>
    </section>
  );
}
