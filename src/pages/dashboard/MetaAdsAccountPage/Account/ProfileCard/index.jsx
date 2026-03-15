import { Avatar, Button, Card, Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { spacingTokens } from "@/lib/theme";
import {
  CheckmarkStarburstFilled,
  DismissCircleFilled,
  FlashRegular,
  DeleteRegular,
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.imageUrl
 * @param {boolean} [props.active]
 * @param {string} props.connectedDate
 * @param {string} props.tokenExpiryDate
 */
export default function ProfileCard({
  name,
  imageUrl,
  active = true,
  connectedDate,
  tokenExpiryDate,
}) {
  const { main } = useColor();

  const details = [
    { label: "Connected", value: connectedDate },
    { label: "Token Expires", value: tokenExpiryDate },
  ];

  return (
    <Card round={11}>
      <Stack
        gap={spacingTokens.lg}
        py={{ xs: spacingTokens.md, md: spacingTokens.lg }}
        px={{ xs: spacingTokens.lg, md: spacingTokens.xl }}
      >
        <Stack alignItems="center" justifyContent="center" gap={spacingTokens.sm}>
          <Avatar size={60} name={name} imageUrl={imageUrl} />
          <Stack direction="row" alignItems="center" justifyContent="center" gap={spacingTokens.xs}>
            <Typography fontWeight={500}>{name}</Typography>
            {active ? (
              <CheckmarkStarburstFilled fontSize={18} color={main.success} />
            ) : (
              <DismissCircleFilled fontSize={18} color={main.error} />
            )}
          </Stack>
        </Stack>

        <Stack direction="row" gap={spacingTokens.sm} justifyContent="center">
          <Button startContent={<FlashRegular />}>Refresh</Button>
          <Button startContent={<DeleteRegular />} color="error">
            Disconnect
          </Button>
        </Stack>

        {details.map((item, index) => (
          <Stack key={index} direction="row" alignItems="center" justifyContent="space-between">
            <Typography color="tertiary" variant="caption" sx={{ whiteSpace: "nowrap" }}>
              {item.label}
            </Typography>
            <Typography
              color="primary"
              variant="caption"
              fontWeight={500}
              sx={{ whiteSpace: "nowrap" }}
            >
              {item.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
