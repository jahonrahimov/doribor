"use client";
import { FC, Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

type DropdownProps = {
  title: string;
  options: { label: string; href: string }[];
};

const Dropdown: FC<DropdownProps> = (props) => {
  const { title, options } = props;

  return (
    <Menu as="div" className="relative inline-block text-left z-[50]">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center">
              <div className="text-[15px] font-semibold">Туманни танланг</div>
              <div
                className={`w-[16px] h-[16px] ${
                  open ? "rotate-180" : ""
                } bg-[url('/icon_down.svg')] bg-no-repeat ml-[4px]`}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-4 w-[240px] origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((item, i) => (
                <div key={i}>
                  <Menu.Item>
                    {({ active }) => (
                      <div className="hover:bg-white w-full text-[14px] px-[14.5px] group flex text-sm rounded-lg h-[40px] items-center cursor-pointer">
                        <div className="bg-[url('/icon_exit.svg')] bg-no-repeat flex-shrink-0 mr-[8px] w-[20px] h-[20px]" />
                        {item.label}
                      </div>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
