import { AdInsightCard } from "@/components/feature";
import { ActionButton, Toolbar } from "@/components/shared";
import { Button, Chip, Table, TableBody, TableHead } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import {
  AddRegular,
  ArrowTrendingLinesColor,
  CalendarRegular,
  CheckmarkCircleColor,
  CircleRegular,
  CircleSmallFilled,
  CoinMultipleColor,
  DataPieColor,
  MoneyRegular,
  StatusRegular,
  Text12Regular,
} from "@fluentui/react-icons";
import { Stack, TableCell, TableRow, Box } from "@mui/material";
import { useCallback, useState } from "react";

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

export default function MetaAdsPage() {
  const [filterValues, setFilterValues] = useState({});

  /** @type {import("@/types/global.d").FilterConfig[]} */
  const filters = [
    { type: "search", key: "query" },
    {
      type: "field",
      key: "field",
      items: [
        {
          label: "Name",
          value: "Name",
          icon: Text12Regular,
        },
        {
          label: "Status",
          value: "status",
          icon: CircleRegular,
        },
      ],
      renderItem: (field) => ({
        label: field.label,
        value: field.value,
        icon: field.icon,
      }),
    },
    {
      type: "select",
      key: "user",
      label: { icon: StatusRegular, label: "Status", accent: "#0078D4" },
      items: [
        { name: "Pending", id: "pending" },
        { name: "Paused", id: "paused" },
        { name: "Active", id: "Active" },
      ],
      renderItem: (user) => ({
        label: user.name,
        value: user.id,
      }),
    },
    { type: "date", fromKey: "dateFrom", toKey: "dateTo" },
  ];

  const handleFilterChange = useCallback(
    (/** @type {string} */ key, /** @type {string} */ value) => {
      setFilterValues((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  return (
    <Stack gap={spacingTokens.xl}>
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

      <Toolbar
        filters={filters}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
        action={<Button startContent={<AddRegular />}>Create Ad</Button>}
      />

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
