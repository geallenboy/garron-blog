import { Link, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { menuLinks } from "@/config/public";

export const Header = () => {
  const location = useLocation();

  console.log(location.pathname, 444);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-full flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AI百科
            </span>
          </a>
          <ul className=" ml-12  hidden md:flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            {menuLinks.map((k) => {
              let hoverName =
                "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
              let defName =
                "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
              return (
                <li>
                  <Link to={k.href} className={location.pathname === k.href ? hoverName : defName}>
                    {k.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:flex">
          <button>登陆</button>
        </div>
        <div className="flex md:hidden">
          <button className="mr-2">登陆</button>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              菜单
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {menuLinks.map((k) => {
                    return (
                      <Menu.Item>
                        <Link
                          to={k.href}
                          className={`${
                            location.pathname === k.href
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {k.label}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};
