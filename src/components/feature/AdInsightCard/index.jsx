import { Card, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Box, Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {import("@/types/global.d").Icon} props.icon
 */
export default function AdInsightCard({ title, value, icon: Icon }) {
  return (
    <Card>
      <Stack gap={spacingTokens.sm} alignItems="start" py={spacingTokens.sm} px={spacingTokens.lg}>
        <Icon fontSize={22} />
        <Box>
          <Typography fontWeight={500}>{title}</Typography>
          <Typography color="secondary" variant="caption" sx={{ textOverflow: "ellipsis" }}>
            {value}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
