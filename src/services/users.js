import axios from "axios";

export const getUser = async ({ idUser }) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/users/profile/${idUser}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
