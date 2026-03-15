import { spacingTokens } from "@/lib/theme";
import { Box, Stack } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { Button, Card, Typography } from "@/components/ui";
import AdAccount from "./AdAccount";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  return (
    <Stack gap={spacingTokens.xl}>
      <Box>
        <Typography variant="h1" fontWeight={600} color="secondary" textAlign="center">
          Account
        </Typography>
        <Typography color="tertiary" textAlign="center">Meta account connected. Manage Ad accounts.</Typography>
      </Box>

      <ProfileCard
        name="Aondoahemen Abraham"
        active={true}
        imageUrl="/avatar.png"
        connectedDate="23 Dec 2025"
        tokenExpiryDate="17 Aug 2026"
      />
      <Card round={11}>
        <AdAccount
          name="Jehoshaphat Aondoahemen"
          id="123456789"
          currency="USD"
          location="Newvork, USA"
          status={true}
          onClick={() => alert("Account selected!")}
        />
        <AdAccount
          name="Jane Doe"
          id="987654321"
          currency="EUR"
          location="Berlin, Germany"
          status={false}
          onClick={() => alert("Account selected!")}
        />
        <AdAccount
          name="John Smith"
          id="555555555"
          currency="GBP"
          location="London, UK"
          status={true}
          onClick={() => alert("Account selected!")}
        />

        <AdAccount
          name="Aondoahemen Abraham"
          id="123456789"
          currency="NGN"
          location="Abujah, Nigeria"
          status={false}
          noBorder
          onClick={() => alert("Account selected!")}
        />
      </Card>

      <Stack direction="row" alignItems="center" justifyContent="center" gap={spacingTokens.md}>
        <Button
          onClick={() => {
            navigate("/meta-ads/all");
          }}
        >
          Create Ad
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            navigate("/meta-ads/campaigns");
          }}
        >
          View Ads
        </Button>
      </Stack>
    </Stack>
  );
}
