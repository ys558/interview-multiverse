import { useState } from "react";
import "./NavMenu.scss";
import ProgressBar from "./ProcessBar";

const navMenuTexts = [
  "introduction",
  "the technology",
  "tech spotlight",
  "why music?",
];

const NavMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <ul>
        {navMenuTexts.map((text: string) => (
          <li key={text}>
            <a href="#">
              {text}
              <ProgressBar
                active={active}
                setActive={setActive}
                isStepBar={text === "introduction"}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
