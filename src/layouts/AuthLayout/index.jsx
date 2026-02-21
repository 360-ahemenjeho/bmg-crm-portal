import { Typography } from "@/components/ui";
import { spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box, Stack } from "@mui/material";
import { Outlet, useNavigate } from "react-router";

export default function AuthLayout() {
  const navigate = useNavigate();
  const { bg, main } = useColor();

  function navigateToDashboard() {
    navigate("/");
  }

  return (
    <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "repeat(2, 1fr)" }}>
      <Box
        sx={{
          backgroundImage: "url(/auth.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: main.primary,
          backgroundBlendMode: "overlay",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>

      <Box sx={{ backgroundColor: bg.tertiary }}>
        <Stack
          justifyContent="center"
          gap={spacingTokens.xl}
          sx={{
            height: "100svh",
            mx: "auto",
            maxWidth: { xs: "auto", md: "380px" },
            width: { xs: "100%", md: "60%" },
            boxSizing: "border-box",
            py: spacingTokens.lg,
            px: spacingTokens.md,
          }}
        >
          <Stack alignItems="center">
            <Box component="img" src="/logo-dark.png" sx={{ height: "40px" }} />
          </Stack>

          <Box>
            <Typography variant="h1" textAlign="center" lineHeight={1.5} fontWeight={700}>
              Sell Smarter. Connect Better.
            </Typography>
            <Typography
              color="secondary"
              textAlign="center"
              fontWeight={400}
              variant="h3"
              lineHeight={1.25}
            >
              Your deals, contacts, and insights are waiting.
            </Typography>
          </Box>
          <Outlet />
        </Stack>
      </Box>
    </Box>
  );
}
