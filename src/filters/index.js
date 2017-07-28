function addZero(number) {
    return number < 10 ? ('0' + number) : number
}

export default {
    dateFormat(dateline, formatter) {
        if (!dateline) {
            return ''
        }
        formatter = formatter || 'YYYY-MM-DD'
        let date = new Date(dateline)
        console.log([
            dateline,
            date.getFullYear(),
            (addZero(date.getMonth() + 1)),
            addZero(date.getDate()),
            addZero(date.getHours()),
            addZero(date.getMinutes()),
            addZero(date.getSeconds())
        ])
        return formatter.replace(/YYYY/g, date.getFullYear())
            .replace(/MM/g, addZero(date.getMonth() + 1))
            .replace(/DD/g, addZero(date.getDate()))
            .replace(/HH/g, addZero(date.getHours()))
            .replace(/mm/g, addZero(date.getMinutes()))
            .replace(/ss/g, addZero(date.getSeconds()))
    }
}
