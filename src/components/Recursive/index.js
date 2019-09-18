import React, { memo } from "react";

import Extend from "./Extend";

import { Container, WrapObject, Key, Value } from "./styled";

const Recursive = ({ data, keyName }) => {
  const isArray = typeof data === "object" && Array.isArray(data);
  const renderKeyValue = () => (
    <WrapObject>
      <Key>{keyName}{keyName && ":"}</Key> <Value>{data.toString()}</Value>
    </WrapObject>
  );

  const recursivelyGetProps = () => (
    <Extend propKey={keyName} isArray={isArray}>
      {Object.values(data).map((item, idx) => (
        <Recursive
          key={idx}
          data={item}
          keyName={!isArray && Object.getOwnPropertyNames(data)[idx]}
        />
      ))}
    </Extend>
  );

  return (
    <Container>
      {typeof data !== "object" ? renderKeyValue() : recursivelyGetProps()}
    </Container>
  );
};

export default memo(Recursive);
