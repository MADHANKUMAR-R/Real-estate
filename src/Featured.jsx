const featured = [
  {
    cover: "./h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "./h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "./h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "./h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "./h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
];

export default function Feature() {
  return (
    <section className="bg-[#f7f9fc] mb-8 pb-16 shadow-md">
      <div className="Featured ">
        <div className="text-center p-2  space-y-3 md:py-7 md:p-0">
          <h1 className="font-bold text-4xl  text-[#2d3e59] ">
            Featured Property Types
          </h1>
          <p className="font-normal text-[#2d3e59]">
            Find All Type of Property.
          </p>
        </div>
        <div className="FeaturedCard mt-10 flex justify-center ">
          <div className="flex gap-14 flex-wrap justify-center items-center">
            {featured.map((items, index) => (
              <div className="box shadow shadow-lg w-60 h-40  " key={index}>
                <img src={items.cover} alt="" className="w-14 h-14 m-auto" />
                <h4 className="text-black font-semibold mt-4 text-center">
                  {items.name}
                </h4>
                <p className="text-center">{items.total}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
