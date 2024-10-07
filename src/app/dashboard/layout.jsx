import Autorisation from "./_components/Layout/Autorisation";
import { Header } from "./_components/Layout/Header";
import { Sidebar } from "./_components/Layout/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Autorisation>
          <Sidebar />
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </Autorisation>
      </div>
    </>
  );
}
