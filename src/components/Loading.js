import React from "react";
import loadingGif from "../images/gif/loading3.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4> rooms data loading...</h4>
      <img src={loadingGif} alt="loading"></img>
    </div>
  );
}
