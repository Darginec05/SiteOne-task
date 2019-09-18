import React, { memo, useState } from "react";
import { PropertyName } from "../styled";

const Extend = ({ children, keyName, isArray }) => {
  const [isOpenChilds, setOpenChilds] = useState(false);

  return (
    <>
      <PropertyName onClick={() => setOpenChilds(!isOpenChilds)}>
        {keyName}
        {isOpenChilds ? (isArray ? "[ - ]" : "{ - }") : (isArray ? "[ + ]" : "{ + }")}
      </PropertyName>
      {isOpenChilds && children}
    </>
  );
};

export default memo(Extend);
