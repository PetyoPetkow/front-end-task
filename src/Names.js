import React from "react";

const vowels = ["a", "e", "i", "o", "u", "y"];

//The component that is displayed with the show function
//Checks if the first letter of the name is a vowel and gives it a different class
const Names = ({ names }) => {
  return names.map((name) => {
    if (vowels.includes(name.charAt(0).toLowerCase())) {
      return (
        <tr key={name} className="name name-colored">
          <td className="names-data">{name}</td>
        </tr>
      );
    } else {
      return (
        <tr key={name} className="name">
          <td className="names-data">{name}</td>
        </tr>
      );
    }
  });
};

export default Names;
