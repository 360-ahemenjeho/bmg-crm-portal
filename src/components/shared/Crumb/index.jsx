import { dashboardNavHeight, radius, spacing } from "@/lib/theme";
import { useColor } from "@/contexts/color";
import { Box } from "@mui/material";

/** @typedef {import("@/types/global.d.js").NavItem} NavProps */

/**
 * @param {Object} props
 * @param {boolean} props.active
 * @param {Omit<NavProps, "path" | "sub">} props.nav
 * @param {string} [props.height]
 */
export default function Crumb({ active, nav, height = dashboardNavHeight }) {
  const { fg, main, shadow, elevate } = useColor();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height,
        "&::before": {
          content: '""',
          display: active ? "block" : "none",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: main.primary,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: elevate.primary,
          boxShadow: shadow.default,
          borderRadius: radius[2],
          padding: "3px 6px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: spacing[1],
          "& > *": {
            color: active ? main.primary : fg.primary,
          },
        }}
      >
        {nav.icon && <nav.icon fontSize={16} style={{ display: "block" }}></nav.icon>}
        <Box component="span" fontSize="11px" style={{ lineHeight: 1 }}>
          {nav?.label}
        </Box>
      </Box>
    </Box>
  );
}
