import DashboardLayout from "../components/layout/dashboardLayout";
import StatusBar from "../components/requests/statusBar";
import RequestsWrapper from "../components/requests/requestsWrapper";

export default function Home() {
  return (
    <DashboardLayout>
      <main className={`flex min-h-screen flex-col items-center  p-24`}>
        <StatusBar></StatusBar>
        <RequestsWrapper></RequestsWrapper>
      </main>
    </DashboardLayout>
  );
}
