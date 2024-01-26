import { useEffect } from "react";

export function useKey(keyCode, action) {
  useEffect(
    function () {
      function keydownEventCallback(e) {
        if (e.code.toLowerCase() === keyCode.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", keydownEventCallback);
      return function () {
        document.removeEventListener("keydown", keydownEventCallback);
      };
    },
    [action, keyCode]
  );
}
