import { TableRow, TableBody as RootTableBody, TableCell, Box, Typography } from "@mui/material";
import { MoonLoader } from "react-spinners";

export default function TableBody({ children, count, message, span, loading = false, onRefresh }) {
  return (
    <RootTableBody>
      {loading ? (
        <TableRow>
          <TableCell colSpan={span} align="center">
            <MoonLoader open size={13} />
          </TableCell>
        </TableRow>
      ) : Number(count || 0) === 0 ? (
        <TableRow>
          <TableCell colSpan={span} align="center">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="tight"
            >
              <Typography fontSize="16px" fontWeight={600} lineHeight={1}>
                404!
              </Typography>
              <Typography variant="body" color="tertiary">
                {message || "The data requested is not found."}
              </Typography>
            </Box>
          </TableCell>
        </TableRow>
      ) : (
        children
      )}
    </RootTableBody>
  );
}
