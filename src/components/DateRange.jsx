import moment from 'moment'

function parseDate(date, significance) {
  if (date === null) { return null }
  const d = moment(date)
  switch (significance) {
    case 3: return d.format('MMMM DD, YYYY')
    case 2: return d.format('MMMM YYYY')
    default: return d.format('YYYY')
  }
}

const DateRange = ({ startDate, endDate, significance }) => {
  const _startDate = parseDate(startDate, significance) || 'Ever'
  const _endDate = parseDate(endDate, significance) || 'Today'

  return _startDate === _endDate
    ? `${_startDate}`
    : `${_startDate} - ${_endDate}`
}

export default DateRange
