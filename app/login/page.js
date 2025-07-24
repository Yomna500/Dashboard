import LoginForm from "../_components/LoginForm";

function login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col  justify-center mb-10 ">
        <h1 className="text-2xl font-bold pl-5 text-center">Login Form</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default login;
