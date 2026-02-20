import { radiusTokens, spacingTokens } from "@/constants/theme";
import {
  CircleSparkleRegular,
  DocumentOnePageSparkleRegular,
  FlowSparkleRegular,
  SettingsCogMultipleRegular,
} from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";
import Suggestion from "./Suggestion";
import { Typography } from "@/components/ui";
import MessageInput from "./MessageInput";

const suggestions = [
  { label: "Text Assistance", icon: DocumentOnePageSparkleRegular, color: "#7DBBFF" },
  { label: "Process Automation", icon: SettingsCogMultipleRegular, color: "#F1592A" },
  { label: "Schedule Optimization", icon: CircleSparkleRegular, color: "#22C55E" },
  { label: "Smart Response", icon: FlowSparkleRegular, color: "#3B009D" },
];

export default function Assistance() {
  return (
    <Stack
      gap={spacingTokens.lg}
      sx={{
        backgroundColor: "#7DBBFF",
        borderRadius: radiusTokens.xl,
        px: spacingTokens.md,
        py: spacingTokens.lg,
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Typography textAlign="center" variant="h3" fontWeight={400}>
          Hi, Jeho 😃
        </Typography>
        <Typography textAlign="center" variant="h1" fontWeight={600}>
          How can we help you?
        </Typography>
      </Stack>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={spacingTokens.sm}>
        {suggestions.map((item, index) => (
          <Suggestion key={index} {...item} />
        ))}
      </Box>
      <MessageInput></MessageInput>
    </Stack>
  );
}
