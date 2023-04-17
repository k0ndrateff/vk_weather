enum months {
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
}
enum week {
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
}


/**
 * Преобразует таймстамп в строку вида "день месяца"
 * @param dt таймстамп в UNIX-формате
 */
export const toNormalDate = (dt: number) => {
    let date = new Date(dt * 1000);
    let day = date.getDate();
    let month = date.getMonth();
    return day + ' ' + months[month];
}


/**
 * Преобразует таймстамп в объект с разными параметрами времени
 * @param dt таймстамп в UNIX-формате
 */
export const getTime = (dt: number) => {
    let date = new Date(dt * 1000);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let time = 'утром';
    let dayOfWeek = week[date.getDay()];
    let stringHour = hour.toString();
    let stringMinute = minute.toString();

    if (hour < 5 || hour > 22) { time = 'ночью' }
    else if (hour > 18) { time = 'вечером' }
    else if (hour > 10) { time = 'днём' }

    if (hour < 10) { stringHour = '0' + hour; }
    if (minute < 10) { stringMinute = '0' + minute; }

    return {
        hour: stringHour,
        minute: stringMinute,
        time: hour + ':' + minute,
        string: time,
        day: dayOfWeek
    };
}

/**
 * Преобразует таймстамп в строку с названием сезона
 * @param dt таймстамп в UNIX-формате
 */
export const getSeason = (dt: number) => {
    let date = new Date(dt * 1000);
    let month = date.getMonth();
    if (month === 12 || month <= 1) {
        return 'winter';
    }
    else if (month <= 4) {
        return 'spring';
    }
    else if (month <= 7) {
        return 'summer';
    }
    else { return 'autumn'; }
}

