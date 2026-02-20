import { radiusTokens, spacingTokens } from "@/constants/theme";
import { Stack } from "@mui/material";
import Checklist from "./Checklist";
import Reminders from "./Reminders";

export default function Agenda() {
  return (
    <Stack
      gap={spacingTokens.lg}
      sx={{
        backgroundColor: "#FFC64B",
        borderRadius: radiusTokens.xl,
        px: spacingTokens.md,
        py: spacingTokens.lg,
      }}
    >
      <Checklist></Checklist>
      <Reminders></Reminders>
    </Stack>
  );
}
