import { z } from "zod";
import { homeTRPCRouter, publicProcedure } from "Y/server/api/trpc";

const idSchema = z.object({ id: z.string() });

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
});

const userUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export const homeRouter = homeTRPCRouter({
  //get all users
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

});