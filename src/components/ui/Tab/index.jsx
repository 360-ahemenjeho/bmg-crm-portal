import { Box } from "@mui/material";
import { spacing } from "@/constants/theme";

/**
 * @typedef {Object} PanelProps
 * @property {number} activeTab
 * @property {number} tabKey
 * @property {keyof spacing} [t]
 * @property {import("react").ReactNode} [children]
 */

/**
 * @param {PanelProps} props
 */
export default function Tab({ children, activeTab, tabKey, t = 2 }) {
  return activeTab === tabKey ? <Box mt={t}>{children}</Box> : null;
}
