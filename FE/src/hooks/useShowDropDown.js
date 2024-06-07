import { useState, useEffect } from "react";

function useShowDropDown(ref, initialBoolean) {
  const [show, setShow] = useState(initialBoolean);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    if (show) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [show, ref]);
  
  return [show, setShow];
}

export default useShowDropDown;
