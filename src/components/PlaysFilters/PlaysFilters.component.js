import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className=" px-1 py-[6px] flex items-center rounded-md w-fit h-fit font-bold bg-gray-200 active:shadow-inner shadow-lg">
            {open ? <BiChevronUp /> : <BiChevronDown />}

            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 w-fit h-fit bg-white rounded-md p-1 flex flex-wrap gap-1 shadow-inner">
            {props.tags.map((tag) => (
              <button className="border-2 border-gray-200 bg-gray-100 hover:bg-gray-50 rounded-md px-2 text-center text-black">{tag}
              </button>
            ))
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;