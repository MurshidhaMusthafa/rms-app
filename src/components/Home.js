import React from "react";

function Home() {
  return (
    <div className="flex bg-black h-full">
      <div className="flex-col w-1/4 py-4 px-4 ">
        <div className="flex justify-between items-center mb-5 ">
          <label className="text-[#C0C0C0] font-semibold text-sm">
            {" "}
            Vehicles
          </label>
          <form>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-[#404040]"
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
        </div>
        <div className="flex-col border-2 bg-[#181921] h-36 rounded-lg border-[#22252F] mb-2  ">
          <div className="flex justify-between px-6 py-5">
            <label className=" font-semibold text-base text-white ">
              Truck 1
            </label>
            <div className="flex gap-[11px] items-center">
              <label className="font-semibold text-xs text-[#555555]">
                Sensor Status
              </label>
              <label className="border text-[#38CE03] border-[#38CE03] rounded-[32px] w-16 font-medium text-[10px] flex justify-center items-center">
                Active
              </label>
            </div>
          </div>
          <div className=" flex px-6 ">
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  170.C
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Temperature
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">57%</div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Humidity
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  37.3948
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Latitude
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F]"></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  -122.1503
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Longitude
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t w-full px-6 mt-3 text-[#303030] font-medium text-xs pt-2 border-[#22252F]">
            {" "}
            <label>No issues Reported</label>
          </div>
        </div>
        <div className="flex-col border-2 bg-[#181921] h-36 rounded-lg border-[#22252F] mb-2">
          <div className="flex justify-between px-6 py-5">
            <label className=" font-semibold text-base text-white ">
              Truck 2
            </label>
            <div className="flex gap-[11px] items-center">
              <label className="font-semibold text-xs text-[#555555]">
                Sensor Status
              </label>
              <label className="border text-[#38CE03] border-[#38CE03] rounded-[32px] w-16 font-medium text-[10px] flex justify-center items-center">
                Active
              </label>
            </div>
          </div>
          <div className=" flex px-5 ">
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  170.C
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Temperature
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  65%
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
          </svg>*/}
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Humidity
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  37.3948
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Latitude
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F]"></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  -122.1503
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Longitude
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t w-full px-6 mt-3 text-[#ffffff] font-medium text-xs pt-2 border-[#22252F]">
            {" "}
            <label>Humidity increased at 5:30pm on 15/08/2022</label>
          </div>
        </div>
        <div className="flex-col border-2 bg-[#181921] h-36 rounded-lg border-[#22252F] mb-2">
          <div className="flex justify-between px-6 py-5">
            <label className=" font-semibold text-base text-white ">
              Truck 3
            </label>
            <div className="flex gap-[11px] items-center">
              <label className="font-semibold text-xs text-[#555555]">
                Sensor Status
              </label>
              <label className="border text-[#38CE03] border-[#38CE03] rounded-[32px] w-16 font-medium text-[10px] flex justify-center items-center">
                Active
              </label>
            </div>
          </div>
          <div className=" flex px-5 ">
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  70.C
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Temperature
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">57%</div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Humidity
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col  ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  60.98
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Latitude
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F]"></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  -122.1503
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Longitude
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t w-full px-6 mt-3 text-[#B1B1B1] font-medium text-xs pt-2 border-[#22252F]">
            {" "}
            <label>Temperature Decreased at 5.30 pm on 15/08/2022</label>
          </div>
        </div>
        <div className="flex-col border-2 bg-[#181921] h-36 rounded-lg border-[#22252F] ">
          <div className="flex justify-between px-6 py-5">
            <label className=" font-semibold text-base text-white ">
              Truck 4
            </label>
            <div className="flex gap-[11px] items-center">
              <label className="font-semibold text-xs text-[#555555]">
                Sensor Status
              </label>
              <label className="border text-[#38CE03] border-[#38CE03] rounded-[32px] w-16 font-medium text-[10px] flex justify-center items-center">
                Active
              </label>
            </div>
          </div>
          <div className=" flex px-5 ">
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  170.C
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Temperature
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">57%</div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Humidity
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F] "></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  37.3948
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Latitude
                </div>
              </div>
              <hr className="w-[40px] rotate-90 border-[#22252F]"></hr>
            </div>
            <div className="flex items-center">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs ">
                  -122.1503
                </div>
                <div className="text-[#737373] font-medium text-[9px]">
                  Longitude
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t w-full px-6 mt-3 text-[#303030] font-medium text-xs pt-2 border-[#22252F]">
            {" "}
            <label>No issues Reported</label>
          </div>
        </div>
      </div>
      <div className="flex-col w-1/2 py-5">
        <div className="flex justify-between">
          <div className="text-[#C0C0C0] font-semibold text-sm flex justify-between mb-7  ">
            Vehicle Location Status
          </div>
          
          <img src="expand.svg" className=" pb-5"></img>
        </div>

        <img className="w-full" src="homemap.svg" alt="expand" />
      </div>
      
      <div className="flex-col w-1/4 bg-[#331F6B] mt-2 ml-2 mr-3 rounded-t-lg">
        <div className="flex px-6 py-5 items-center justify-between">
          <div className="flex  items-center gap-2">
            {" "}
            <label className=" font-semibold text-sm text-[#C0C0C0] ">
              Alarms
            </label>
            <div className="flex bg-[#6949C5] rounded-full h-[31px] w-[31px]  justify-center items-center">
              <div className="bg-[#7b66b9] w-[21px] h-[21px] rounded-full text-[#C0C0C0] font-semibold text-xs text-center pt-1 ">
                10
              </div>
            </div>
          </div>
          <div className="flex items-center relative">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#D9D9D9]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            <hr className=" rotate-90 bg-[#D9D9D9] w-[15px]  absolute left-4 "></hr>
          </div>
        </div>
        <div className="bg-[#181921] flex-col h-full border-[#4F3696] rounded-t-lg">
          <div className=" px-5 py-4 border-b  border-[#292D58] flex-col ">
            {" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="text-white font-semibold text-[15px]">
                {" "}
                Truck 1
              </div>
              <div className="border-[#FA7719] w-[67px] h-5 rounded-[32px] text-black bg-[#FFBD3D] font-medium text-[10px] flex items-center justify-center">
                Minor
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  {" "}
                  Low Humidity
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Type
                </div>
              </div>
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  2022 - 08 - 07 15:37:23
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Created Time
                </div>
              </div>
            </div>
            <br />
            <div className="text-[#787EB6] font-medium text-[9px] flex items-center">
              {" "}
              Status: &nbsp;{" "}
              <label className="text-[#BB2E10] font-semibold text-xs">
                {" "}
                Issue not cleared
              </label>
            </div>
          </div>

          <div className=" px-5 py-4 border-b  border-[#292D58] flex-col ">
            {" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="text-white font-semibold text-[15px]">
                {" "}
                Truck 2
              </div>
              <div className="border-[#7C0303] w-[67px] h-5 rounded-[32px] text-white bg-[#BB2E10] font-medium text-[10px] flex items-center justify-center">
                Major
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  {" "}
                  Low Humidity
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Type
                </div>
              </div>
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  2022 - 08 - 07 15:37:23
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Created Time
                </div>
              </div>
            </div>
            <br />
            <div className="text-[#787EB6] font-medium text-[9px] flex items-center">
              {" "}
              Status: &nbsp;{" "}
              <label className="text-[#BB2E10] font-semibold text-xs">
                {" "}
                Issue not cleared
              </label>
            </div>
          </div>
          <div className=" px-5 py-4 border-b  border-[#292D58] flex-col ">
            {" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="text-white font-semibold text-[15px]">
                {" "}
                Truck 3
              </div>
              <div className="border-[#7C0303] w-[67px] h-5 rounded-[32px] text-white bg-[#BB2E10] font-medium text-[10px] flex items-center justify-center">
                Minor
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  {" "}
                  Low Humidity
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Type
                </div>
              </div>
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  2022 - 08 - 07 15:37:23
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Created Time
                </div>
              </div>
            </div>
            <br />
            <div className="text-[#787EB6] font-medium text-[9px] flex items-center">
              {" "}
              Status: &nbsp;{" "}
              <label className="text-[#32651A] font-semibold text-xs">
                {" "}
                Cleared Unacknowledged
              </label>
            </div>
          </div>
          <div className=" px-5 py-4 border-b  border-[#292D58] flex-col ">
            {" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="text-white font-semibold text-[15px]">
                {" "}
                Truck 4
              </div>
              <div className="border-[#FA7719] w-[67px] h-5 rounded-[32px] text-black bg-[#FFBD3D] font-medium text-[10px] flex items-center justify-center">
                Minor
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex-col">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  {" "}
                  Low Humidity
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Type
                </div>
              </div>
              <div className="flex-col ">
                <div className="text-[#B9B9B9] font-semibold text-xs">
                  2022 - 08 - 07 15:37:23
                </div>
                <div className="text-[#787EB6] font-medium text-[9px]">
                  {" "}
                  Created Time
                </div>
              </div>
            </div>
            <br />
            <div className="text-[#787EB6] font-medium text-[9px] flex items-center">
              {" "}
              Status: &nbsp;{" "}
              <label className="text-[#32651A] font-semibold text-xs">
                {" "}
                Cleared Unacknowledged
              </label>
            </div>
          </div>
          <div className="text-white"></div>
          <div className="text-white"></div>
          <div className="text-white"></div>
          <div className="text-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
