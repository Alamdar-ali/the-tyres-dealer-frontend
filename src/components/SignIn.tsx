import React from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

// import tyre from "../../public/tyre.jpg";
const SignIn = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex flex-wrap px-6 bg-black h-[83vh] ">
      <div className="flex-[1_1_70%]">
        <img
          className="bg-black p-4 w-full"
          src={process.env.PUBLIC_URL + "/tyre-black.png"}
        />
      </div>
      <div className="flex-[1_1_30%] ">
        <div className=" my-4 border-solid border-1 mr-8 p-4 border-opacity-50 border-[#6682b0] ">
          <div className="flex flex-col ">
            <h1 className="text-white text-center font-primary-font text-3xl mb-4">
              Sign in
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="my-2">
                <CustomInput
                  type="text"
                  label="Email"
                  id="email"
                  name="email"
                  error={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                  helperText={formik.errors.email}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="my-2">
                <CustomInput
                  type="password"
                  label="Password"
                  id="password"
                  name="password"
                  error={
                    formik.touched.password && formik.errors.password
                      ? true
                      : false
                  }
                  helperText={formik.errors.password}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                ></CustomInput>
              </div>
              <div className="my-4">
                <CustomButton
                  type="submit"
                  name="Sign in"
                  onClick={() => {}}
                ></CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
