import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";
import StepCounter from "./StepCounter";
import Accordian from "./Accordian/Accordian";
import BillCalc from "./Billcalc/BillCalc";

export default function App() {
  return (
    <>
      <BillCalc />
      <Accordian />
      <FlashCard />
      <StepCounter />
      <DateCounter />
    </>
  );
}
