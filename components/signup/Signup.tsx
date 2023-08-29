import { signUpSchema } from "@/schemas/signUpSchema";
import { signUp } from "@/services/apiServices";
import { ISignupForm, IUserCredentials } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ToastOptions, toast } from "react-toastify";
import Toast from "../admin/common/Toast";
import Logo from "../common/Logo";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({
    resolver: yupResolver(signUpSchema),
  });

  const router = useRouter();

  const notify = (text: string, options: ToastOptions) => toast(text, options);

  const signupMutation = useMutation(signUp);

  const onSubmit = async (data: IUserCredentials) => {
    try {
      const response = await signupMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      if (response.token) {
        notify("Successfully signed up!", { type: "success" });
        router.push("/admin");
      }
      if (response.error) {
        notify(response.error, { type: "error" });
      }
    } catch (error: any) {
      const message = error.message || "Something went wrong!";
      notify(message, { type: "error" });
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[500px] mx-auto bg-gray-100 p-6 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 mx-auto">
            <Logo isVertical />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="sample@email.com"
              {...register(`email`)}
            />
            {errors.email && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              required
              {...register(`password`)}
            />
            {errors.password && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Re-enter Your Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              required
              {...register(`confirmPassword`)}
            />
            {errors.confirmPassword && (
              <p className="text-red-700 mt-2 text-sm">
                * {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="text-white bg-primary hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <p className="my-2 text-gray-400">or</p>
            <Link
              href="/login"
              className="hover:underline text-primary font-semibold"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
      <Toast />
    </div>
  );
}
