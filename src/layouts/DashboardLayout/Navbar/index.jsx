import { dashboardNavHeight, dashboardSidebarWidth, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { ListFilled } from "@fluentui/react-icons";
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "./Avatar";
import Notification from "./Notification";

export default function Navbar({ onToggle }) {
  const { bg, border } = useColor();

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: bg.tertiary,
        borderBottom: `1px solid ${border.primary}`,
        height: dashboardNavHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        px: spacingTokens.md,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Box sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }} onClick={onToggle}>
          <ListFilled fontSize={22} />
        </Box>
        <Typography variant="body2" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Dashboard
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
        <Notification />
        <Avatar />
      </Stack>
    </Box>
  );
}
