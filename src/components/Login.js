import React from "react";

function Login() {
  return (
    <div className="relative">
      <div
        className=" flex h-screen w-full flex-col justify-center absolute"
        style={{
          backgroundImage: `url('background.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-[#161819] opacity-[0.65] h-screen ">
        <div className="h-full py-3 flex justify-center items-center ">
          <div className="">
            <img src="logo.svg" />
            <div className="pt-7">
              <input
                type="text"
                placeholder="User name"
                className=" w-[418px] h-[55px] placeholder-white pl-5 text-xs font-medium rounded-lg bg-transparent border border-[#000000] "
              ></input>
              <div className="pt-1">
                <input
                  type="text"
                  placeholder="Password"
                  className=" w-[418px] h-[55px] pl-5 text-xs placeholder-white bg-transparent font-medium rounded-lg border border-[#000000] "
                ></input>
                <div className="flex  justify-center items-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#006ACB] to-[#031EAC] mt-4 text-white rounded-lg w-[252px] h-[55px] font-semibold text-xs text-align-center border-2 border-[#006ACB]"
                  >
                    LOGIN
                  </button>
                </div>
                <div className="flex justify-center items-center text-align-center top-608 left-584 pt-10 text-white">
                  {" "}
                  <h6>
                    {" "}
                    Dont have an account?{" "}
                    <a href="" className="text-[#006ACB]">
                      {" "}
                      Create new{" "}
                    </a>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;