import { Button, Chip, Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { spacingTokens } from "@/lib/theme";
import {
  ArrowLeftRegular,
  CircleSmallFilled,
  DeleteRegular,
  DiversityRegular,
  EditRegular,
  SavingsRegular,
} from "@fluentui/react-icons";
import { Stack } from "@mui/material";

export default function Toolbar() {
  const { fg } = useColor();

  const details = [
    { label: "Awareness", icon: DiversityRegular },
    { label: "$200.34", icon: SavingsRegular },
  ];

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "start", md: "center" }}
      gap={spacingTokens.lg}
    >
      <Stack flex={1} direction="row" alignItems="center" gap={spacingTokens.md}>
        <Button color="secondary" icon size="small" round="full">
          <ArrowLeftRegular fontSize={18} />
        </Button>
        <Stack>
          <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
            <Typography
              variant="h3"
              fontWeight={600}
              sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}
            >
              Conference Awareness
            </Typography>
            <Chip variant="outlined" color="success" label="Active" icon={<CircleSmallFilled />} />
          </Stack>
          <Stack direction="row" alignItems="center" gap={spacingTokens.md}>
            {details.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <Stack key={index} direction="row" alignItems="center" gap={spacingTokens.sm}>
                  <Icon color={fg.primary} />
                  <Typography variant="caption" color="secondary">
                    {detail.label}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
        <Button color="secondary" startContent={<EditRegular />}>
          Edit
        </Button>
        <Button startContent={<DeleteRegular />} color="error">
          Delete
        </Button>
      </Stack>
    </Stack>
  );
}
