import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calender.css'

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const suffix = getDaySuffix(day);
    const formattedDate = `${month} ${day}${suffix}, ${year}`;
    return formattedDate;
  };

  const getDaySuffix = (day) => {
    if (!day) return '';
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return (
    <div>
      <DatePicker
        className='calender-container'
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MMM d, yyyy"
        placeholderText="Select a date"
        renderCustomHeader={({ date }) => (
          <div>
            <span>{formatDate(date)}</span>
          </div>
        )}
      />
    </div>
  );
};

export default DatePickerComponent;
