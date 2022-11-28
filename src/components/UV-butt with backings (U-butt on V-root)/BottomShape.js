import React from "react";
import { Group, Rect } from "react-konva";
import useImage from "use-image";

function BottomShape(props) {
  const url = "rect.png";
  const [image] = useImage(url);
  return (
    <Group>
      <Rect
        x={404}
        y={460}
        width={316}
        height={54}
        stroke={"blue"}
        strokeWidth={4}
        fillPatternImage={image}
      />
    </Group>
  );
}

export default BottomShape;
