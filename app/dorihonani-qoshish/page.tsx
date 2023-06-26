"use client";
import { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import { useForm, Controller } from "react-hook-form";
import "react-phone-input-2/lib/style.css";

const ConnectionPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  }: {
    control: any;
    register: any;
    handleSubmit: any;
    formState: any;
  } = useForm();

  const list = [
    {
      name: "Makro Farm Test",
      schedule: "9:00-22:00",
      phone: "+998905715200",
      location: "485883",
    },
  ];

  const onSubmit = async (data: any) => {
    const msg = encodeURIComponent(
      "<b>Дорихона номи\n</b>" +
        `${data.name}\n\n` +
        "<b>Манзил\n</b>" +
        `${data.address}\n\n` +
        "<b>Телефон рақам\n</b>" +
        `${data.phone}\n\n` +
        "<b>ИНН\n</b>" +
        `${data.document}\n\n`
    );

    const res = await axios.get("/api/doribor", {
      params: { message: msg },
    });

    if (res.status === 200) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="md:min-h-[calc(100vh-116px)] max-w-[400px] flex flex-col justify-center items-center mx-auto px-2">
      <div className="mb-2 mt-6 text-md md:text-xl uppercase font-semibold">
        Дорихонани қўшиш
      </div>
      {isSuccess ? (
        <div className="text-green-500 font-semibold">Ариза кабул килинди!</div>
      ) : (
        <form
          className="w-full bg-white p-[20px] rounded-xl border border-color-gray mb-14"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Телефон рақами
            </label>
            <Controller
              control={control}
              {...register("phone", { required: true })}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <PhoneInput country={"uz"} value={value} onChange={onChange} />
              )}
            />
            {errors.phone && (
              <span className="text-red-500 text-[12px]">Мажбурий майдон</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ташкилот номи
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-[12px]">Мажбурий майдон</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Манзил
            </label>
            <input
              {...register("address", { required: true })}
              type="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.address && (
              <span className="text-red-500 text-[12px]">Мажбурий майдон</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="document"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              СТИР
            </label>
            <input
              {...register("document", { required: true })}
              type="number"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-[12px]">Мажбурий майдон</span>
            )}
          </div>
          <input
            type="submit"
            value="Юбориш"
            className="text-white cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          />
        </form>
      )}
    </div>
  );
};

export default ConnectionPage;
