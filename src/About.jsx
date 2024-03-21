import story from "./assets/story.jpg";
export default function About() {
  return (
    <div>
      <div className="About relative">
        <div className="About-img absolute inset-0">
          <div className="bg-[#112848] opacity-60 absolute inset-0"></div>
        </div>
        <div className="flex flex-col justify-center py-16 text-center md:text-left md:px-24 md:py-24 relative z-10">
          <p className="text-white">About us</p>
          <h1 className="font-semibold text-white text-2xl md:text-5xl">
            About Us - Who We Are?
          </h1>
        </div>
      </div>
      <div className="About-Description flex text-start p-4 flex-col items-center justify-between md:flex-col lg:flex-row md:px-24 mt-10">
        <div className="story md:max-w-lg ">
          <h1 className="text-[#112537] font-bold text-4xl">
            Our Agency Story
          </h1>
          <h4 className="text-[#295a84] font-medium mt-3">
            Check out our company story and work process
          </h4>
          <p className="mt-5 font-sans text-black font-normal md:text-md">
            At XYZ Real Estate, we are passionate about helping you find your
            dream home. With years of experience in the real estate industry,
            our dedicated team is committed to providing exceptional service and
            guidance throughout your home-buying journey. We understand that
            buying a home is one of the most significant decisions you'll make,
            and we're here to make the process smooth and stress-free. Whether
            you're a first-time buyer, looking to upgrade, or searching for the
            perfect investment property, we have the expertise to meet your
            needs. Our extensive knowledge of the local market enables us to
            offer valuable insights into neighborhoods, property values, and
            market trends. We believe in building lasting relationships with our
            clients based on trust, integrity, and professionalism.
          </p>
        </div>
        <div className="story-img  p-4 ">
          <img src={story} alt="" className="md:h-96 " />
        </div>
      </div>
    </div>
  );
}
