import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 my-36 p-12 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white rounded-sm">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-sm bg-gray-950 bg-opacity-[0.6] border"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-sm bg-gray-950 bg-opacity-[0.6] border"
        />
        <button className="p-2 my-6 bg-red-600 w-full rounded-sm">
          Sign In
        </button>
      </form>
    </div>
  );
};
export default Login;
