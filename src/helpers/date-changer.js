/**
 * converts a string to a date
 */

import moment from "moment"



export const prepareEvents =(events) => {
    return events.map((e) => ({
        ...e,
        start: moment(e.start).toDate(),
        end: moment(e.end).toDate(),
    }))

}



export const converStringToDate = (stringDate) => {
    return moment(stringDate).toDate()
}