import React from "react";
import { Button } from "reactstrap";

function TableHeader(props) {
  const { text, onClick, orderBy } = props;

  return (
    <th style={{ whiteSpace: "nowrap" }}>
      <Button color='info' onClick={onClick}>
        {text}
        {orderBy === "ascending" && "👇"}
        {orderBy === "descending" && "☝️"}
      </Button>
    </th>
  );
}

export default TableHeader;
