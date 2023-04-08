const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)

copied = {...holidays[christmas]}
copied.name = 'X-mas Day'
correctDate = new Date(copied.date)
correctDate.setHours(0)
correctDate.setMinutes(0)
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id !== copied.id || copied.id)
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name)
console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime() || copied.date)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstHolidayDate = new Date(firstHolidayTimestamp)
const lastHolidayDate = new Date(lastHolidayTimestamp)

const firstDay = String(firstHolidayDate.getDate()).padStart(2, '0')
const firstMonth = String(firstHolidayDate.getMonth() + 1).padStart(2, '0')
const lastDay = String(lastHolidayDate.getDate()).padStart(2, '0')
const lastMonth = String(lastHolidayDate.getMonth() +1).padStart(2, '0')

console.log(`First holiday: ${firstHolidayDate.getFullYear()}-${firstMonth}-${firstDay}`)
console.log(`Last holiday: ${lastHolidayDate.getFullYear()}-${lastMonth}-${lastDay}`)

// Get the number of days between the first and last holiday
const daysBetweenHolidays = Math.ceil((lastHolidayDate.getTime() - firstHolidayDate.getTime()) / (1000 * 60 * 60 * 24))

console.log(`Days between first and last holiday: ${daysBetweenHolidays}`)

// Get the average number of days between holidays
const avgDaysBetweenHolidays = Math.ceil(daysBetweenHolidays / Object.keys(holidays).length)

console.log(`Average days between holidays: ${avgDaysBetweenHolidays}`)

// Create a new holiday that falls in between the first and last holiday
const newHolidayDate = new Date(firstHolidayDate.getTime() + (avgDaysBetweenHolidays * 24 * 60 * 60 * 1000))

const newHoliday = {
id: futureId,
name: 'New Holiday',
date: newHolidayDate,
}

holidays[futureId] = newHoliday

console.log(`Created new holiday: ${newHoliday.name} on ${newHolidayDate.getFullYear()}-${newHolidayDate.getMonth() + 1}-${newHolidayDate.getDate()}`)

console.log(holidays)