import { Box, TableContainer, Table as TableRoot } from "@mui/material";

export default function Table({ children, ...rest }) {
  return (
    <TableContainer component={Box}>
      <TableRoot {...rest}>{children}</TableRoot>
    </TableContainer>
  );
}
