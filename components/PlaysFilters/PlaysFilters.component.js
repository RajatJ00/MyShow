import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
        <div className=' w-fit h-fit rounded-md mobile:py-1'>
          <Disclosure.Button className="bg-white p-1 flex items-center rounded-md w-fit h-fit font-bold hover:shadow-lg">
            {open ? <BiChevronUp /> : <BiChevronDown />}

            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 bg-white w-fit h-fit rounded-md p-1 my-1 shadow-xl">
            <div className="flex gap-3 flex-wrap lg:flex lg:flex-row">
              {props.tags.map((tag) => (
                <>
                  <button className="border-2 border-gray-200 hover:bg-gray-200 rounded-md w-fit h-fit px-2 text-center text-black">{tag}
                  </button>
                </>
              ))
              }
            </div>
          </Disclosure.Panel>
        </div>
          
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;