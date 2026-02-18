import {
  DiversityRegular,
  GlanceRegular,
  PeopleRegular,
  SettingsRegular,
} from "@fluentui/react-icons";

/** @typedef {import("@/types/global.d.js").NavItem} NavItemProps */

export function useNavigationMenu() {
  const role = "admin";

  /**
   * @type {{
   *  admin?: NavItemProps[],
   *  customer?: NavItemProps[]
   * }}
   */
  const menu = {
    admin: [
      { label: "Overview", path: "/overview", icon: GlanceRegular },
      { label: "Users", path: "/users", icon: PeopleRegular },
      {
        label: "Category",
        path: "/category",
        icon: DiversityRegular,
        sub: [
          { label: "Sub Category", path: "/category/sub-category", icon: DiversityRegular },
          { label: "Add Category", path: "/category/add-category", icon: DiversityRegular },
        ],
      },
      { label: "Settings", path: "/settings", icon: SettingsRegular },
    ],
  };

  return menu[role] || [];
}
