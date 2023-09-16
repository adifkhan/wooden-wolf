import React, { useEffect, useState } from "react";
import style from "../styles/home.module.css";

const CountDownTimer = ({ duration }) => {
  const [remTime, setRemtime] = useState(duration);
  let timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  useEffect(() => {
    setTimeout(() => {
      setRemtime(remTime - 1000);
    }, 1000);
  }, [remTime]);

  const formatedTime = (totalTime) => {
    let totalSec = parseInt(Math.floor(totalTime / 1000));
    let totalMin = parseInt(Math.floor(totalSec / 60));
    let totalHour = parseInt(Math.floor(totalMin / 60));

    timer.days = parseInt(Math.floor(totalHour / 24));

    timer.seconds = parseInt(totalSec % 60);
    timer.minutes = parseInt(totalMin % 60);
    timer.hours = parseInt(totalHour % 24);
  };
  formatedTime(remTime);
  return (
    <div className={style.timer}>
      <div className={style.days}>
        <p>{timer.days > 9 ? timer.days : `0${timer.days}`}</p>
        <span>Days</span>
      </div>
      <div className={style.hours}>
        <p>{timer.hours > 9 ? timer.hours : `0${timer.hours}`}</p>
        <span>Hours</span>
      </div>
      <div className={style.minutes}>
        <p>{timer.minutes > 9 ? timer.minutes : `0${timer.minutes}`}</p>
        <span>Minutes</span>
      </div>
      <div className={style.seconds}>
        <p>{timer.seconds > 9 ? timer.seconds : `0${timer.seconds}`}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default CountDownTimer;
