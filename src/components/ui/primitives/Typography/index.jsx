import { useColor } from "@/contexts/color";
import { Typography as BaseTypography } from "@mui/material";

export default function Typography({ children, fg, ...props }) {
  const { fg: _fg } = useColor();

  const fgColor = {
    primary: _fg.primary,
    secondary: _fg.secondary,
    tertiary: _fg.tertiary,
  };

  return (
    <BaseTypography
      {...props}
      sx={{
        color: fgColor[fg],
      }}
    >
      {children}
    </BaseTypography>
  );
}
