import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  padding-top: 10px;
  padding-left: 10px;
  margin-left: 10px;
`;

const WrapObject = styled.div`
  display: flex;
`;

const Key = styled.div`
  color: red;
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.div`
  color: blue;
  margin-left: 10px;
`;

const PropertyName = styled.div`
  color: #008080;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const Extend = ({ extending, children, propKey }) => {
  const [isOpenProps, setOpenProps] = useState(false);

  return (
    <>
      <PropertyName onClick={() => setOpenProps(!isOpenProps)}>
        {propKey}
        {isOpenProps ? "-" : "+"}
      </PropertyName>
      {isOpenProps && children}
    </>
  );
};

const Recursive = ({ data, keyName, rootProperty }) => {
  return (
    <Container>
      {typeof data !== "object" ? (
        <WrapObject>
          <Key>{keyName}</Key>: <Value>{data.toString()}</Value>
        </WrapObject>
      ) : (
        <Extend propKey={keyName} extending={!!rootProperty}>
          {Object.values(data).map((item, idx, source) => {
            return (
              <Recursive key={idx} data={item} keyName={Object.keys(data)[idx]} />
            );
          })}
        </Extend>
      )}
    </Container>
  );
};

export default Recursive;
