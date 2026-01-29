import { radius } from "@/constants/theme";
import { Card as BaseCard } from "@mui/material";

export default function Card({ children, round = "5", ...props }) {
  return (
    <BaseCard {...props} sx={{ borderRadius: radius[round] }}>
      {children}
    </BaseCard>
  );
}
