const RotatingText = () => {
  return (
    <div className="w-[19rem] h-[19rem] rounded-full flex items-center justify-center animate-spin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlSpace="preserve"
      >
        <desc>Created with Fabric.js 2.3.2</desc>
        <defs />
        <g transform="translate(500 500) scale(5.65 5.65)">
          <g transform="translate(-32.16 -60.01) rotate(-29.5)">
            <text
              xmlSpace="preserve"
              fontFamily="BubbleLetterRegular"
              fontSize="18"
              fontStyle="normal"
              fontWeight="normal"
              style={{
                stroke: "none",
                fill: "black",
                whiteSpace: "pre",
              }}
            >
              <tspan x="-2.81" y="5.65" />
            </text>
          </g>
          <g transform="translate(-15.58 -66.32) rotate(-18.31)">
            <text
              xmlSpace="preserve"
              fontFamily="BubbleLetterRegular"
              fontSize="18"
              fontStyle="normal"
              fontWeight="normal"
              style={{
                stroke: "none",
                fill: "black",
                whiteSpace: "pre",
              }}
            >
              <tspan x="-6.93" y="5.65">W</tspan>
            </text>
          </g>
          {/* Add all other <g> tags here */}
        </g>
      </svg>
    </div>
  );
};

export default RotatingText;
