import axios from "axios";

export const signIn = async (email: string) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL!}/auth/login`,
    {
      email: email,
    },
    { withCredentials: true }
  );
  return response.data;
};
