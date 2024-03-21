import img1 from "./assets/estate1.png";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col mb-4 items-center text-center justify-around md:p-12 md:flex-row">
        <div className="">
          <img src={img1} alt="" className="ml-9" />
          <p>Our vision is to make all people</p>
          <p>the best place to live for them.</p>
        </div>
        <div>
          <h1 className="font-bold text-3xl mt-5 text-[#2d3e59]">
            Information
          </h1>
          <p className="text-gray-400">145 New York, FL 5467, USA</p>
          <ul className="flex gap-3 mt-5 items-center font-semibold">
            <li>
              <p>Property</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>Product</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
