import { useState, useEffect } from "react";

export default function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = Math.floor(milliseconds / 1000);
    let total_minutes = Math.floor(total_seconds / 60);
    let total_hours = Math.floor(total_minutes / 60);
    let days = Math.floor(total_hours / 24);

    let seconds = total_seconds % 60;
    let minutes = total_minutes % 60;
    let hours = total_hours % 24;

    return `${days} | ${hours} | ${minutes} | ${seconds}`;
  };

  return (
    <div style={{ color: "#5e7e32", fontSize: "50px", marginTop: "40px", fontWeight: "bold" }}>
      {getFormattedTime(time)}
      <div style={{ fontSize: "20px", marginTop: "10px", color: "#333" }}>
        Days | Hours | Minutes | Seconds
      </div>
    </div>
  );
}
