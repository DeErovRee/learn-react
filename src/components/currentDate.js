export function getCurrentDate(separator=':'){

    let newDate = new Date()
    
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minute = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    hours < 10 ? hours = '0' + hours : hours 
    minute < 10 ? minute = '0' + minute : minute 
    seconds < 10 ? seconds = '0' + seconds : seconds

    return `${hours}${separator}${minute}${separator}${seconds}`
}