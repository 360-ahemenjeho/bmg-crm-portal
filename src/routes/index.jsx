import { AuthLayout, DashboardLayout, SettingsLayout } from "@/layouts";
import { useCheckPublicRoute } from "@/lib/route";
import { ResetPasswordPage, LoginPage, RegisterPage, VerifyEmailPage } from "@/pages/auth";
import {
  AdminOverviewPage,
  CompaniesPage,
  MetaAdsAccountPage,
  CustomerOverviewPage,
  DesignSystemPage,
  IntegrationsPage,
  PlatformAdminsPage,
  TasksPage,
  MetaAdCampaignsPage,
  MetaAdCampaignDetailsPage,
  MetaAdSetPage,
  MetaAdsPage,
} from "@/pages/dashboard";
import { CompanyAccountPage, VendorAccountPage } from "@/pages/settings";
import { useAuthStore } from "@/store/auth";
import { Routes as BaseRoutes, Route } from "react-router-dom";

export default function Routes() {
  const { permission } = useAuthStore.getState();
  const isPublicRoute = useCheckPublicRoute();
  // const ROLE = permission?.role_name;
  const ROLE = "WORKSPACE_USER";

  const routes = (
    <BaseRoutes>
      <Route element={<DashboardLayout />}>
        <Route path="/design/system" element={<DesignSystemPage />} />
        {/* PLATFORM SUPER ADMIN */}
        {ROLE == "PLATFORM_ADMIN" && (
          <>
            <Route path="/" element={<AdminOverviewPage />} />
            <Route path="/admins" element={<PlatformAdminsPage />} />
          </>
        )}

        {ROLE == "WORKSPACE_USER" && (
          <>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/" element={<CustomerOverviewPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/meta-ads/account" element={<MetaAdsAccountPage />} />
            <Route path="/meta-ads/campaigns" element={<MetaAdCampaignsPage />} />
            <Route path="/meta-ads/campaign/:id/details" element={<MetaAdCampaignDetailsPage />} />
            <Route path="/meta-ads/set/:id/details" element={<MetaAdSetPage />} />
            <Route path="/meta-ads/all" element={<MetaAdsPage />} />
          </>
        )}
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password/reset" element={<ResetPasswordPage />} />
        <Route path="/email/verification" element={<VerifyEmailPage />} />
      </Route>

      <Route element={<SettingsLayout />}>
        <>
          <Route path="/settings/account" element={<VendorAccountPage />} />
          <Route path="/settings/company/general" element={<CompanyAccountPage />} />
        </>
      </Route>
    </BaseRoutes>
  );

  // return isPublicRoute ? routes : <AuthMiddleware>{routes}</AuthMiddleware>;
  return routes;
}
