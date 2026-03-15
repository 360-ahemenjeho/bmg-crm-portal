import { Button, Card, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import { Box, Stack } from "@mui/material";
import PermissionCard from "./PermissionCard";
import {
  MegaphoneLoudColor,
  PeopleListColor,
  BuildingMultipleColor,
  BuildingStoreColor,
  FlashRegular,
} from "@fluentui/react-icons";
import { useSearchParams } from "react-router-dom";

export default function Connect() {
  const [_params, setParams] = useSearchParams();

  return (
    <Stack gap={spacingTokens.xl}>
      <Box>
        <Typography variant="h1" fontWeight={600} color="secondary">
          Permissions
        </Typography>
        <Typography color="tertiary">
          We only request essential permissions to manage your ads.
        </Typography>
      </Box>
      <Card round={11}>
        <PermissionCard
          permission="ads_management"
          description="Create and manage your ad campaigns"
          icon={MegaphoneLoudColor}
        />
        <PermissionCard
          permission="ads_read"
          description="Read ads performance and analysis"
          icon={PeopleListColor}
        />
        <PermissionCard
          permission="business_management"
          description="Access your business manager"
          icon={BuildingMultipleColor}
        />
        <PermissionCard
          permission="pages_show_list"
          description="List your connected facebook pages"
          icon={BuildingStoreColor}
          noBorder
        />
      </Card>

      <Box>
        <Button
          size="large"
          className="rect"
          startContent={<FlashRegular />}
          onClick={() => {
            setParams({ connection: "true" });
          }}
        >
          Connect
        </Button>
      </Box>
    </Stack>
  );
}
