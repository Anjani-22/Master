import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";
import StepCounter from "./StepCounter";
import Accordian from "./Accordian/Accordian";
import BillCalc from "./Billcalc/BillCalc";
import TextExpander from "./TextExpander/TextExpander";
import CurrencyCoverter from "./CurrencyCoverter/CurrencyCoverter";
import GeoLocation from "./GeoLocation/GeoLocation";

export default function App() {
  return (
    <>
      <GeoLocation />
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
