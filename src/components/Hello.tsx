import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";

export const Hello = () => {
  return (
    <Calendar
      date={new Date()}
      showMonthAndYearPickers={false}
      onChange={() => {
        console.log("hello");
      }}
    />
  );
};
