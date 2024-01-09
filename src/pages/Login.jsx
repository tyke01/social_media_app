//

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#f0f2f5] flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-5xl font-bold text-[#1775ee] mb-2">
            Sybo_social
          </h3>
          <p className="text-2xl">
            Connect with Syb0rgs, humans and other hackers on Sybo_social
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className=" h-72 p-5 bg-white rounded-lg flex flex-col justify-between">
            <input
              placeholder="Enter your Email"
              className=" h-12 rounded-lg border-b border-[#1775ee] text-lg pl-5"
            />
            <input
              placeholder="Enter your Password"
              className=" h-12 rounded-lg border-b border-[#1775ee] text-lg pl-5"
            />

            <button className="h-12 rounded-lg bg-[#1775ee] text-white text-xl font-medium">
              Log in
            </button>

            <span className="text-center text-[#1775ee] cursor-pointer">
              Forgot password?
            </span>
            <button className="h-12 rounded-lg bg-[#42b72a] text-white text-xl font-medium">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
