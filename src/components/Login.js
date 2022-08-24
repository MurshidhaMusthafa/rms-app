import React, { useState } from "react";
import { useEffect } from "react";

function Login() {
  const defaultEntity = {
    userName: "",
    passWord: "",
  };

  const [login, setLogin] = useState(defaultEntity);

  // const [item, setItem] = useState(defaultEntity);
  const onValueChange = (e) => {
    console.log(e);
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log(login);
  };

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
                name="userName"
                value={login.userName}
                onChange={onValueChange}
                placeholder="User name"
                className=" w-[418px] h-[55px] placeholder-white pl-5 text-xs font-medium rounded-lg bg-transparent border text-white border-[#000000] "
              ></input>
              <div className="pt-1">
                <input
                  type="text"
                  name="passWord"
                  value={login.passWord}
                  onChange={onValueChange}
                  placeholder="Password"
                  className=" w-[418px] h-[55px] pl-5 text-xs text-white placeholder-white bg-transparent font-medium rounded-lg border border-[#000000] "
                ></input>
                <div className="flex  justify-center items-center">
                  <button
                    type="button"
                    onClick={onSubmit}
                    to="/src/components/Login.js"
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
