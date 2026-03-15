import { Box, Stack } from "@mui/material";
import StepCard from "./StepCard";
import { spacingTokens } from "@/lib/theme";
import Connect from "./Connect";
import { useSearchParams } from "react-router-dom";
import Account from "./Account";

export default function MetaAdsAccountPage() {
  const [params] = useSearchParams();
  const isConnected = params.get("connection") === "true";
  const hasDefaultAdAccount = isConnected;

  return (
    <Stack gap={spacingTokens.xl}>
      <Box
        gap={spacingTokens.lg}
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
      >
        <StepCard
          completed={isConnected}
          label="1. Facebook Login"
          iconSrc="/facebook.webp"
          description="Securely authorize your Meta Business account via Facebook's official OAuth flow. We never store your password."
        />
        <StepCard
          completed={hasDefaultAdAccount}
          label="2. Select Ad Account"
          iconSrc="/marketing.webp"
          description="Choose the specific Ads account you'd like to run your campaigns on. If you manage multiple accounts, you can easily switch between them at any time."
        />
        <StepCard
          completed={hasDefaultAdAccount}
          label="3. Start Publishing"
          iconSrc="/congrats.webp"
          description="Launch your ads directly to your selected Ads account with just a few clicks. Track performance and manage your campaigns all from one place."
        />
      </Box>

      {!isConnected && <Connect />}
      {isConnected && <Account />}
    </Stack>
  );
}
