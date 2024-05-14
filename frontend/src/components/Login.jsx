import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // document.getElementById("email").value = "";
    // document.getElementById("password").value = "";
  };

  return (
    <>
      <div className="dark:bg-neutral-200 dark:text-black">
        <dialog id="loginModal" className="modal">
          <div className="modal-box dark:bg-neutral-200 dark:text-black">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="text-xl text-yellow-500 dark:text-yellow-600">
              Login
            </h3>

            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="w-full px-3 py-1 mb-4 rounded-md dark:bg-neutral-200 dark:text-black dark:bg-slate-300"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                className="w-full px-3 py-1 rounded-md mb-4 dark:bg-neutral-200 dark:text-black dark:bg-slate-300"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">This field is required</p>
              )}
              <br />
              <button
                onClick={handleSubmit(onSubmit)}
                className="text-black bg-yellow-500 px-3 py-1 rounded-md hover:bg-yellow-300 hover:text-yellow-800 duration-200"
              >
                Login
              </button>
            </div>
            <span className="text-center">
              <hr style={{ border: "1px solid gray", margin: "10px" }} />
              <h4 className="text-yellow-500">Or</h4>
              <p>
                Don't have an account ?<br />
                <Link to="/signup" className="text-blue-600 underline">
                  Sign up
                </Link>
              </p>
            </span>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
