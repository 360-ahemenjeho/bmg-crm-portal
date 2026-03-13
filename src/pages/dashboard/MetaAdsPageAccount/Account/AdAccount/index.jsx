import { Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { spacingTokens } from "@/lib/theme";
import {
  CheckmarkCircleFilled,
  FlagRegular,
  GlobeRegular,
  NumberSymbolRegular,
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.id
 * @param {string} props.currency
 * @param {string} props.location
 * @param {boolean} [props.status]
 * @param {boolean} [props.noBorder]
 * @param {() => void} [props.onClick]
 */
export default function AdAccount({
  name,
  id,
  currency,
  location,
  status = false,
  noBorder = false,
  onClick,
}) {
  const { main, fg, border } = useColor();

  const details = [
    { icon: NumberSymbolRegular, value: id },
    { icon: FlagRegular, value: currency },
    { icon: GlobeRegular, value: location },
  ];

  return (
    <Stack
      component="div"
      onClick={onClick}
      gap={spacingTokens.xs}
      sx={{
        px: spacingTokens.xl,
        py: spacingTokens.md,
        borderBottom: noBorder ? "none" : `1px solid ${border.faint}`,
        cursor: "pointer",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography flex={1} fontWeight={500} lineHeight={1} sx={{ textOverflow: "ellipsis" }}>
          {name}
        </Typography>
        <CheckmarkCircleFilled
          fontSize={20}
          color={status ? main.success : fg.disabled}
          style={{ flexShrink: 0 }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" gap={spacingTokens.md}>
        {details.map((item, index) => {
          const Icon = item.icon;
          return (
            <Stack key={index} direction="row" alignItems="center" gap={spacingTokens.sm}>
              <Icon fontSize={16} color={fg.tertiary} />
              <Typography color="secondary" variant="caption">
                {item.value}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
