import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminOverviewPage, DesignSystemPage } from "@/pages";
import { useColor } from "@/contexts/color";
import { useMemo } from "react";
import { configureDashboardTheme } from "@/themes";

function App() {
  const {
    bg,
    fg,
    border,
    theme: mode,
    scrollbar,
    button,
    input,
    main,
    menu,
    menuItem,
  } = useColor();
  const theme = useMemo(
    () =>
      configureDashboardTheme({
        colors: {
          bg,
          fg,
          border,
          mode,
          scrollbar,
          button,
          input,
          main,
          menu,
          menuItem,
        },
      }),
    [bg, fg, border, mode, scrollbar, button, input, main, menu, menuItem],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/design/system" element={<DesignSystemPage />} />
          <Route path="/overview" element={<AdminOverviewPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
