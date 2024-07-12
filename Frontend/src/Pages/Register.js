import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import signBG from "../img/SignBG.jpg";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Register() {
  const [values, setValues] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;

    return phoneRegex.test(phoneNumber);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;

    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const validateForm = () => {
    let newErrors = {};

    if (!values.phoneNumber) {
      newErrors.phoneNumber = "وارد کردن شماره موبایل الزامیست!";
    } else if (!isValidPhoneNumber(values.phoneNumber)) {
      newErrors.phoneNumber = "شماره موبایل باید بدون 0 اول باشد!";
    }

    if (!values.email) {
      newErrors.email = "وارد کردن ایمیل الزامیست!";
    } else if (!isValidEmail(values.email)) {
      newErrors.email = "شکل صحیح ایمیل را وارد کنید!";
    }

    if (!values.password) {
      newErrors.password = "وارد کردن رمز عبور الزامیست!";
    } else if (!isValidPassword(values.password)) {
      newErrors.password =
        "رمز عبور باید شامل حروف بزرگ و کوچک و علامت انگلیسی باشد!";
    }
    if (!values.confirmPassword) {
      newErrors.confirmPassword = "تائید کردن رمز الزامیست!";
    } else if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "رمز عبور باید یکسان باشد!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const subForm = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();
    if (isFormValid) {
      window.alert("Form Submitted successfully");
    } else {
      window.alert("Form validation failed!");
    }

    const data = {
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    axios
      .post("https://localhost:7010/api/Account/Register", data)
      .then((res) => {
        alert("User created successfully!");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar></Navbar>

      <section className="mb-12 mt-6 flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-sky-900">صفحه ثبت‌نام</h2>
            <p className="text-xs mt-4 text-sky-900">
              به خانواده کیتاپ‌بیزده بپیوندید.
            </p>

            <form action="#" onSubmit={subForm} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-md outline-none placeholder:text-sm"
                placeholder="شماره موبایل خود را وارد کنید"
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              ></input>
              {errors.phoneNumber && (
                <p className="text-[#f00] text-xs">{errors.phoneNumber}</p>
              )}

              <input
                className="p-2 rounded-md outline-none placeholder:text-sm"
                placeholder="ایمیل خود را وارد کنید"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              ></input>
              {errors.email && (
                <p className="text-[#f00] text-xs">{errors.email}</p>
              )}

              <input
                className="p-2 rounded-md w-full outline-none placeholder:text-sm"
                placeholder="رمز عبور خود را وارد کنید"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              ></input>
              {errors.password && (
                <p className="text-[#f00] text-xs">{errors.password}</p>
              )}

              <input
                className="p-2 rounded-md w-full outline-none placeholder:text-sm"
                placeholder="رمز عبور خود را تائید کنید"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              ></input>
              {errors.confirmPassword && (
                <p className="text-[#f00] text-xs">{errors.confirmPassword}</p>
              )}

              <button className="bg-sky-900 rounded-md text-white py-2 hover:scale-105 duration-300">
                ورود
              </button>
            </form>

            <div className="mt-6 text-center text-gray-400">
              <p className="text-center text-sm">یا</p>
            </div>

            <button className="bg-white border py-2 w-full rounded-md mt-5 flex justify-center items-center flex-row-reverse gap-2 text-sm hover:scale-105 duration-300 text-sky-900">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              ثبت‌نام ازطریق گوگل
            </button>

            <div className="mt-5 border-b border-sky-900 py-4 text-sky-900"></div>

            <div className="mt-3 text-xs flex justify-between gap-1 items-center text-sky-900">
              <p>عضو کیتاپ‌بیزده هستید؟</p>
              <Link
                to={"/account/login"}
                className="py-2 px-5 bg-white border rounded-md hover:scale-105 duration-300"
              >
                ورود
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={signBG}></img>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
