import type { User } from "./types";

export function mapUserToDropdown(user: User) {
  return {
    id: user.id,
    label: user.name,
  };
}
