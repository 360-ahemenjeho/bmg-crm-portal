import { spacingTokens } from "@/lib/theme";
import { Divider, Stack } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { Button, Card, Typography } from "@/components/ui";
import AdAccount from "./AdAccount";

export default function Account() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Stack gap={spacingTokens.xs}>
        <Typography variant="h1" fontWeight={600} color="secondary">
          Account 🧑‍💼
        </Typography>
        <Typography color="tertiary">Meta account connected. Manage Ad accounts.</Typography>
      </Stack>

      <ProfileCard
        name="Aondoahemen Abraham"
        active={true}
        imageUrl="/avatar.png"
        connectedDate="23 Dec 2025"
        tokenExpiryDate="17 Aug 2026"
      />
      <Card variant="outlined" round={11}>
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

      <Divider />
      <Stack direction="row" alignItems="center" gap={spacingTokens.md}>
        <Button>Create Ad</Button>
        <Button color="secondary">View Ads</Button>
      </Stack>
    </Stack>
  );
}
