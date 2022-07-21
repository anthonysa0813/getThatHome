import { useState } from "react";
import TooltipBox from "./TooltipBox";

function FiltersButton({ text, onClick, children }) {
  const [currentTooltipActive, setCurrentTooltipActive] = useState(false);

  return (
    <>
      <div onClick={() => setCurrentTooltipActive(!currentTooltipActive)}>
        {text}
      </div>
      {currentTooltipActive && <TooltipBox>{children}</TooltipBox>}
    </>
  );
}

export default FiltersButton;
