import React, { memo, useState } from "react";
import { Key, WrapObject } from "../styled";

const Extend = ({ children, propKey, isArray }) => {
  const [isOpenChilds, setOpenChilds] = useState(false);
  
  const getMark = mark => (isArray ? `[ ${mark} ]` : `{ ${mark} }`);

  return (
    <>
      <WrapObject onClick={() => setOpenChilds(!isOpenChilds)}>
        <Key>{propKey}{propKey && ":"}</Key> {isOpenChilds ? getMark("-") : getMark("+")}
      </WrapObject>
      {isOpenChilds && children}
    </>
  );
};

export default memo(Extend);
