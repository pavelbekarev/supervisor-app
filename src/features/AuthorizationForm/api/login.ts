import type { User, UserAuthorization } from "#entities/User";
import { users } from "#entities/User/model/mock";

export async function login(formData: UserAuthorization): Promise<User | null> {
  //   const { data } = await api.post("/login", formData);
  //   return data;

  return new Promise((resolve) => {
    setTimeout(() => {
      const targetUser = users.find(
        (item) =>
          item.password === formData.password && item.email === formData.email,
      );

      resolve(targetUser ?? null);
    }, 700);
  });
}
