import {types} from '../../types/types'

export const addNewEventAction = (event) =>({
    type: types.EVENT_ADD_NEW,
    payload:event
})

export const setActiveAction = (event) => ({
    type: types.EVENT_SET_ACTIVE,
    payload: event
})