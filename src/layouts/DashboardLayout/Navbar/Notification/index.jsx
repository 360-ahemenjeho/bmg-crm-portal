import { useColor } from "@/contexts/color";
import { AlertRegular } from "@fluentui/react-icons";
import { Box } from "@mui/material";

export default function Notification({ count = 7 }) {
  const { main } = useColor();
  return (
    <Box sx={{ position: "relative" }}>
      <AlertRegular fontSize={24} style={{ display: "block" }} />
      {count > 0 && (
        <Box
          sx={{
            position: "absolute",
            height: "20px",
            width: "20px",
            borderRadius: "999px",
            top: "-5px",
            right: "-5px",
            backgroundColor: main.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "9px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 0,
          }}
        >
          {count < 99 ? count : "99+"}
        </Box>
      )}
    </Box>
  );
}
