import axios from "axios";

export const registerUserService = async ({
  username,
  password,
  email,
} = {}) => {
  if (!username || !password || !email)
    throw new Error("All params are required");

  await axios.post(
    `${process.env.REACT_APP_BACKEND}/users`,
    { username, password, email },
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    }
  );
};

export const loginUserService = async ({ username, password, email } = {}) => {
  if (!username || !password || !email)
    throw new Error("All params are required");

  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND}/users`,
    { username, password, email },
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    }
  );
  return response.data;
};
