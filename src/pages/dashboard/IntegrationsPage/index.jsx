import { AddIntegrationModal, IntegrationCard } from "@/components/feature";
import { Button, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Stack, Box } from "@mui/material";
import { useState } from "react";

const integrations = [
  {
    name: "Gmail",
    imageUrl: "/gmail.webp",
    description: "Connect Gmail to sync and manage your emails directly within your workflow.",
    tags: ["hot"],
    fields: {
      email: { type: "email", required: true },
    },
  },
  {
    name: "Google Calendar",
    imageUrl: "/google-calendar.png",
    description: "Sync your Google Calendar to schedule and manage events seamlessly.",
    tags: ["hot"],
    fields: {
      email: { type: "email", required: true },
      sync_types: {
        type: "multi_choice",
        required: true,
        options: [
          { label: "Task", value: "task" },
          { label: "Call", value: "call" },
          { label: "Meeting", value: "meeting" },
        ],
      },
    },
  },
  {
    name: "WhatsApp",
    imageUrl: "/whatsapp.png",
    description:
      "Integrate WhatsApp Business to communicate with customers without leaving your workspace.",
    tags: ["hot"],
    fields: {
      business_mobile: { type: "text", required: true },
      phone_number_ID: { type: "text", required: true },
      access_token: { type: "text", required: true },
    },
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
    fields: {
      public_key: { type: "text", required: true },
      secret_key: { type: "secret", required: true },
    },
  },
];

export default function IntegrationsPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const [selected, setSelected] = useState(/** @type {typeof integrations[0] | null} */ (null));

  return (
    <>
      <Stack gap={spacingTokens.xl}>
        <Stack direction="row" alignItems="start" justifyContent="space-between">
          <Stack gap={spacingTokens.xs}>
            <Typography color="secondary" fontWeight={600} variant="h2">
              Connect Workflow
            </Typography>
            <Typography color="tertiary" variant="body2" lineHeight={1.25}>
              Manage all your favorite tools and services in one place.
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
              onClick={() => {
                setSelected(integration);
                setOpenAdd(true);
              }}
            />
          ))}
        </Box>
      </Stack>
      {openAdd && selected && (
        <AddIntegrationModal
          open
          onClose={() => {
            setSelected(null);
            setOpenAdd(false);
          }}
          selected={selected}
        />
      )}
    </>
  );
}
