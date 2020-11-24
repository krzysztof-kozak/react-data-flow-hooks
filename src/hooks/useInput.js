import { useState } from "react";

const useInput = (value) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputValueChange = (e) => {
    const value = e.target.value;

    if (value < 1 || !value.length) {
      return;
    }
    setInputValue(value);
  };

  return [inputValue, handleInputValueChange];
};

export default useInput;
