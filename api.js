import axios from 'axios';
const useAxiosWithAuth = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  const authRoutes = ["/login", "/sign-up"]; // Routes that don't require authentication
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      const currentRoute = window.location.pathname;
      if (token || authRoutes.includes(currentRoute)) {
        // If there is a token or if the current route is one of the authRoutes, add the token to the request headers
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      } else {
        // If there is no token and the current route is not one of the authRoutes, redirect the user to the login page
        window.location.href = "/login";
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const POST = async (url, postData) => {
    return await api.post(`${url}`, postData)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };

  const GET = async (url) => {
    return await api.get(`${url}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };

  const PUT = async (url, putData) => {
    return await api.put(`${url}`, putData)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };

  const DELETE = async (url) => {
    return await api.delete(`${url}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };

  return { POST, GET, DELETE, PUT };
};

export default useAxiosWithAuth;