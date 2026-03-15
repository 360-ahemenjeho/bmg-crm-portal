import { Card, Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { spacingTokens } from "@/lib/theme";
import { CheckmarkCircleFilled } from "@fluentui/react-icons";
import { Stack, Box } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.iconSrc
 * @param {string} props.description
 * @param {boolean} [props.completed]
 * @param {() => void} [props.onClick]
 */
export default function StepCard({ label, iconSrc, description, completed = false, onClick }) {
  const { main } = useColor();

  return (
    <Stack
      component={Card}
      gap={spacingTokens.md}
      onClick={onClick}
      sx={{
        padding: `${spacingTokens.sm} ${spacingTokens.lg}`,
      }}
    >
      <Stack direction="row" alignItems="start" justifyContent="space-between">
        <Box component="img" src={iconSrc} height="30px" />
        {completed && <CheckmarkCircleFilled fontSize={20} color={main.success} />}
      </Stack>
      <Stack gap={spacingTokens.xs}>
        <Typography fontWeight={600}>{label}</Typography>
        <Typography variant="caption" color="secondary" lineHeight={1.5}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
