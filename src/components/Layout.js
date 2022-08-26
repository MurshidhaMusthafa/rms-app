import React from "react";
import TruckDetails from "./TruckDetails";

function Layout() {
  return (
    <div className="bg-[#181921] h-full w-screen py-2 px-7">
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 ">
          <img src="rms-logo.svg" alt="LOGO"/>
        </div>
        <div className="w-28 h-[61px] font-bold text-5xl text-white items-center pt-1">
          RMS
        </div>
        <div className="flex-col text-xs font-medium text-[#BDBDBD] w-44">
          <div>Remote Monitoring</div>
          <div>System</div>
        </div>
        <div className="flex justify-between pl-7 text-[#404040] w-full">
          <form>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block h-8 pl-10 w-full text-sm font-normal bg-inherit text-[#404040]"
                placeholder="Search Vehicle..."
                required
              />
            </div>
          </form>
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className=" ml-6">
              <button
                type="button"
                class="inline-flex relative items-center p-3 text-sm font-medium text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="#181921"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="sr-only">Notifications</span>
                <div class="inline-flex absolute -top-[1px] -right-[1px] justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full border-2 border-white dark:border-gray-900">
                  10
                </div>
              </button>
            </div>
            <div className="ml-10">
              <img src="profilepic.svg" alt='propic'className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      <TruckDetails/>
    </div>
  );
}

export default Layout;
