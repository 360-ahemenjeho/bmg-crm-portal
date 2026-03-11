import { Chip, Typography } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { radiusTokens, spacingTokens } from "@/lib/theme";
import { SparkleRegular, TextAsteriskRegular } from "@fluentui/react-icons";
import { Box, Stack } from "@mui/material";

/**
 * @param {Object} props
 * @param {string} props.imageUrl
 * @param {string} props.name
 * @param {string} props.description
 * @param {Array<"hot" | "vital">} [props.tags]
 * @param {() => void} props.onClick
 */
export default function IntegrationCard({ imageUrl, name, description, tags, onClick }) {
  const { theme } = useColor();

  /** @type {Record<string, import("@mui/material").ChipProps["color"]>} */
  const colors = {
    hot: "success",
    vital: "error",
  };

  const icons = {
    hot: SparkleRegular,
    vital: TextAsteriskRegular,
  };

  return (
    <Stack
      component="div"
      gap={spacingTokens.sm}
      onClick={onClick}
      sx={{
        border: `1px solid ${theme === "light" ? "rgba(0, 0, 0, 0.07)" : "rgba(255, 255, 255, 0.07)"}`,
        backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.03)",
        borderRadius: radiusTokens.xl,
        padding: `${spacingTokens.sm} ${spacingTokens.lg}`,
        cursor: "pointer",
        transition: "border 0.35s ease-in-out, background-color 0.35s ease-in-out",
        "&:hover": {
          border: `1px solid ${theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"}`,
          backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)",
        },
      }}
    >
      <Stack direction="row" alignItems="start" justifyContent="space-between">
        <Box component="img" src={imageUrl} height="20px" />
        {tags?.map((tag, index) => {
          const Icon = icons[tag];
          return (
            <Chip key={index} icon={<Icon />} label={tag} color={colors[tag]} variant="outlined" />
          );
        })}
      </Stack>
      <Stack gap={spacingTokens.xs}>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            textDecoration: "underline",
          }}
        >
          {name}
        </Typography>
        <Typography variant="caption" color="secondary" fontWeight={400} lineHeight={1.25}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
