import { fontSizes, radiusTokens, spacing, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { CaretRightFilled, CaretUpFilled } from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";

/** @typedef {import("@/types/global.d.js").NavItem} NavProps */

/**
 * @param {Object} props
 * @param {NavProps} props.nav
 * @param {() => void} props.onNavigate
 * @param {boolean} props.active
 * @param {string} [props.y]
 * @param {string} [props.x]
 * @param {boolean} [props.subNavOpen]
 */
export default function NavLink({
  nav,
  onNavigate,
  active,
  y = "6px",
  x = spacing[8],
  subNavOpen = false,
}) {
  const { elevate, shadow, fg } = useColor();

  return (
    <Box
      component="div"
      onClick={onNavigate}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: spacingTokens.sm,
        width: "100%",
        fontSize: fontSizes.body2,
        fontWeight: 500,
        py: y,
        px: x,
        lineHeight: 1,
        backgroundColor: active ? elevate.primary : "transparent",
        boxShadow: active ? shadow.default : "none",
        borderRadius: radiusTokens.md,
        flexShrink: 0,
        cursor: "pointer",
        transition: "background-color 0.35s ease-in-out, color 0.35s ease-in-out 0.25s",
        "&:hover": {
          backgroundColor: elevate.primary,
          color: fg.secondary,
        },
        "& *": {
          flexShrink: 0,
        },
        "& .indicator": {
          position: "absolute",
          left: `-${spacingTokens.md}`,
          top: "50%",
          transform: subNavOpen
            ? "translateY(-50%) rotate(90deg)"
            : "translateY(-50%) rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "& *": {
            fontSize: "16px",
          },
        },
      }}
    >
      {nav?.sub && nav?.sub?.length > 0 && (
        <Stack alignItems="center" justifyContent="center" component="div" className="indicator">
          {subNavOpen ? <CaretUpFilled></CaretUpFilled> : <CaretRightFilled></CaretRightFilled>}
        </Stack>
      )}
      <Stack alignItems="center" justifyContent="center">
        <nav.icon
          fontSize={26}
          style={{ display: "block", color: nav?.color ? nav.color : fg.primary }}
        ></nav.icon>
      </Stack>
      <Box component="p" lineHeight={1} sx={{ padding: 0, margin: 0, userSelect: "none" }}>
        {nav?.label}
      </Box>
    </Box>
  );
}
