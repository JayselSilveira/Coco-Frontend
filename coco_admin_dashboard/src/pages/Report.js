import React, { useState, useEffect } from "react";

function Report() {


  useEffect(() => {

    fetch("http://0.0.0.0:8000/").then((Response) => {
      return Response.json()
    }).then((data) => {
      console.log(data);
    })

    fetch("https://coco-sih-api-2.herokuapp.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "u_id": "qnp4TAZYyDZgpCtZHTnoOVM12NT2",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  const summary_text = {
    all: "Based on our analysis, the system proposes that ",
    mild: "The child displays no-to mild signs of this class which inplies he/she does NOT suffer from this.",
    moderate:
      "The child displays moderate signs of this class which implies that he needs to be monitored and assisted in managing this mental health class using self care means",
    extreme:
      "The child displays extreme signs of this class. This is considered alarming. The child needs proper treatment to manage this class of mental health Issue ",
  };
  return <>{summary_text.all}</>;
}

export default Report;
