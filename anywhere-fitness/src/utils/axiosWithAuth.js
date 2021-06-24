import axios from "axios";

export const instructorAxiosAuth= () =>{
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://team-anywhere-fitness.herokuapp.com/",
  });
}

export const clientAxiosAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://team-anywhere-fitness.herokuapp.com/",
  });
};

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
     baseURL: "https://fitnessapplambda5.herokuapp.com",
  });
};

// export default clientAxiosAuth;
