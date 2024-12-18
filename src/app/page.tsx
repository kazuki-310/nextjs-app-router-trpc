import { ClientGreeting } from "./components/client-greeting";
import { ServerGreeting } from "./components/server-greeting";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientGreeting />

      <ServerGreeting />
    </main>
  );
}
