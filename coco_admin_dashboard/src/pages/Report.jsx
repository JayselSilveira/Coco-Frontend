import React, { useState, useEffect } from "react";

function Report() {
  useEffect(() => {
    fetch("https://coco-sih-api-2.herokuapp.com/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        u_id: id,
        ans_id: answersid.collection("TestAnswers").doc()._documentPath
          ._parts[3],
      }),
    });
  }, []);
  return <div>report</div>;
}

export default Report;
