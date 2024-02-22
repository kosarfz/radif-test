import DashboardLayout from "../components/layout/dashboardLayout";
import StatusBar from "../components/requests/statusBar";

export default function Home() {
  return (
    <DashboardLayout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <StatusBar></StatusBar>
      </main>
    </DashboardLayout>
  );
}
