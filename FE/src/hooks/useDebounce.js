const { useState, useEffect } = require("react");

function useDebounce(value, delayTime) {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(value);
    }, delayTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return searchValue;
}

export default useDebounce;
