import React from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

// import tyre from "../../public/tyre.jpg";
const SignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    phone: Yup.number().required("Phone no is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userName: "",
      password: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex flex-wrap px-6 bg-black  ">
      <div className="flex-[1_1_70%]">
        <img
          className="bg-black p-4 w-full"
          src={process.env.PUBLIC_URL + "/tyre-black.png"}
        />
        <h1 className="mt-4 w-1/2 text-center text-white font-bold font-primary-font text-2xl">
          Get the best tyres from the tyre dealers by creating your account
        </h1>
      </div>
      <div className="flex-[1_1_30%] ">
        <div className=" my-4 border-solid border-1 mr-8 p-4 border-opacity-50 border-[#6682b0] ">
          <div className="flex flex-col ">
            <h1 className="text-white text-center font-primary-font text-3xl mb-4">
              Sign Up
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="my-2">
                <CustomInput
                  type="text"
                  label="Name"
                  id="name"
                  name="name"
                  error={
                    formik.touched.name && formik.errors.name ? true : false
                  }
                  helperText={formik.errors.name}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>

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
                  type="text"
                  label="User name"
                  id="userName"
                  name="userName"
                  error={
                    formik.touched.userName && formik.errors.userName
                      ? true
                      : false
                  }
                  helperText={formik.errors.userName}
                  value={formik.values.userName}
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
              <div>
                <CustomInput
                  type="number"
                  label="Phone no"
                  id="phone"
                  name="phone"
                  error={
                    formik.touched.phone && formik.errors.phone ? true : false
                  }
                  helperText={formik.errors.phone}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                ></CustomInput>
              </div>
              <div className="my-4">
                <CustomButton
                  type="submit"
                  name="Sign up"
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

export default SignUp;
