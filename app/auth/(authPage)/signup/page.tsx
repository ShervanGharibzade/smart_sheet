"use client";

import Button from "@/src/components/base/button";
import Input from "@/src/components/base/input";
import AuthLayout from "@/src/layouts/authLayout";
import { pageRoutes } from "@/src/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface IDefaultValueForm {
  username: string;
  email: string;
  password: string;
}

const defaultValues: IDefaultValueForm = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDefaultValueForm>({
    defaultValues,
  });

  const onSubmit = (data: IDefaultValueForm) => {
    console.log("Form data:", data);
  };

  return (
    <AuthLayout>
      <div className="max-w-[500px] m-auto w-full">
        <h2 className="text-4xl font-bold text-center my-6">
          <span className="text-blue-400">Smart/</span>Sheet
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            type="text"
            placeholder="Enter username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Link href={pageRoutes.login}>
            <div className="flex flex-col w-fit group gap-0.5 my-3">
              <h2 className="text-gray-300">Login</h2>
              <div className="w-0 group-hover:w-full transition-all duration-300 h-[2px] bg-blue-500 inline-block"></div>
            </div>
          </Link>
          <Button variant="primary" type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
