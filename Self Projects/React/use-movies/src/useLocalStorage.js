import { useEffect, useState } from "react";

export function useLocalStorage(intialState, key) {
  const [val, setVal] = useState(function () {
    const storedVal = localStorage.getItem(key);
    return storedVal ? JSON.parse(storedVal) : intialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(val));
    },
    [val, key]
  );

  return [val, setVal];
}
