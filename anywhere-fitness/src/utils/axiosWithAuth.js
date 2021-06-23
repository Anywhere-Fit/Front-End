import axios from "axios";

export function instructorAxiosAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://team-anywhere-fitness.herokuapp.com/",
  });
}

const clientAxiosAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://team-anywhere-fitness.herokuapp.com/",
  });
};

export default clientAxiosAuth;
