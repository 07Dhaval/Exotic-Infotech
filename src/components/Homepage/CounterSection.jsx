import React, { useEffect, useRef, useState } from "react";
import "./CounterSection.css";

const CounterItem = ({ target, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || typeof target !== "number") return;

    let startValue = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div className="counter-col">
      <div className="counter-main">
        <h2>{typeof target === "number" ? count : target}</h2>
        {typeof target === "number" && <span>+</span>}
      </div>
      <p>{label}</p>
    </div>
  );
};

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="counter-section" ref={sectionRef}>
      <div className="counter-container">
        <CounterItem target={80} label="PROJECT COMPLETED" start={startCount} />
        <CounterItem target={30} label="DEVELOPERS TEAM" start={startCount} />
        <CounterItem target={11} label="YEARS EXPERIENCE" start={startCount} />
        <CounterItem target={"24/7"} label="HOURS SUPPORT" start={startCount} />
      </div>
    </section>
  );
};

export default CounterSection;
