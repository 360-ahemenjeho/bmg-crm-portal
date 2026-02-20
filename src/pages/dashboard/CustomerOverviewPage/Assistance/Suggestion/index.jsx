import { radiusTokens, spacingTokens } from "@/constants/theme";
import { Stack } from "@mui/material";
import { Typography } from "@/components/ui";

/**
 * @param {import("@/types/global.d").SupportSuggestion} props
 */
export default function Suggestion({ label, icon: Icon, color }) {
  return (
    <Stack
      gap={spacingTokens.sm}
      alignItems="center"
      justifyContent="center"
      sx={{
        px: spacingTokens.lg,
        py: spacingTokens.xl,
        borderRadius: radiusTokens.lg,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Icon fontSize={42} color={color}></Icon>
      <Typography lineHeight={1} textAlign="center">
        {label}
      </Typography>
    </Stack>
  );
}
