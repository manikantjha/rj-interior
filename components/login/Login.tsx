import { useAuth } from "@/contexts/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Logo from "../common/Logo";

type LoginForm = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function Login() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const { user, login } = useAuth();

  // const loginMutation = useMutation(login);

  const onSubmit = async (data: LoginForm) => {
    try {
      // loginMutation.mutate({ email: data.email, password: data.password });
      await login(data.email, data.password);
      router.push("/admin/heros");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] m-4">
      <div className="w-full lg:w-[500px] mx-auto bg-gray-100 p-6 rounded">
        <div className="mb-12 mx-auto">
          <Logo isVertical />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="sample@email.com"
              {...register(`email`)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              required
              {...register(`password`)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center !w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
