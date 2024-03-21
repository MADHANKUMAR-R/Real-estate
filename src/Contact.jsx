import contact from "./assets/contact1.jpg";
import { IoIosCall } from "react-icons/io";
export default function Contact() {
  return (
    <div>
      <div className="flex flex-col flex-wrap space-y-3 items-center text-center p-4 justify-evenly md:text-start  md:flex-row">
        <div className="accordion flex flex-col justify-center max-w-md">
          <h2 className="font-semibold text-2xl text-yellow-500">
            Our Contact Us
          </h2>
          <h1 className="font-bold text-3xl mt-5">Easy to contact us</h1>
          <div className="text-gray-400 mt-5">
            <p>
              We always ready to help by providijng the best services for you.
              We beleive a good
            </p>

            <p>blace to live can make your life better</p>
          </div>
          <div className="mt-5 flex gap-7">
            <div className="box1 flex flex-col p-6 max-w-64 border">
              <div className="flex items-center gap-5">
                <div className="bg-[#bac6f6] p-2 rounded-md">
                  <IoIosCall className="text-[#4864dc]" />
                </div>

                <div>
                  <p>Call</p>
                  <p>021 123 145 14</p>
                </div>
              </div>
              <button className="mt-5 text-xl font-medium p-3 rounded-md bg-[#bac6f6] text-[#4864dc]">
                Call Now
              </button>
            </div>
            <div className="box2 flex flex-col p-6 max-w-64 border">
              <div className="flex items-center gap-5">
                <div className="bg-[#bac6f6] p-2 rounded-md">
                  <IoIosCall className="text-[#4864dc]" />
                </div>

                <div>
                  <p>Message</p>
                  <p>021 123 145 14</p>
                </div>
              </div>
              <button className="mt-5 text-xl font-medium p-3 rounded-md bg-[#bac6f6] text-[#4864dc]">
                Message Now
              </button>
            </div>
          </div>
        </div>
        <div className="contact-img">
          <img src={contact} alt="" className="h-96 rounded-t-full w-96" />
        </div>
      </div>
    </div>
  );
}

/* <div>
<div className="Contact relative">
  <div className="Contact-img absolute inset-0">
    <div className="bg-[#112848] opacity-60 absolute inset-0"></div>
  </div>
  <div className="flex flex-col justify-center py-16 text-center md:text-left md:px-24 md:py-24 relative z-10">
    <p className="text-white">Contact Us</p>
    <h1 className="font-semibold text-white text-2xl md:text-5xl">
      Get Helps & Friendly Support
    </h1>
  </div>
</div>
<div className="flex justify-center items-center   ">
  <form
    className="form sm:shadow sm:shadow-md flex flex-col mt-14 p-8 max-w-sm md:max-w-lg lg:max-w-7xl mb-10"
    method="POST"
  >
    <h4 className="text-center md:text-start ">Fillup The Form</h4> <br />
    <div className="flex flex-col gap-y-6 md:gap-10 md:flex-row">
      <input
        type="text"
        placeholder="Name"
        className="md:w-96  h-10 border p-2 placeholder:text-black"
      />
      <input
        type="text"
        placeholder="Email"
        className="md:w-96 h-10  border p-2 placeholder:text-black"
      />
    </div>
    <input
      type="text"
      placeholder="Subject"
      className="mt-6  h-10  border p-2 placeholder:text-black"
    />
    <textarea
      cols="30"
      rows="10"
      className="mt-6 h-32 border p-2 placeholder:text-black"
    ></textarea>
    <button className="mt-6 bg-green-500 py-4 px-4 w-44 rounded-md text-white">
      Submit Request
    </button>
  </form>
</div>
</div> */
