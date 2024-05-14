import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="dark:bg-neutral-200 dark:text-black flex h-screen items-center justify-center">
        <div>
          <div className="modal-box dark:bg-neutral-200 dark:text-black">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
            <h3 className="text-xl text-yellow-500 dark:text-yellow-600">
              Signup
            </h3>

            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                className="w-full px-3 py-1 mb-4 rounded-md dark:bg-neutral-200 dark:text-black dark:bg-slate-300"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500">This field is required</p>
              )}
              <br />
              <label htmlFor="createemail">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                id="createemail"
                className="w-full px-3 py-1 mb-4 rounded-md dark:bg-neutral-200 dark:text-black dark:bg-slate-300"
                {...register("createemail", { required: true })}
              />
              {errors.createemail && (
                <p className="text-red-500">This field is required</p>
              )}
              <br />
              <label htmlFor="createpassword">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                id="createpassword"
                className="w-full px-3 py-1 rounded-md mb-4 dark:bg-neutral-200 dark:text-black dark:bg-slate-300"
                {...register("createpassword", { required: true })}
              />
              {errors.createpassword && (
                <p className="text-red-500">This field is required</p>
              )}
              <br />
              <label htmlFor="confirmpassword">Confirm Password</label>
              <br />
              <input
                type="text"
                placeholder="Confirm your password"
                id="confirmpassword"
                className="w-full px-3 py-1 rounded-md mb-4 dark:bg-neutral-200 dark:text-black dark:bg-slate-300"
                {...register("confirmpassword", { required: true })}
              />
              {errors.confirmpassword && (
                <p className="text-red-500">This field is required</p>
              )}
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
                <button
                  className="text-blue-600 underline"
                  onClick={() =>
                    document.getElementById("loginModal").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
