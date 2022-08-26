import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import {faker} from '@faker-js/faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
function TruckDetails() {
    
  return (
    <div className="flex gap-5 h-full">
        <div className="h-[700px] w-[800px] bg-[#121118] rounded-xl">
          <div className="flex px-4 py-5 text-white justify-between">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <label className="text-sm font-semibold">Truck 1</label>
            </div>
            <div className="flex text-[#C0C0C0] text-[10px]">
              <div className="flex items-center gap-3 border-r pr-3">
                <div className="rounded-full h-[10px] w-[10px] bg-gradient-to-r from-[#B0FD33] to-[#38CE03]"></div>
                <label>All Sensors are Active</label>
              </div>
              <div className="flex items-center gap-3 ml-3">
                <img src="notification.svg" className="h-4 w-4" />
                <label>Notifications (8)</label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 ">
            <div className="flex h-14 bg-[#121320] text-left rounded-lg">
              <div className="flex-col pl-5 pr-8 border-r mt-3 mb-3 border-[#2B2D41]">
                <div className="text-xs font-medium text-white">Truck X</div>
                <div className="text-[10px] font-normal text-[#8B8B8B]">
                  Vehicle Model
                </div>
              </div>
              <div className="flex-col pl-5 pr-8 border-r mt-3 mb-3 border-[#2B2D41]">
                <div className="text-xs font-medium text-white">
                  UAE 6756789
                </div>
                <div className="text-[10px] font-normal text-[#8B8B8B]">
                  Plate Number
                </div>
              </div>
              <div className="flex-col pl-5 pr-8 border-r mt-3 mb-3 border-[#2B2D41]">
                <div className="text-xs font-medium text-white">John Walsh</div>
                <div className="text-[10px] font-normal text-[#8B8B8B]">
                  Driver Name
                </div>
              </div>
              <div className="flex-col pl-5 pr-8 mt-3 mb-3 border-[#2B2D41]">
                <div className="text-xs font-medium text-white">
                  +91 12548978523
                </div>
                <div className="text-[10px] font-normal text-[#8B8B8B]">
                  Driver Mobile Number
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-9">
            <div className="relative">
              <img src="truck.svg" alt='truck'/>
              <div className="h-28 w-80 bg-black opacity-50 absolute top-4 left-40"></div>
              <div className="flex justify-center items-center h-8 w-9 bg-black opacity-100 absolute left-[430px] top-5 rounded-sm">
                <img src="rms-logo.svg" className=" h-6 w-6" />
              </div>
              <hr className="absolute border-dashed h-0 w-10 rotate-90 left-[428px] top-2 border-t-2"></hr>
              <hr className="absolute border-dashed h-0 w-40 left-[448px] -top-3 border-t-2"></hr>
              <hr className="absolute border-dashed h-0 w-20 rotate-90 left-[567px] top-7 border-t-2"></hr>
            </div>

            <div className="flex h-20 w-48 bg-white ml-5 rounded-lg">
              <div className="flex-col w-1/2 border-r border-[#C9C9C9] mt-5 mb-5 ml-5">
                <div className=" text-sm font-semibold">170.C</div>
                <div className=" text-[10px] font-medium">Temperature</div>
              </div>
              <div className="flex-col w-1/2 ml-4 mt-5 mb-5">
                <div className="flex text-sm font-semibold items-center">
                  60%
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#FF2929"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" text-[10px] font-medium">Humidity</div>
              </div>
            </div>
          </div>
          <div className="flex-col h-full">
            <div className="w-full flex justify-center">
              <div className="flex justify-between w-3/4 text-[10px] font-semibold text-white">
                <div>Dubai</div>
                <div>Al Ain</div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="bg-[#EEEEEE] h-1 w-3/4 rounded-3xl mt-3">
                <div className="h-1 w-11/12 bg-gradient-to-l from-[#FE6227] to-[#FFC701]"></div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-1">
              <div className="flex justify-between w-3/4 text-[10px] font-semibold text-[#7E7E7E]">
                <div>03-082022 10.00 am</div>
                <div>10-08-2022 10.00 am</div>
              </div>
            </div>
            <div className="flex-col items-end h-2/5 relative">
              <div className="absolute top-0 z-10  bg-gradient-to-t from-transparent to-[#121118] h-[250px] w-full"></div>
              <img
                src="map.svg"
                className="absolute top-5 w-[1400px] h-[250px] border-t-0"
                alt='map'
              />
              <img src="rout.svg" alt='route' className="absolute top-28 left-40" />
              <div className="absolute h-9 w-9 rounded-full bg-gradient-to-r from-[#FFA800] to-[#8A15FF] top-44 left-96 flex justify-center items-center">
                <img src="truck2.svg"  alt='truck'/>
              </div>
              <div className="flex items-start justify-end pr-6 pt-20 absolute top-0 w-full">
                <img src="expand.svg" alt='expand' className=" h-[14px] w-[14px]" />
              </div>
              <div className="flex bg-gradient-to-l from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] w-[360px] rounded-bl-xl fixed bottom-6">
                <div className="flex-col pl-5 pr-8 border-r mt-3 mb-3 border-[#2B2D41]">
                  <div className="text-xs font-semibold text-[#B9B9B9]">
                    37.3948
                  </div>
                  <div className="text-[10px] font-medium text-[#737373]">
                    Latitude
                  </div>
                </div>
                <div className="flex-col pl-5 pr-8 mt-3 mb-3 border-[#2B2D41]">
                  <div className="text-xs font-semibold text-[#B9B9B9]">
                    -122.1503
                  </div>
                  <div className="text-[10px] font-medium text-[#737373]">
                    Longitude
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[700px] w-[810px] flex-col gap-5">
          <div className="h-[49%] bg-[#121118] mb-3 rounded-xl">
            <div className="flex px-4 py-5 text-[#C0C0C0] justify-between">
              <div className="flex gap-3 items-center">
                <label className="text-xs font-medium">Temperature Graph</label>
              </div>
              <div className="flex text-[#C0C0C0] text-[10px]">
                <img src="expand.svg" alt='expand'/>
              </div>
            </div>
            <div className="mt-4 ml-12">
              {/* <img src="graph1.svg" className=" h-[258px]" /> */}
              {/* <Line options={options} data={data} /> */}
            </div>
          </div>
          <div className="h-[49%] bg-[#121118] rounded-xl">
            <div className="flex px-4 py-5 text-[#C0C0C0] justify-between">
              <div className="flex gap-3 items-center">
                <label className="text-xs font-medium">Temperature Graph</label>
              </div>
              <div className="flex text-[#C0C0C0] text-[10px]">
                <img src="expand.svg" alt='expand'/>
              </div>
            </div>
            <div className="mt-4 ml-12">
              <img src="graph2.svg" alt='truckicon' className=" h-[258px]" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default TruckDetails