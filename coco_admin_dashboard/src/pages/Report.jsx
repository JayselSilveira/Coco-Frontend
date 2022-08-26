import React, { useState, useEffect } from "react";

function Report() {
  useEffect(() => {
    fetch("https://coco-sih-api-2.herokuapp.com/", {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        u_id: "qnp4TAZYyDZgpCtZHTnoOVM12NT2",
      }),
    }).then((response) => {
      console.log(response);
    });
  }, []);
  return <div></div>;
}

export default Report;
