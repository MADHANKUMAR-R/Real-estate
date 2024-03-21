/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import valueimg from "./assets/value.png";
import { useState } from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { BsFileBarGraphFill } from "react-icons/bs";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
const faqs = [
  {
    data1: <IoShieldCheckmarkSharp />,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid .",
  },
  {
    data1: <FaCircleXmark />,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    data1: <BsFileBarGraphFill />,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Value() {
  return (
    <div className="flex flex-col flex-wrap space-y-3 items-center text-center p-4 justify-evenly border-b-4 bor pb-10 md:flex-row">
      <div className="value-img">
        <img
          src={valueimg}
          alt=""
          className="h-full w-96 border-8 border-[#1d1207] rounded-t-full"
        />
      </div>
      <div className="accordion flex flex-col justify-center">
        <h2 className="font-semibold text-2xl text-yellow-500">Our Value</h2>
        <h1 className="font-bold text-3xl mt-5">Value We Give to You</h1>
        <div className="text-gray-400 mt-5">
          <p>
            We always ready to help by providijng the best services for you.
          </p>

          <p>We beleive a good blace to live can make your life better</p>
        </div>

        <Accordion data={faqs} />
      </div>
    </div>
  );
}

function Accordion({ data }) {
  const [curopen, setOpen] = useState(null);
  return (
    <div className="Accordion space-y-5 mt-10 ">
      {data.map((el, i) => (
        <AccordionItem
          curopen={curopen}
          onOpen={setOpen}
          title={el.title}
          num={i}
          text={el.text}
          data1={el.data1}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, num, text, curopen, onOpen, data1 }) {
  const isOpen = num === curopen;
  function handleToggle() {
    return onOpen(isOpen ? null : num);
  }
  return (
    <div className="max-w-md  bg-white border p-2" onClick={handleToggle}>
      <div className="flex flex-row gap-3 items-center">
        <div className="box text-[#4066ff]">{data1}</div>
        <p className="title">{title}</p>
        <p className="ml-auto ">
          {isOpen ? (
            <IoMdArrowDropupCircle className="text-[#4066ff]" />
          ) : (
            <IoMdArrowDropdownCircle className="text-[#4066ff]" />
          )}
        </p>
      </div>
      <div
        className={
          isOpen
            ? "max-h-24 transition-all "
            : "open max-h-0 overflow-hidden transition-all"
        }
      >
        <p className="text text-start mt-3 ">{text}</p>
      </div>
    </div>
  );
}
