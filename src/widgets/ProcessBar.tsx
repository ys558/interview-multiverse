import { useState, useEffect } from "react";
import "./ProcessBar.scss";

type ProcessBarTypes = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  isStepBar: boolean;
};

const ProgressBar = ({
  active = true,
  setActive = () => {},
  isStepBar = false,
}: ProcessBarTypes) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const step = event.deltaY < 0 ? -3 : 3;
      const progressStatusRadtio = Math.max(0, Math.min(100, progress + step));

      if (progressStatusRadtio === 100 || progressStatusRadtio === 0)
        setActive((prevState) => !prevState);

      setProgress(progressStatusRadtio);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [progress, setActive]);

  return (
    <div className={`progress-bar-container ${active ? "active" : ""}`}>
      <div
        className="progress-bar"
        style={{ width: `${isStepBar ? progress : 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
