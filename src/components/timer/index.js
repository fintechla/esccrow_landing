import React, { useEffect, useState } from "react";
import { ContainerTimer } from "./styles";
import { getRemainTime } from "./timer";

function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      funGetRemainTime();
    }, 1000);
  }, []);

  const funGetRemainTime = () => {
    const tiempoObj = getRemainTime("Jul 22 2022 24:59:59 GMT-0500");
    setDays(tiempoObj.remainDays);
    setHours(tiempoObj.remainHours);
    setMinutes(tiempoObj.remainMinutes);
    setSeconds(tiempoObj.remainSeconds);
  };

  return (
    <ContainerTimer>
      <div>
        <span>{days}</span>
        <span>days</span>
      </div>
      <div>
        <span>{hours}</span>
        <span>hours</span>
      </div>
      <div>
        <span>{minutes}</span>
        <span>minutes</span>
      </div>
      <div>
        <span>{seconds}</span>
        <span>seconds</span>
      </div>
    </ContainerTimer>
  );
}

export default Timer;
