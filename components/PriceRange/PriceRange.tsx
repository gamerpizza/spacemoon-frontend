import { useState } from "react";
import { useRanger } from "react-ranger";

const PriceRange = () => {
  const [values, setValues] = useState([1000, 9000]);

  const { getTrackProps, handles } = useRanger({
    min: 0,
    max: 10000,
    stepSize: 5,
    values,
    onChange: setValues
  });

  return (
    <div className="h-6">
      <br/>
      <div
        {...getTrackProps({
          style: {
            height: "3px",
            background: "#A042E1",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
            borderRadius: "1px"
          }
        })}
      >
        {handles.map(({ getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                width: "28px",
                height: "28px",
                outline: "none",
                borderRadius: "100%",
                background: "white",
                border: "1px solid #A042E1",

              }
            })}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <pre
        style={{
          display: "inline-block",
          textAlign: "left"
        }}
      >
        <code>
          {/* {JSON.stringify({
            values
          })} */}
        </code>
      </pre>
    </div>
  );
}

export default PriceRange;
