import { useState } from "react";
import formImg from "../forest__1_by_marc_andre_dfhjmu8-pre.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Main() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "Ukraine",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 charracters or less")
        .required("Name is requiered"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Name is requiered"),
      terms: Yup.array().required("Ters of service must be checked"),
    }),

    onSubmit: (values) => {},
  });

  return (
    <main className="h-screen flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg w-1/2 "
      >
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 ">Let get started</h1>
          <p className="text-lg">jojo is stile alive</p>
          <div className="mt-6">
            <div className="pb-2">
              <label className="block text-sm pb-2" htmlFor="name">
                Name
              </label>

              <input
                className="border-2 border-green-600 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="name"
                placeholder="enter yout name"
                value={formik.values.name}
                onChange={formik.handleChange}
              ></input>
            </div>

            <div className="pb-2">
              <label className="block text-sm pb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-green-600 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              ></input>
            </div>

            <div className="pb-3">
              <label className="block text-sm pb-2" htmlFor="country">
                Country
              </label>
              <select
                value={formik.values.country}
                onChange={formik.handleChange}
                name="cointry"
                className="border-2 border-green-600 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
              >
                <option>Ukraine</option>
                <option>United States</option>
                <option>United Kinhdom</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="pb-2">
              <label className="block text-sm pb-2" htmlFor="terms">
                Terms of srvice
              </label>
              <div className="flex items-center gap-2">
                <input
                  onChange={formik.handleChange}
                  type="checkbox"
                  name="terms"
                  value="checked"
                />
                <p>I totaly agree to the Terms</p>
              </div>
            </div>

            <button
              className="bg-teal-500 text-sm text-white py-3 mt-6 p-20 rounded-lg"
              type="submit"
            >
              Enter
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
