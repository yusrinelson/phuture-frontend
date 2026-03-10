import apiClient from "../../../services/apiClient";

const authService = {
  async login({ email, password }) {
    const res = await apiClient.post(
      "/auth/login",
      { email, password },
      { withCredentials: true }, // backend sets refresh token cookie
    );

    return {
      user: {
        id: res.data._id,
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
      },
      token: res.data.token,
    };
  },

  async signup({ name, surname, email, password }) {
    const res = await apiClient.post(
      "/auth/signup",
      { name, surname, email, password },
      { withCredentials: true },
    );

    return {
      user: {
        id: res.data._id,
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
      },
      token: res.data.token,
    };
  },

  async refresh() {
    const res = await apiClient.post(
      "/auth/refresh",
      {},
      { withCredentials: true },
    );

    return {
      user: {
        id: res.data._id,
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
      },
      token: res.data.token,
    };
  },

  async logout(accessToken) {
    await apiClient.post(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      },
    );
  },
};

export default authService;
