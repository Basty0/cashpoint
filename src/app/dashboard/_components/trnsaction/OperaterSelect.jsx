"use client";
import React, { useState } from "react";

const SelectableList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, name: "Élément 1" },
    { id: 2, name: "Élément 2" },
    { id: 3, name: "Élément 3" },
  ];

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className={selectedId === item.id ? "bg-blue-500 text-white" : ""}
          onClick={() => handleSelect(item.id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SelectableList;
