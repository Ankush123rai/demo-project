import { MdOutlineDomain } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { RiFridgeFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";

interface OfferItem {
  id: number;
  title: string;
  icon: JSX.Element;
  more: JSX.Element;
}

interface OfferSectionItem extends OfferItem {
  items: OfferItem[];
}

const offers_array: OfferSectionItem[] = [
  {
    id: 1,
    title: "Properties",
    icon: <MdOutlineDomain />,
    items: [
      {
        id: 1,
        title: "Houses & Apartments",
        icon: <MdOutlineDomain />,
      },
      {
        id: 2,
        title: "Houses & Apartments",
        icon: <MdOutlineDomain />,
      },
      {
        id: 3,
        title: "Lands & Plots",
        icon: <MdOutlineDomain />,
      },
    ],
  },
  {
    id: 2,
    title: "Electronics & Appliances",
    icon: <RiFridgeFill />,

    items: [
      {
        id: 1,
        title: "TVs, Video - Audio",
        icon: <RiFridgeFill />,
      },
      {
        id: 2,
        title: "Kitchen & Other Appliances",
        icon: <RiFridgeFill />,
      },
      {
        id: 3,
        title: "Computers & Laptops",
        icon: <RiFridgeFill />,
      },
    ],
  },
  {
    id: 3,
    title: "Others",
    icon: <TbGridDots />,

    items: [
      {
        id: 1,
        title: "Furniture",
        icon: <TbGridDots />,
      },
      {
        id: 2,
        title: "Jobs",
        icon: <TbGridDots />,
      },
      {
        id: 3,
        title: "Mobiles",
        icon: <TbGridDots />,
      },
    ],
  },
];

const OfferSection = () => {
  const [selected, setSelected] = useState<OfferItem | null>(null);
  const [toggleArrow, setToggleArrow] = useState(false);

  const handleItemClick = (item: OfferItem) => {
    setSelected(selected === item ? null : item);
    setToggleArrow(true);
  };

  return (
    <div className="w-full h-screen flex justify-center py-16">
      <div className="">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-violet-700 text-[28px] font-bold">
            what are you offering
          </h2>
          <p className="text-black text-opacity-80 text-lg font-bold">
            Choose a Category
          </p>
        </div>
        <div className=" mt-3">
          <div className="border border-1">
            {offers_array.map((item) => (
              <div
                className="flex border-b flex-col border-1"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="flex py-4 px-6 gap-[120px] justify-between items-center ">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-gray-500">{item.icon}</span>
                    <p className="text-gray-500">{item.title}</p>
                  </div>

                  <IoIosArrowDown className="text-gray-500" />
                </div>

                <div>
                  {selected?.id === item.id && (
                    <div className="fex justify-between items-center border-t-2">
                      {item.items.map((subItem) => (
                        <div
                          className="flex border-b flex-col border-1 0p-2"
                          key={subItem.id}
                        >
                          <div className=" flex justify-start p-2 items-center gap-2">
                            <span className="text-1xl text-gray-500">
                              {subItem.icon}
                            </span>
                            <p className="text-gray-500 text-sm">
                              {subItem.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
