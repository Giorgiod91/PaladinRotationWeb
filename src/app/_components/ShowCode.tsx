import React from "react";

type Props = {};

function ShowCode({}: Props) {
  return (
    <div className="mockup-code">
      <pre data-prefix=".">
        <code>Importing Stats...</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>Calculation</code>
      </pre>
      <pre data-prefix=">" className="text-success">
        <code>Done!</code>
      </pre>
    </div>
  );
}

export default ShowCode;
