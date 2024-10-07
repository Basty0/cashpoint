import PresPages from "./_components/PresPages";
export default function Dashboard() {
  const date = new Date().toISOString().split("T")[0];
  return (
    <>
      <PresPages date={date} />
    </>
  );
}
