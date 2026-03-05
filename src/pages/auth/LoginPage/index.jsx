import { Button, Input, Typography } from "@/components/ui";
import { fontSizes, spacingTokens } from "@/lib/theme";
import { useColor } from "@/contexts/color";
import { Box, Stack } from "@mui/material";
import { useForm } from "@/lib/form";
import { rules } from "./lib";
import { useSearchParams } from "react-router-dom";
import { useLogin } from "@/queries/auth";
import { useNotification } from "@/contexts/notification";

export default function LoginPage() {
  const [params] = useSearchParams();
  const otpEnabled = params.get("otp_enabled");

  const notify = useNotification();
  const { fg, main } = useColor();
  const { isPending, mutateAsync } = useLogin();

  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      email: "",
      password: "",
      otp: "",
    },
    rules: () => rules({ otpEnabled: !!otpEnabled && otpEnabled === "true" }),
  });

  async function handleSubmit() {
    notify.error("Something went wrong");
    if (!validateForm()) return;
    mutateAsync(formData);
  }

  return (
    <>
      <Box>
        <Typography variant="h1" lineHeight={1.5} fontWeight={500}>
          Sell Smarter. Connect Better.
        </Typography>
        <Typography color="secondary" fontWeight={300} variant="h3" lineHeight={1.25}>
          Your deals, contacts, and insights are waiting.
        </Typography>
      </Box>
      <Stack gap={spacingTokens.md}>
        <Input
          label="Email"
          name="email"
          value={(name) => formData[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
          error={(name) => formErrors?.[name]}
        />

        <Input
          label="Password"
          name="password"
          value={(name) => formData[name]}
          onChange={(name, value) => onChange(name, value)}
          onBlur={(name, value) => onBlur(name, value)}
          error={(name) => formErrors?.[name]}
        />

        <Button size="large" loading={isPending} onClick={handleSubmit}>
          Submit
        </Button>

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
    </>
  );
}
