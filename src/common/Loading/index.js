import React from "react";
import "./loading.css";
const Loading = ({ size }) => {
  return (
    <div className="loading">
      <div className="loading-top" />
      <div className="loading-center-strip" />
      <div className="loading-bottom" />
    </div>
  );
};

export default Loading;
