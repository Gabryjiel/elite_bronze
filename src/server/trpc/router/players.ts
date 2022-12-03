import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import countBy from "lodash/countBy";
import { getIcon } from "../../../utils/image-urls";
import { getUserChampion } from "../../common/users/get-user-champion";

export const playersRouter = router({
  getUsers: publicProcedure
    .input(z.object({ search: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const result = await ctx.prisma.user.findMany({
        select: {
          id: true,
          login: true,
        },
        orderBy: {
          login: 'asc',
        }
      });

      const mappedResult = await Promise.all(result.map(async (user) => {
        const champion = await getUserChampion(ctx.prisma, user.id);

        return {
          userId: user.id,
          name: user.login,
          champion: champion.name,
          iconUrl: getIcon(champion.name),
            
        }
      }));

      return mappedResult;
    })
})