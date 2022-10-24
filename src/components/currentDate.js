export function getCurrentDate(separator=':'){

    let newDate = new Date()
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minute = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    
    return `${hours}${separator}${minute}${separator}${seconds}`
}