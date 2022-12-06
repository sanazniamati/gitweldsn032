import React from "react";
import {
  Arrow,
  Group,
  Image,
  Layer,
  Shape,
  Stage,
  Text,
  TextPath,
} from "react-konva";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import useImage from "use-image";
import { useRef, useState } from "react";
import BetaDegree from "../UV-butt with backings (U-butt on V-root)/BetaDegree";
import BottomShape from "../UV-butt with backings (U-butt on V-root)/BottomShape";

function BellSeam(props) {
  const url = "bell_seam.gif";
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
  const [fRightShape, setFRightShape] = useState(354);
  const [hRightShape, setHRightShape] = useState(348);
  const [jRightShape, setJRightShape] = useState(338);
  const [kRightShape, setKRightShape] = useState(332);
  const [radius, setRadius] = useState(50);
  const initialH = 454 - kRightShape;
  const [alfa, setAlfa] = useState(45);
  const initialXSP = initialH / Math.tan((alfa * Math.PI) / 180);
  //x,y Sart point Right shape
  const [xSPLeftShape, setXSPLeftShape] = useState();
  const [ySPLeftShape, setYSPLeftShape] = useState(348);
  const [xBeta, setXBeta] = useState(720);
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          {/*<Image x={135} y={47} image={image} />*/}
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
        {/*  R*/}
        <Arrow
          points={[540, 414, 549, 431]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <TextPath
          x={532}
          y={391}
          fill={"#333"}
          text={"R"}
          data={"M 0 0 L 300 320 "}
          fontSize={30}
        />
        {/*alfa Degree*/}
        <Text x={532} y={330} text={"α"} fontSize={30} />
        <Arrow
          points={[455, 395, 475, 387]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(475, 387);
            context.quadraticCurveTo(538, 338, 596, 387);
            context.fillStrokeShape(shape);
          }}
          stroke="green"
          strokeWidth={2}
        />
        <Arrow
          points={[620, 395, 598, 387]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
      </Layer>
    </Stage>
  );
}

export default BellSeam;
