import { AdInsightCard } from "@/components/feature";
import { ActionButton } from "@/components/shared";
import { Chip, Table, TableBody, TableHead, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import {
  ArrowTrendingLinesColor,
  CalendarRegular,
  CheckmarkCircleColor,
  CircleRegular,
  CircleSmallFilled,
  CoinMultipleColor,
  DataPieColor,
  MoneyRegular,
  Text12Regular,
} from "@fluentui/react-icons";
import { TableCell, TableRow, Box, Stack } from "@mui/material";
import Toolbar from "./Toolbar";

const ads = [
  {
    id: "ad-1",
    name: "Video - Spring Sale",
    status: "Active",
    adSet: "North America - Retargeting",
    impressions: 65_000,
    clicks: 2_300,
    ctr: "3.54%",
    spend: 425.3,
    cpc: 0.18,
  },
  {
    id: "ad-2",
    name: "Carousel - New Arrivals",
    status: "Active",
    adSet: "North America - Retargeting",
    impressions: 77_800,
    clicks: 3_120,
    ctr: "4.01%",
    spend: 562.0,
    cpc: 0.18,
  },
  {
    id: "ad-3",
    name: "Image - Spring Launch",
    status: "Paused",
    adSet: "EMEA - Prospecting",
    impressions: 98_200,
    clicks: 3_220,
    ctr: "3.28%",
    spend: 742.1,
    cpc: 0.23,
  },
];

/** @type {Array<import("@/types/global.d").TableColumn>} */
const adColumns = [
  { label: "Name", icon: Text12Regular },
  { label: "Status", icon: CircleRegular },
  { label: "Ad Set", icon: Text12Regular },
  { label: "Impressions", icon: CalendarRegular },
  { label: "Clicks", icon: CalendarRegular },
  { label: "CTR", icon: Text12Regular },
  { label: "Spend", icon: MoneyRegular },
  { label: "CPC", icon: MoneyRegular },
  { label: "Actions", icon: CircleRegular, align: "left" },
];

export default function MetaAdSetPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Toolbar />

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={spacingTokens.lg}
      >
        <AdInsightCard title="Impressions" value="142,800" icon={DataPieColor} />
        <AdInsightCard title="Total Clicks" value="5,420" icon={CheckmarkCircleColor} />
        <AdInsightCard title="Total Spend" value="$987.35" icon={CoinMultipleColor} />
        <AdInsightCard title="Average CPC" value="$0.18" icon={ArrowTrendingLinesColor} />
      </Box>

      <Typography variant="h2" fontWeight={600} color="secondary">
        Ads
      </Typography>
      <Table>
        <TableHead columns={adColumns} />
        <TableBody loading={false} count={ads.length} span={adColumns.length}>
          {ads.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Chip
                  icon={<CircleSmallFilled />}
                  label={row.status}
                  color={row.status === "Active" ? "success" : "warning"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{row.adSet}</TableCell>
              <TableCell>{row.impressions}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell>{row.ctr}</TableCell>
              <TableCell>{row.spend}</TableCell>
              <TableCell>{row.cpc}</TableCell>
              <TableCell align="right">
                <Stack direction="row" gap={spacingTokens.sm}>
                  <ActionButton
                    variation="edit"
                    onClick={() => console.log("edit ad")}
                  ></ActionButton>
                  <ActionButton
                    variation="delete"
                    onClick={() => console.log("delete ad")}
                  ></ActionButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
