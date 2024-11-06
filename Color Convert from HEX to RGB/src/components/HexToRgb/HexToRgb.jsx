import { useState } from "react";
import { Convert } from "../Convert/Convert";
import "./HexToRgb.css";

const regHEX = /#[0-9 a-f]{6}/;

export const HexToRgb = () => {
  let 
    [inputHex, setInputHex] = useState("#34495e"),
    [result, setResult] = useState(Convert(inputHex)),
    [bgColor, setBgColor] = useState(Convert(inputHex));

  const handleChange = (event) => {
    const { value } = event.target;

    if (value.length > 7) return;
    
    setInputHex(value);
    setResult("");
    
    if (value.length < 7) return;

    if (regHEX.test(value.toLowerCase())) {
      const rgb = Convert(value);
      setResult(rgb);
      setBgColor(rgb);
    } else {
      setResult("Ошибка!");
      setBgColor("#ff3333");
    }
  };

  const hexToRgbBgColor = { backgroundColor: bgColor };

  return (
    <div className={"hex2rgb"}>
      <div className={"hex2rgb__body"} style={hexToRgbBgColor}>
        <div className={"hex2rgb__content"}>
          <div className={"hex2rgb__input-wrap"}>
            <input
              className={"hex2rgb__input"}
              name="name"
              value={inputHex}
              onChange={handleChange}
            />
          </div>
          <div className={"hex2rgb__result-wrap"}>
            <div className={"hex2rgb__result"}>{result}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
