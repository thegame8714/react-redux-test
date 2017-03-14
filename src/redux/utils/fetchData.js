import moment from 'moment'
import axios from 'axios'

export function fetchMonthlyData(monthDateRange) {
    let startDate =  monthDateRange.start
    let endDate  = monthDateRange.end
    return axios({
        url: "http://rf.pipend.com/apis/branches/prKNvF7/execute?from="+startDate+"T00:00:00Z&to="+endDate+"T00:00:00Z&channels=",
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    }).then((response) => {
        return response.data
    }).catch((error) => {
        return error.data
    })
}

export function getMonthDateRange(year, month) {
    let startDate 
    if (month === '12') {
        month = '11'
        startDate = moment([year, month]).format('YYYY-MM-DD')
    } else {
        startDate = moment([year, month]).add(-1,'month').format('YYYY-MM-DD')
    }
    
    let endDate = moment(startDate).endOf('month').format('YYYY-MM-DD')

    return { start: startDate, end: endDate };
}

export function retrieveMonthlyHoF() {

    let contributorsList = []

    let currentYear = moment().format('YYYY')
    let currentMonth = moment().format('MM')
    
    let contributors = {} 

    for(let i=0; i<5; i++) {
        if(currentMonth === '01') {
            currentMonth = '12'
            currentYear = currentYear - 1
            contributors[currentMonth] = fetchMonthlyData(getMonthDateRange(currentYear, currentMonth))
        } else {
            contributors[currentMonth - i] = fetchMonthlyData(getMonthDateRange(currentYear, currentMonth - i))
        }
        contributorsList.push(contributors)
    }
    return contributors
}
