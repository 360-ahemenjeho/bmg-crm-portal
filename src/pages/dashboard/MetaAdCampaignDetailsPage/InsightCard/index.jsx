import { Card, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {import("@/types/global.d").Icon} props.icon
 */
export default function InsightCard({ title, value, icon: Icon }) {
  return (
    <Card>
      <Stack gap={spacingTokens.md} alignItems="start" py={spacingTokens.md} px={spacingTokens.lg}>
        <Icon fontSize={22} />
        <Stack gap={spacingTokens.xs}>
          <Typography fontWeight={500}>{title}</Typography>
          <Typography color="secondary" variant="caption" sx={{ textOverflow: "ellipsis" }}>
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
