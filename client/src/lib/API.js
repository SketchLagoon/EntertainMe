import axios from "axios";

export const Users = {
  login: function(email, password) {
    return axios.post("/api/users/login", { email, password });
  },

  create: function(email, password) {
    return axios.post("/api/users", { email, password });
  },

  getMe: function() {
    return axios.get("/api/users/me", {});
  }
};
export const Movies = {
  search: searchQuery => {
    return axios.post("/api/movies/", { searchQuery });
  },
  getMy: userId => {
    return axios.get("api/movies/:user", { userId });
  }
};