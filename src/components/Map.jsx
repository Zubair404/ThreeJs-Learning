import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-74, -32, 0], // Center on Pakistan
        center: [-25, 0],
        scale: 700
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="./features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[74.3587, 31.5204]}
        dx={-45}
        dy={-15}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Lahore"}
        </text>
      </Annotation>
      <Annotation
        subject={[73.0479, 33.6844]}
        dx={45}
        dy={15}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="3" textAnchor="start" alignmentBaseline="middle" fill="white">
          {"Islamabad"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
