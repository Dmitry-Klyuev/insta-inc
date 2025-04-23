import { format, isSameDay } from 'date-fns';
import { type DateRange } from 'react-day-picker';

export const getDisplayDate = (date?: DateRange) => {
  if (!date || !date.from) {
    return 'Select Date';
  }

  const formattedDateFrom = format(date.from, 'dd/MM/yyyy');

  if (!date.to || isSameDay(date.from, date.to)) {
    return formattedDateFrom;
  }

  const formattedDateTo = format(date.to, 'dd/MM/yyyy');

  return `${formattedDateFrom} - ${formattedDateTo}`;
};
