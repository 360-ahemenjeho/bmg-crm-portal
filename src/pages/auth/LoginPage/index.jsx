import { Button, Input, Typography } from "@/components/ui";
import { fontSizes, spacingTokens } from "@/constants/theme";
import { useColor } from "@/contexts/color";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const { fg, main } = useColor();
  const [formData, setFormData] = useState(
    /** @type {any} */ ({
      email: "",
      password: "",
    }),
  );

  const [formErrors, setFormErrors] = useState(/** @type {any} */ ({}));

  return (
    <Stack gap={spacingTokens.md}>
      <Input
        label="Email"
        name="email"
        value={(name) => formData[name]}
        onChange={(name, value) => console.log(name, value)}
        onBlur={(name, value) => console.log(name, value)}
        error={(name) => formErrors?.[name]}
      />

      <Input
        label="Password"
        name="password"
        value={(name) => formData[name]}
        onChange={(name, value) => console.log(name, value)}
        onBlur={(name, value) => console.log(name, value)}
        error={(name) => formErrors?.[name]}
      />

      <Button size="large">Submit</Button>

      <Box component="p" m={0} p={0} fontSize={fontSizes.caption} color={fg.primary}>
        Forgot Password?{" "}
        <Box
          component="span"
          fontWeight={500}
          color={main.primary}
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Reset
        </Box>
      </Box>
    </Stack>
  );
}
