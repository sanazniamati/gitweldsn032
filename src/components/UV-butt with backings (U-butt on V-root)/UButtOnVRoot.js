import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
  TextPath,
  Rect,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
import BetaDegree from "./BetaDegree";
import RightShape from "./RightShape";
import React from "react";
import BottomShape from "./BottomShape";

export default function UButtOnVRoot() {
  const url = "img.gif";
  const [image] = useImage(url);
  const [text, setText] = useState("");
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
  //states Left shape
  const [bLeftShape, setBLeftShape] = useState(255);
  const [fLeftShape, setFLeftShape] = useState(373);
  const [hLeftShape, setHLeftShape] = useState(367);
  const [jLeftShape, setJLeftShape] = useState(357);
  const [kLeftShape, setKLeftShape] = useState(352);
  //x,y control point left shape
  const [xCPLeftShape, setXCPLeftShape] = useState();
  const [yCPLeftShape, setYCPLeftShape] = useState(349);
  //x,y End point left shape
  const [xEPLeftShape, setXEPLeftShape] = useState();
  const [yEPLeftShape, setYEPLeftShape] = useState(345);

  const [xAlfaLeftShape, setXAlfaLeftShape] = useState();

  const xAlfa = 560;
  //states Right shape
  const [bRightShape, setBRightShape] = useState(255);
  const [fRightShape, setFRightShape] = useState(369);
  const [hRightShape, setHRightShape] = useState(363);
  const [jRightShape, setJRightShape] = useState(353);
  const [kRightShape, setKRightShape] = useState(347);
  const [radius, setRadius] = useState(50);
  const initialH = 454 - kRightShape;
  const [alfa, setAlfa] = useState(45);
  const initialXSP = initialH / Math.tan((alfa * Math.PI) / 180);
  //x,y Sart point Right shape
  const [xSPLeftShape, setXSPLeftShape] = useState();
  const [ySPLeftShape, setYSPLeftShape] = useState(348);
  const [xBeta, setXBeta] = useState(720);
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setFRightShape(fRightShape - 5);
    setHRightShape(hRightShape - 5);
    setJRightShape(jRightShape - 5);
    setKRightShape(kRightShape - 5);
  };
  const handelDecT1 = () => {};
  const handelIncT2 = () => {
    setBLeftShape(bLeftShape - 10);
    setFLeftShape(fLeftShape - 5);
    setHLeftShape(hLeftShape - 5);
    setJLeftShape(jLeftShape - 5);
    setKLeftShape(kLeftShape - 5);
    setYCPLeftShape(yCPLeftShape - 5);
    setYEPLeftShape(yEPLeftShape - 5);
  };
  const handelDecT2 = () => {};
  const handelIncBeta = () => {};
  const handelDecBeta = () => {};
  const handelIncAlfa = () => {
    setAlfa(alfa + 5);
  };
  const handelDecAlfa = () => {
    setAlfa(alfa - 5);
  };
  const handelIncH = () => {
    setYSPLeftShape(ySPLeftShape - 10);
  };
  const handelDecH = () => {};
  const handelIncR = () => {
    setRadius(radius + 5);
  };
  const handelDecR = () => {
    setRadius(radius - 5);
  };
  return (
    <>
      <button onClick={handelIncT1}>t1 +</button>
      {/*<button onClick={handelDecT1}>t1 -</button>*/}
      <button onClick={handelIncT2}> t2 +</button>
      {/*<button onClick={handelDecT2}> t2 -</button>*/}
      {/*<button onClick={handelIncBeta}> β + </button>*/}
      {/*<button onClick={handelDecBeta}> β - </button>*/}
      {/*<button onClick={handelIncAlfa}> α + </button>*/}
      {/*<button onClick={handelDecAlfa}> α - </button>*/}
      <button onClick={handelIncH}> h + </button>
      {/*<button onClick={handelDecH}> h - </button>*/}
      <button onClick={handelIncR}> R + </button>
      <button onClick={handelDecR}> R - </button>
      <button onClick={handelIncAlfa}> Alfa + </button>
      <button onClick={handelDecAlfa}> Alfa - </button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Group>
            {/*<Image x={100} y={2} image={image} />*/}
            <Text text={text} x={10} y={50} fontSize={20} />
          </Group>
          <LeftShape
            bLeftShape={bLeftShape}
            fLeftShape={fLeftShape}
            hLeftShape={hLeftShape}
            kLeftShape={kLeftShape}
            jLeftShape={jLeftShape}
            xAlfa={xAlfa}
            yCPLeftShape={yCPLeftShape}
            yEPLeftShape={yEPLeftShape}
          />
          <RightShape
            bRightShape={bRightShape}
            fRightShape={fRightShape}
            hRightShape={hRightShape}
            jRightShape={jRightShape}
            kRightShape={kRightShape}
            xBeta={xBeta}
            ySPLeftShape={ySPLeftShape}
            radius={radius}
            initialXSP={initialXSP}
          />
          <BetaDegree bRightShape={bRightShape} />
          {/*  R*/}
          <Arrow
            points={[608, 289, 632, 334]}
            pointerLength={5}
            pointerWidth={5}
            stroke={"blue"}
            strokeWidth={3}
          />
          <TextPath
            x={608}
            y={270}
            fill={"#333"}
            text={"R"}
            data={"M 0 0 L 300 320 "}
            fontSize={30}
          />

          {/*    alfa Degree */}
          <Text x={542} y={360} text={"α"} fontSize={30} />
          <Arrow
            points={[527, 414, 537, 404]}
            pointerLength={5}
            pointerWidth={5}
            stroke={"blue"}
            strokeWidth={3}
          />
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(537, 404);
              context.quadraticCurveTo(561, 371, 585, 400);
              context.fillStrokeShape(shape);
            }}
            stroke="green"
            strokeWidth={2}
          />
          <Arrow
            points={[595, 410, 585, 400]}
            pointerLength={5}
            pointerWidth={5}
            stroke={"blue"}
            strokeWidth={3}
          />

          <BottomShape />
        </Layer>
      </Stage>
    </>
  );
}
