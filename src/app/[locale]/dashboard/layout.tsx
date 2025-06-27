import "../globals.css";
import Navbar from "@/components/Dashnavbar";
import Sidebar from "@/components/Dashsidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full">
        <Navbar />
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
}
