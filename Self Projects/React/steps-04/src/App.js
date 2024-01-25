import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";
import StepCounter from "./StepCounter";
import Accordian from "./Accordian/Accordian";
import BillCalc from "./Billcalc/BillCalc";
import TextExpander from "./TextExpander/TextExpander";
import CurrencyCoverter from "./CurrencyCoverter/CurrencyCoverter";

export default function App() {
  return (
    <>
      <CurrencyCoverter />
      <TextExpander />
      <BillCalc />
      <Accordian />
      <FlashCard />
      <StepCounter />
      <DateCounter />
    </>
  );
}
