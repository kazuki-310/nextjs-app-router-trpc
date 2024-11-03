import { createTRPCRouter } from "./init";
import { greetingRouter } from "./routers/greeting/greeting";

export const appRouter = createTRPCRouter({
  greeting: greetingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;