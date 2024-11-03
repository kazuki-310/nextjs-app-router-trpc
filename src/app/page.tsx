import { ClientGreeting } from "./components/client-greeting";
import { ServerGreeting } from "./components/server-greeting";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientGreeting name="Client 1" />

      <ServerGreeting name="Server 1"/>
    </main>
  );
}
