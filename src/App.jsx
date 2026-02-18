import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminOverviewPage, DesignSystemPage } from "@/pages";
import { useColor } from "@/contexts/color";
import { useMemo } from "react";
import { configureDashboardTheme } from "@/themes";

function App() {
  const colors = useColor();
  const theme = useMemo(
    () =>
      configureDashboardTheme({
        colors,
      }),
    [colors],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/design/system" element={<DesignSystemPage />} />
          <Route path="/" element={<AdminOverviewPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
