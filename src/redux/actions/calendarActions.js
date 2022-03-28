import Swal from "sweetalert2";
import { prepareEvents } from "../../helpers/date-changer";
import { fetchWithToken } from "../../helpers/fetch";
import { types } from "../../types/types";

export const addNewEventStartAction = (event) => {
    return async (dispatch, getState) => {
        const { uid, name } = getState().auth;
        try {
            const resp = await fetchWithToken("events/new", event, "POST");
            const body = await resp.json();

            if (body.ok) {
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name: name,
                };
                dispatch({ type: types.EVENT_ADD_NEW, payload: event });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const eventLoadAction = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken("events/");
            const body = await resp.json();
            const events = prepareEvents(body.eventos);
            console.log(events);
            dispatch({ type: types.EVENT_LOAD_ALL, payload: events });
        } catch (err) {
            console.log(err);
        }
    };
};

export const eventUpdateAction = (event) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(
                `events/edit/${event.id}`,
                event,
                "PUT"
            );
            const body = await resp.json();
            if (body.ok) {
                dispatch({ type: types.EVENT_UPDATE, payload: event });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: body.msg,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const eventDeleteAction = () => {
    return async (dispatch, getState) => {
        const { id } = getState().calendar.active;
        try {
            const resp = await fetchWithToken(
                `events/delete/${id}`,
                {},
                "DELETE"
            );
            const body = await resp.json();
            if (body.ok) {
                dispatch({ type: types.EVENT_DELETE });
                Swal.fire({
                    icon: "success",
                    title: "Deleted!",
                    text: "Your event has been deleted.",
                    showConfirmButton: false,
                    timer: 1500,
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
        } catch (error) {
            console.log(error);
        }
    };
};

export const eventLogout = () => ({
    type:types.EVENT_LOGOUT
})

export const setActiveAction = (event) => ({
    type: types.EVENT_SET_ACTIVE,
    payload: event,
});

export const clearActiveEventAction = () => ({
    type: types.EVENT_CLEAR_ACTIVE,
});
