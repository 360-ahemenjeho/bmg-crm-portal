import { Box, Stack } from "@mui/material";
import {
  AlignBottomFilled,
  PeopleFilled,
  SignOutRegular,
  TopSpeedFilled,
} from "@fluentui/react-icons";
import { useEffect, useRef, useState } from "react";
import { spacingTokens } from "@/constants/theme";
import NavLink from "./NavLink";

const menuItems = [
  { label: "Dashboard", icon: TopSpeedFilled },
  { label: "Users", icon: PeopleFilled },
  { label: "Analytics", icon: AlignBottomFilled },
];

export default function Sidebar({ setWidth }) {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      setWidth(navRef.current.offsetWidth);
    }
  }, [setWidth]);

  return (
    <Box ref={navRef} sx={{ height: "100vh" }}>
      <Stack display="flex" alignItems="center" justifyContent="center" height="80px">
        <Box component="img" height="30px" src="/logo-dark.png" />
      </Stack>
      <Box
        sx={{
          px: spacingTokens.md,
          height: `calc(100vh - 120px)`,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: spacingTokens.sm,
        }}
      >
        {menuItems.map((item, index) => (
          <NavLink key={index} nav={item} active={index === 0} />
        ))}
      </Box>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="end"
        height="40px"
        px={spacingTokens.md}
      >
        <SignOutRegular fontSize={20} style={{ cursor: "pointer" }} />
      </Stack>
    </Box>
  );
}
