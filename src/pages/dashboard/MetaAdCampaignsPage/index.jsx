import { ActionButton, Toolbar } from "@/components/shared";
import { Button, Chip, Table, TableBody, TableHead } from "@/components/ui";
import { spacingTokens } from "@/lib/theme";
import {
  AddRegular,
  ArrowTrendingLinesRegular,
  ArrowTrendingRegular,
  CalendarRegular,
  CircleRegular,
  CircleSmallFilled,
  CursorRegular,
  DiversityRegular,
  MegaphoneCircleRegular,
  MegaphoneLoudRegular,
  MoneyRegular,
  PauseRegular,
  TargetRegular,
  Text12Regular,
} from "@fluentui/react-icons";
import { Stack, TableCell, TableRow } from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const campaigns = [
  {
    name: "Brand Awareness",
    date: "Mar 11, 2026",
    status: "Active",
    objective: "Awareness",
    budget: 500,
    impressions: 12400,
    clicks: 320,
    spent: 148.75,
    ads: 0,
    adSets: 1,
  },
  {
    name: "Brand Awareness",
    date: "Mar 11, 2026",
    status: "Paused",
    objective: "Awareness",
    budget: 300,
    impressions: 8750,
    clicks: 210,
    spent: 95.4,
    ads: 0,
    adSets: 1,
  },
  {
    name: "Testing",
    date: "Mar 11, 2026",
    status: "Paused",
    objective: "Awareness",
    budget: 100,
    impressions: 3200,
    clicks: 85,
    spent: 42.0,
    ads: 0,
    adSets: 1,
  },
  {
    name: "Testing",
    date: "Mar 11, 2026",
    status: "Paused",
    objective: "Awareness",
    budget: 150,
    impressions: 4100,
    clicks: 97,
    spent: 60.2,
    ads: 0,
    adSets: 1,
  },
  {
    name: "Testing",
    date: "Mar 11, 2026",
    status: "Paused",
    objective: "Awareness",
    budget: 200,
    impressions: 5600,
    clicks: 130,
    spent: 78.9,
    ads: 0,
    adSets: 1,
  },
];

/** @type {Array<import("@/types/global.d").TableColumn>} */
const columns = [
  { label: "Name", icon: Text12Regular },
  { label: "Date", icon: CalendarRegular },
  { label: "Status", icon: CircleRegular },
  { label: "Objective", icon: TargetRegular },
  { label: "Impressions", icon: ArrowTrendingRegular },
  { label: "Budget", icon: ArrowTrendingLinesRegular },
  { label: "Clicks", icon: CursorRegular },
  { label: "Spent", icon: MoneyRegular },
  { label: "Ads", icon: MegaphoneLoudRegular },
  { label: "Ad Sets", icon: MegaphoneCircleRegular },
  { label: "Action", icon: CircleRegular, align: "left" },
];

export default function MetaAdCampaignsPage() {
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState({});

  /** @type {import("@/types/global.d").FilterConfig[]} */
  const filters = [
    { type: "search", key: "query" },
    {
      type: "field",
      key: "field",
      items: [
        {
          label: "Date From",
          value: "date_from",
          icon: CalendarRegular,
        },
        {
          label: "Date To",
          value: "date_to",
          icon: CalendarRegular,
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
      key: "objective",
      label: { icon: DiversityRegular, label: "Objective", accent: "#0078D4" },
      items: [
        { name: "Awareness", id: "1" },
        { name: "Engagement", id: "2" },
        { name: "Traffic", id: "3" },
        { name: "Convertions", id: "4" },
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
      <Toolbar
        filters={filters}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
        action={<Button startContent={<AddRegular />}>Campaign</Button>}
      />
      <Table>
        <TableHead columns={columns}></TableHead>
        <TableBody loading={false} count={campaigns.length} span={columns.length}>
          {campaigns.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip
                  icon={row.status == "Active" ? <CircleSmallFilled /> : <PauseRegular />}
                  label={row.status}
                  color={row.status == "Active" ? "success" : "warning"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{row.objective}</TableCell>
              <TableCell>{row.budget}</TableCell>
              <TableCell>{row.impressions}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell>{row.spent}</TableCell>
              <TableCell>{row.ads}</TableCell>
              <TableCell>{row.adSets}</TableCell>
              <TableCell align="right">
                <Stack direction="row" gap={spacingTokens.sm}>
                  <ActionButton variation="edit" onClick={() => console.log("null")}></ActionButton>
                  <ActionButton
                    variation="preview"
                    onClick={() => {
                      navigate("/meta-ads/campaign/2/details");
                    }}
                  ></ActionButton>
                  <ActionButton
                    variation="delete"
                    onClick={() => console.log("null")}
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
