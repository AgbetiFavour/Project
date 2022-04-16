import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range";
import { Calendar } from "react-date-range";
import { Box, Flex } from '@chakra-ui/react';

export default function CustomCalendar({
  customRender = null,
  dayHeight = "auto",
  dayBorder = "none",
  textAlign = "center",
  monthPadding = null,
  fontWeight = "500",
  todayStyles = null,
  handleChange,
  ...props
}) {
  const [date, setDate] = useState(null);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <Flex
      sx={{
        "&": {
          justifyContent: "center",
          " p": {
            lineHeight: "initial",
          },
          ".rdrWeekDay": {
            textAlign: textAlign,
          },
          ".rdrCalendarWrapper": {
            flexGrow: 1,
            borderRadius: "1rem",
          },
          ".rdrMonthAndYearWrapper": {
            justifyContent: "flex-end",
            padding: "0 1rem",
            margin: "1rem 0",
          },
          ".rdrMonthAndYearPickers": {
            justifyContent: "flex-start",
            order: -1,
            color: "primary",
            fontSize: "1.5rem",
          },
          ".rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after, .rdrDayStartPreview.rdrDayEndPreview":
            {
              border: "none",
            },
          ".rdrMonth": {
            width: "100%",
            padding: monthPadding,
          },
          "button.rdrDay": {
            height: dayHeight,
            border: dayBorder,
            position: "relative",
          },
          ".rdrNextPrevButton": {
            margin: "0 0.2rem",
            background: "transparent",
            border: "1px solid rgba(243 243 243/ 1)",
          },
          ".rdrDayNumber": {
            alignItems: "flex-start",
            justifyContent: "center",
            fontWeight: fontWeight,
            position: "static",
            height: "inherit",
            "&.past": {
              cursor: "initial !important",
              pointerEvents: "none",
            },
          },
          ".rdrDayToday .rdrDayNumber": {
            "& span": {
              zIndex: 1,
              color: "primary",
              "&::after": todayStyles,
            },
          },
        },
      }}
      {...props}
    >
      <Calendar
        dragSelectionEnabled={false}
        showMonthAndYearPickers={false}
        dayContentRenderer={customRender}
        showPreview={false}
        date={date}
        onChange={(item) => setDate(item)}
        color="teal"
        // onChange={handleChange}
        // date={new Date() > Date.now()}
        // disabledDates={disabled}
      />
    </Flex>
  );
}
