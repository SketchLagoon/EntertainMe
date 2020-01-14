import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users', { email, password });
    },

    getMe: function () {
      return axios.get('/api/users/me', {});
    }
  },

//   Movies: {
//       getMy: (userId) => {
//           return axios.get('api/movies/:user',{userId})
//       }
//   }
}