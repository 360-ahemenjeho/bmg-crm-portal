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
        py: spacingTokens.md,
        borderRadius: radiusTokens.xl,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Icon fontSize={32} color={color}></Icon>
      <Typography lineHeight={1.25} textAlign="center" variant="caption" fontWeight={500}>
        {label}
      </Typography>
    </Stack>
  );
}
