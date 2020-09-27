import React, { useState } from "react";

function Checkbox({ labelOn, labelOff }) {
  const [isChecked, setChecked] = useState(false);

  function onChange() {
    setChecked(!isChecked);
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? labelOn : labelOff}
    </label>
  );
}

export default Checkbox;
