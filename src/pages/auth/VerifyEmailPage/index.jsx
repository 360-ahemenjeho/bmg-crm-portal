import { AuthSlot } from "@/components/shared";
import { Button, Input } from "@/components/ui";
import { useColor } from "@/contexts/color";
import { useForm } from "@/lib/form";
import { fontSizes } from "@/lib/theme";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { rules } from "./lib";
import { useVerifyEmail } from "@/queries/auth";
import { notification } from "@/lib/notification";

export default function VerifyEmailPage() {
  const [params] = useSearchParams();
  const accountEmail = params.get("account");
  const navigate = useNavigate();
  const { verifyEmail, loading } = useVerifyEmail();

  const { main, fg } = useColor();

  useEffect(() => {
    if (!accountEmail) {
      navigate(-1);
    }
  }, [accountEmail, navigate]);

  const { onBlur, onChange, formData, formErrors, validateForm } = useForm({
    init: {
      email: accountEmail || "",
      otp: "",
    },
    rules: () => rules,
  });

  function resentCode() {
    notification.info("Code resent! Please check your email. 🙂");
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    await verifyEmail({ ...formData, otp_type: "email_verification" });
  }

  return (
    <AuthSlot
      title="Unlock Possibility!"
      subtitle="Enter verification code."
      actions={
        <>
          <Button size="large" onClick={handleSubmit} loading={loading}>
            Submit
          </Button>

          <Box component="p" m={0} p={0} fontSize={fontSizes.caption} color={fg.primary}>
            Need another code?{" "}
            <Box
              component="span"
              fontWeight={500}
              color={main.primary}
              onClick={resentCode}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Resend
            </Box>
          </Box>
        </>
      }
    >
      <Input
        label="Email"
        name="email"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
        disabled
      />
      <Input
        label="Code"
        name="otp"
        type="text"
        value={(name) => formData[name]}
        onChange={(name, value) => onChange(name, value)}
        onBlur={(name, value) => onBlur(name, value)}
        error={(name) => formErrors?.[name]}
      />
    </AuthSlot>
  );
}
