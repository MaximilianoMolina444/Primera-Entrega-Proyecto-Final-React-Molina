import React, { useState, useEffect } from "react";
import TestApiRender from "./TestApiRender";

export default function TestApiContainer() {
  const [actividad, setActividad] = useState({});
  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((json) => {
        setActividad(json);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log("lo ultimo que hago"));
  }, []);
  return <TestApiRender actividad={actividad} />;
}