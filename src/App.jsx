"use client"

import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Spin } from "antd"
import { AppShell } from "./layouts/AppShell.jsx"
import { DashboardShell } from "./layouts/DashboardShell.jsx"
import { AuthShell } from "./layouts/AuthShell.jsx"

// Lazy pages
const Home = lazy(() => import("./pages/home/Home.jsx"))
const Overview = lazy(() => import("./pages/dashboard/Overview.jsx"))
const Reports = lazy(() => import("./pages/dashboard/Reports.jsx"))
const Library = lazy(() => import("./pages/dashboard/Library.jsx"))
const Training = lazy(() => import("./pages/dashboard/Training.jsx"))
const Profile = lazy(() => import("./pages/Profile.jsx"))
const NotFound = lazy(() => import("./pages/NotFound.jsx"))

// Reuse existing auth pages
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"

export default function App() {
        return (
    <BrowserRouter>
      <AppShell>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <Spin size="large" />
            </div>
          }
        >
          <Routes>
            {/* Public */}
            <Route element={<AuthShell />}> 
              <Route index element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>

            {/* Protected Dashboard */}
            <Route path="/dashboard" element={<DashboardShell />}> 
              <Route index element={<Overview />} />
              <Route path="reports" element={<Reports />} />
              <Route path="library" element={<Library />} />
              <Route path="training" element={<Training />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* Legacy fallbacks */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  )
}
