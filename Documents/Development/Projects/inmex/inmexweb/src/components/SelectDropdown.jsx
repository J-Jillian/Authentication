import React from "react";
import AsyncSelect from "react-select/async";

const SelectDropdown = () => {
  const options = [
    { value: "casa", label: "Casa" },
    { value: "departamento", label: "Departamento" },
    { value: "terreno", label: "Terreno" },
    { value: "local", label: "Local" },
  ];

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("loadOptions", searchValue, filteredOptions);
      callback(filteredOptions);
    }, 2000);
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      defaultOptions
      onChange={handleChange}
      placeholder="Propiedades"
    />
  );
};

export default SelectDropdown;
