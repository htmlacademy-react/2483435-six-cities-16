interface UserGeneral {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

interface User extends UserGeneral {
  email: string;
  token: string;
}

export type { User, UserGeneral };
