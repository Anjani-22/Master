import DateCounter from "./DateCounter";
import FlashCard from "./FlashCard";
import StepCounter from "./StepCounter";
import Accordian from "./Accordian/Accordian";
import BillCalc from "./Billcalc/BillCalc";
import TextExpander from "./TextExpander/TextExpander";
import CurrencyCoverter from "./CurrencyCoverter/CurrencyCoverter";
import GeoLocation from "./GeoLocation/GeoLocation";
import BankUseReducer from "./BankUseReducer/BankUseReducer";

export default function App() {
  return (
    <>
      {" "}
      <StepCounter />
      <GeoLocation />
      <CurrencyCoverter />
      <TextExpander />
      <BillCalc />
      <Accordian />
      <FlashCard />
      <DateCounter />
      <BankUseReducer />
    </>
  );
}
