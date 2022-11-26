import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
  Rect,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";
export default function UButtOnVRoot() {
  const url = "img.gif";
  const [image] = useImage(url);
  const [text, setText] = useState("");
  let [b, setB] = useState(229);
  let [f, setF] = useState(338);
  let [h, setH] = useState(332);
  let [j, setJ] = useState(322);
  let [k, setK] = useState(317);
  let [bRightShape, setBRightShape] = useState(229);
  let [fRightShape, setFRightShape] = useState(338);
  let [hRightShape, setHRightShape] = useState(332);
  let [jRightShape, setJRightShape] = useState(322);
  let [kRightShape, setKRightShape] = useState(317);
  let [yBetaSmallLine, setyBetaSmallLine] = useState(151);
  let [yBetaBigLine, setyBetaBigLine] = useState(148);
  let e = 422;
  let s = 600;
  let t = 875;
  const [grad, setGrad] = useState(45);
  let initialT1 = e - bRightShape;
  let initiala = 10 * Math.cos((grad * Math.PI) / 180);
  let initialX = initialT1 * Math.tan((grad * Math.PI) / 180) + 597;
  let xAdditinalLine =
    initialT1 * Math.tan((grad * Math.PI) / 180) +
    Math.sin((grad * Math.PI) / 180) +
    625;
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };
  const handelIncT2 = () => {
    setB(b - 10);
    setF(f - 5);
    setH(h - 5);
    setJ(j - 5);
    setK(k - 5);
  };
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setFRightShape(fRightShape - 5);
    setHRightShape(hRightShape - 5);
    setJRightShape(jRightShape - 5);
    setKRightShape(kRightShape - 5);
    setyBetaSmallLine(yBetaSmallLine - 10);
    setyBetaBigLine(yBetaBigLine - 10);
    console.log("initialT1" + initialT1);
  };
  const handelIncBeta = () => {
    setGrad(grad + 5);
    console.log("grad" + grad);
    console.log("xAdditinalLine" + xAdditinalLine);
  };
  const handelDecBeta = () => {
    setGrad(grad - 5);
  };
  const [xCordinateLeftShape, setXCordinateLeftShape] = useState(0);
  const [xCordinateRightShape, setXCordinateRightShape] = useState(0);
  const [bPlas, setBPlas] = useState(596);
  const [width, setWidth] = useState(316);
  const handelIncB = () => {
    setBPlas(bPlas + 10);
    setWidth(width + 10);
    console.log(bPlas);
    setXCordinateLeftShape(xCordinateLeftShape - 5);
    setXCordinateRightShape(xCordinateRightShape + 5);
  };
  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Group>
            {/*<Image x={100} y={10} image={image} />*/}
            <Text text={text} x={10} y={50} fontSize={20} />
          </Group>
          <LeftShape
            xCordinateLeftShape={xCordinateLeftShape}
            b={b}
            f={f}
            h={h}
            j={j}
            k={k}
          />

          <RightShape
            xCordinateRightShape={xCordinateRightShape}
            bRightShape={bRightShape}
            initialX={initialX}
            s={s}
            t={t}
            fRightShape={fRightShape}
            hRightShape={hRightShape}
            jRightShape={jRightShape}
            kRightShape={kRightShape}
          />
          <BottomShape
            xCordinateRightShape={xCordinateRightShape}
            yBetaBigLine={yBetaBigLine}
            xCordinateLeftShape={xCordinateLeftShape}
            bPlas={bPlas}
            width={width}
          />
          {/*additinal line*/}
          <Line
            x={xCordinateRightShape}
            stroke={"green"}
            strokeWidth={2}
            points={[
              initialX,
              bRightShape,
              xAdditinalLine,
              yBetaSmallLine + initiala,
            ]}
          />
        </Layer>
      </Stage>
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelIncBeta}> β + </button>
      <button onClick={handelDecBeta}> β - </button>
      <button onClick={handelIncB}> b + </button>
    </>
  );
}
