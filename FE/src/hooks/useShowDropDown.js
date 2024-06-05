import { useState, useEffect } from "react";

function useShowDropDown(ref, initialBoolean) {
  const [showOptions, setShowOptions] = useState(initialBoolean);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setShowOptions(!showOptions);
      }
    };

    if (showOptions) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [showOptions, ref]);
  
  return [showOptions, setShowOptions];
}

export default useShowDropDown;
