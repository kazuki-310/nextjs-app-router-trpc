import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const greetingRouter = createTRPCRouter({
  clientHello: baseProcedure
    .query(() => {
      return {
        greeting: "client hello world",
      };
    }),
  serverHello: baseProcedure.query(async() => {
    const res = await fetch('http:localhost:3000/api/greeting', {
      cache: 'no-cache',
      next: { tags: ['greeting'] },
    })

    const data = await res.json()

    return {
      greeting: data.test,
    };
  })
});