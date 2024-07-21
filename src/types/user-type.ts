interface UserGeneral {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

interface User extends UserGeneral {
  email: string;
  token: string;
}

export type { User, UserGeneral };
