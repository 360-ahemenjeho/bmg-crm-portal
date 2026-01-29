import { spacing } from "@/constants/theme";
import { TableRow, TableHead as RootTableHead, TableCell, Stack, Typography } from "@mui/material";

export default function TableHead({ children }) {
  return (
    <RootTableHead>
      <TableRow>
        {children?.map((column, index) => (
          <TableCell key={index} align={column.align}>
            <Stack gap={spacing[1]} direction="row" alignItems="center">
              {column?.icon && (
                <column.icon fontSize={14} style={{ color: "inherit !important" }} />
              )}
              {column.label}
            </Stack>
          </TableCell>
        ))}
      </TableRow>
    </RootTableHead>
  );
}
