import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationRounded({ totalPage, handleClickPage, page }) {
  return (
    <div style={{ paddingLeft: "calc(50% - 11rem)" }}>
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          shape="rounded"
          page={page}
          onChange={handleClickPage}
        />
      </Stack>
    </div>
  );
}

export default PaginationRounded;
