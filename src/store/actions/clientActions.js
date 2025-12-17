import { axiosInstance } from "../../api/axiosInstance";
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
import { toast } from "react-toastify";

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchRoles = () => (dispatch, getState) => {
  const { client } = getState();

  if (client.roles && client.roles.length > 0) {
    console.log("Roller zaten yüklü, API isteği atılmadı.");
    return;
  }

  axiosInstance
    .get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => {
      console.error("Roller yüklenirken hata oluştu:", err);
    });
};

// login
export const loginUser = (formData, history) => (dispatch) => {
  axiosInstance
    .post("/login", formData)
    .then((res) => {
      dispatch(setUser(res.data));

      if (formData.rememberMe) {
        localStorage.setItem("token", res.data.token);
      }

      toast.success("Giriş Başarılı, Yönlendiriliyorsunuz...");

      history.push("/");
    })
    .catch((err) => {
      console.error("Login Hatası:", err);
      toast.error(err.response?.data?.message || "Giriş başarısız.");
    });
};
