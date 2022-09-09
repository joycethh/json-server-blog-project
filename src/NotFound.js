import React from "react";
import ErrorPicture from "./404.jpg";

export const NotFound = () => {
  return (
    <div>
      <img src={ErrorPicture} alt="404" />
    </div>
  );
};
