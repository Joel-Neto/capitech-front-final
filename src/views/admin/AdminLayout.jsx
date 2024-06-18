import { Outlet } from "react-router-dom"
import { AdminHeader } from "../../components/admin/header/AdminHeader"
import { AdminBreadcrumb } from "../../components/admin/breadcrumb/AdminBreadcrumb"

export const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <AdminBreadcrumb />
      <Outlet />
    </div>
  )
}
