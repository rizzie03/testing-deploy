import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationRounded() {
  return (
    <div style={{ paddingLeft: "calc(50% - 11rem)" }}>
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </div>
  );
}

export default PaginationRounded;
