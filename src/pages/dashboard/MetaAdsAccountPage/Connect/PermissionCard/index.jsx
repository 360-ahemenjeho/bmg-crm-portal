import { Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { spacingTokens } from "@/lib/theme";
import { CheckmarkCircleFilled } from "@fluentui/react-icons";
import { Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.permission
 * @param {string} props.description
 * @param {boolean} [props.granted]
 * @param {import("@/types/global.d").Icon} props.icon
 * @param {boolean} [props.noBorder]
 */
export default function PermissionCard({
  permission,
  description,
  granted = true,
  icon: Icon,
  noBorder = false,
}) {
  const { main, fg, border } = useColor();

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={spacingTokens.lg}
      sx={{
        px: spacingTokens.xl,
        py: spacingTokens.md,
        borderBottom: noBorder ? "none" : `1px solid ${border.faint}`,
      }}
    >
      <Icon fontSize={26} />
      <Stack gap={spacingTokens.xs} flex={1}>
        <Typography fontWeight={500} lineHeight={1}>
          {permission}
        </Typography>
        <Typography variant="caption" color="secondary">
          {description}
        </Typography>
      </Stack>
      <CheckmarkCircleFilled fontSize={20} color={granted ? main.success : fg.disabled} />
    </Stack>
  );
}
