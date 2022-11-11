import React from "react";
import "../static/Toolbar.css";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { useToolsContext } from "../context/tools";
const Toolbar = () => {
  const {
    boldLetter,
    underLine,
    itallic,
    redColor,
    blueColor,
    greenColor,
    purpleColor,
    cyanColor,
    blackColor,
  } = useToolsContext();
  return (
    <aside>
      <div className="items">
        <small style={{ borderBottom: "1px solid black" }}>colors</small>
        <InvertColorsIcon onClick={redColor} className="red tool" />
        <InvertColorsIcon onClick={blueColor} className="blue tool" />
        <InvertColorsIcon onClick={greenColor} className="green tool" />
        <InvertColorsIcon onClick={purpleColor} className="purple tool" />
        <InvertColorsIcon onClick={cyanColor} className="cyan tool" />
        <InvertColorsIcon onClick={blackColor} className="black tool" />
      </div>
      <div className="tools">
        <small style={{ borderBottom: "1px solid black" }}>Decoration</small>
        <small title="bold" className="tool">
          <FormatBoldIcon onClick={boldLetter} />
        </small>
        <small title="underline" className="tool">
          <FormatUnderlinedIcon onClick={underLine}/>
        </small>
        <small title="itallic" className="tool">
          <FormatItalicIcon onClick={itallic}/>
        </small>
      </div>
    </aside>
  );
};

export default Toolbar;
