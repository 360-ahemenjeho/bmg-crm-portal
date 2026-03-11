import { IntegrationCard } from "@/components/feature";
import { Button, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Stack, Box } from "@mui/material";

const integrations = [
  {
    name: "Gmail",
    imageUrl: "/gmail.webp",
    description: "Connect Gmail to sync and manage your emails directly within your workflow.",
    tags: ["hot"],
  },
  {
    name: "Google Calendar",
    imageUrl: "/google-calendar.png",
    description: "Sync your Google Calendar to schedule and manage events seamlessly.",
    tags: ["hot"],
  },
  {
    name: "WhatsApp",
    imageUrl: "/whatsapp.png",
    description:
      "Integrate WhatsApp Business to communicate with customers without leaving your workspace.",
    tags: ["hot"],
  },
  {
    name: "Calendly",
    imageUrl: "/calendly.png",
    description: "Connect Calendly to automate meeting scheduling and avoid back-and-forth emails.",
    tags: ["hot"],
  },
  {
    name: "Paystack",
    imageUrl: "/paystack.png",
    description: "Integrate Paystack to securely receive and manage payments within your platform.",
    tags: ["vital"],
  },
];

export default function IntegrationsPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Stack direction="row" alignItems="start" justifyContent="space-between">
        <Stack gap={spacingTokens.xs}>
          <Typography color="secondary" fontWeight={600} variant="h2">
            Connect Workflow
          </Typography>
          <Typography color="tertiary" variant="body2" lineHeight={1.25}>
            Connect and manage all your favorite tools and services in one place.
          </Typography>
        </Stack>
        <Button>Connections</Button>
      </Stack>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(4, 1fr)" }}
        gap={spacingTokens.md}
      >
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.name}
            name={integration.name}
            imageUrl={integration.imageUrl}
            description={integration.description}
            tags={/** @type {any} */ (integration.tags)}
          />
        ))}
      </Box>
    </Stack>
  );
}
