// import axios from "axios";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import axios from "../../helpers/axiosInitializer";
import { types } from "../../types/types";
import Swal from "sweetalert2";
export const startLogin = (email, password) => {
    return async (dispatch) => {
        const response = await fetchWithoutToken(
            "auth",
            { email, password },
            "POST"
        );
        const body = await response.json();

        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            // axios.defaults.headers.common["Authorization"] =
            //     "Bearer " + body.token;

            dispatch({
                type: types.LOGIN_START,
                payload: { uid: body.uid, name: body.name },
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }

        //AXIOS TODO configure token in axios
        // try {
        //     const response = await axios.post("/auth", { email, password });
        //     console.log(response);
        // } catch (error) {
        //     console.log(error);
        // }
    };
};

export const startLogoutAction = () => {
    return  (dispatch) => {
        localStorage.clear()
        dispatch({type: types.LOGOUT})
    }
}

export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        const response = await fetchWithoutToken(
            "auth/register",
            {
                email,
                password,
                name,
            },
            "POST"
        );
        const body = await response.json();
        console.log(body);
        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch({
                type: types.LOGIN_START,
                payload: { uid: body.user, name: body.name },
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: body.msg,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
};

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken("auth/renew");
        const body = await resp.json();
        console.log(body)
        if (body.ok) {
            localStorage.setItem("token", body.newToken);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch({
                type: types.LOGIN_START,
                payload: { uid: body.uid, name: body.name },
            });
        } else {
          dispatch({type: types.LOGIN_CHECKING_FINISH})
        }
    };
};
