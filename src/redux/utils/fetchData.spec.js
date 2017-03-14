import {getMonthDateRange, retrieveMonthlyHoF} from './fetchData'

describe('getMonthDateRange', () => {
    it('should return the right start date and end date of a month', () => {
        const startDateEndDate = getMonthDateRange('2016', '01')
        expect(startDateEndDate).toEqual({
            start: "2016-01-01",
            end: '2016-01-31'
        })
    })

    it('should return the right array of object grouped by month', () => {
        const contributorsList = retrieveMonthlyHoF()
        expect(contributorsList).toEqual([
            {

            }
        ])
    })
})