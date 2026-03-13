import { ActionButton } from "@/components/shared";
import { Button, Chip, Table, TableBody, TableHead, Typography } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import {
  ArrowTrendingLinesColor,
  CalendarRegular,
  CheckmarkCircleColor,
  CircleRegular,
  CircleSmallFilled,
  CoinMultipleColor,
  DataPieColor,
  DeleteRegular,
  EditRegular,
  MoneyRegular,
  PauseRegular,
  Text12Regular,
} from "@fluentui/react-icons";
import { Stack, TableCell, TableRow, Box } from "@mui/material";
import InsightCard from "./InsightCard";

const adSets = [
  {
    id: "as-1",
    name: "North America - Retargeting",
    status: "Active",
    budget: 1200,
    impressions: 142_800,
    clicks: 5_420,
    spend: 987.35,
    cpc: 0.18,
    cpm: 6.91,
    startDate: "Mar 01, 2026",
    endDate: "Mar 30, 2026",
    optimization: "Link Clicks",
  },
  {
    id: "as-2",
    name: "EMEA - Prospecting",
    status: "Paused",
    budget: 950,
    impressions: 98_200,
    clicks: 3_220,
    spend: 742.1,
    cpc: 0.23,
    cpm: 7.56,
    startDate: "Mar 05, 2026",
    endDate: "Mar 31, 2026",
    optimization: "Conversions",
  },
];

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
const adSetColumns = [
  { label: "Name", icon: Text12Regular },
  { label: "Status", icon: CircleRegular },
  { label: "Budget", icon: MoneyRegular },
  { label: "Impressions", icon: CalendarRegular },
  { label: "Clicks", icon: CalendarRegular },
  { label: "Spend", icon: MoneyRegular },
  { label: "CPC", icon: MoneyRegular },
  { label: "CPM", icon: MoneyRegular },
  { label: "Start Date", icon: CalendarRegular },
  { label: "End Date", icon: CalendarRegular },
  { label: "Optimization", icon: Text12Regular },
  { label: "Actions", icon: CircleRegular, align: "left" },
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

export default function MetaAdCampaignDetailsPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={spacingTokens.md}
      >
        <Typography
          flex={1}
          variant="h1"
          fontWeight={600}
          color="secondary"
          sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}
        >
          Brand Awareness
        </Typography>

        <Chip variant="outlined" color="success" label="Active" icon={<CircleSmallFilled />} />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="end" gap={spacingTokens.sm}>
        <Button startContent={<EditRegular />} color="secondary">
          Edit
        </Button>
        <Button startContent={<PauseRegular />}>Pause</Button>
        <Button startContent={<DeleteRegular />} color="error">
          Delete
        </Button>
      </Stack>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={spacingTokens.lg}
      >
        <InsightCard title="Impressions" value="142,800" icon={DataPieColor} />
        <InsightCard title="Total Clicks" value="5,420" icon={CheckmarkCircleColor} />
        <InsightCard title="Total Spend" value="$987.35" icon={CoinMultipleColor} />
        <InsightCard title="Average CPC" value="$0.18" icon={ArrowTrendingLinesColor} />
      </Box>
      <Typography variant="h1" fontWeight={600} color="secondary">
        Ad Sets
      </Typography>
      <Table>
        <TableHead columns={adSetColumns} />
        <TableBody loading={false} count={adSets.length} span={adSetColumns.length}>
          {adSets.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Chip
                  icon={row.status === "Active" ? <CircleSmallFilled /> : <PauseRegular />}
                  label={row.status}
                  color={row.status === "Active" ? "success" : "warning"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{row.budget}</TableCell>
              <TableCell>{row.impressions}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell>{row.spend}</TableCell>
              <TableCell>{row.cpc}</TableCell>
              <TableCell>{row.cpm}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.optimization}</TableCell>
              <TableCell align="right">
                <Stack direction="row" gap={spacingTokens.sm}>
                  <ActionButton
                    variation="edit"
                    onClick={() => console.log("edit ad set")}
                  ></ActionButton>
                  <ActionButton
                    variation="delete"
                    onClick={() => console.log("delete ad set")}
                  ></ActionButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h1" fontWeight={600} color="secondary">
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
                  icon={row.status === "Active" ? <CircleSmallFilled /> : <PauseRegular />}
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
