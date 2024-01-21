import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";
import StepCounter from "./StepCounter";
import Accordian from "./Accordian/Accordian";
import BillCalc from "./Billcalc/BillCalc";
import TextExpander from "./TextExpander/TextExpander";

export default function App() {
  return (
    <>
      <TextExpander />
      <BillCalc />
      <Accordian />
      <FlashCard />
      <StepCounter />
      <DateCounter />
    </>
  );
}
