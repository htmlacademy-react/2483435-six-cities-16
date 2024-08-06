interface UserGeneral {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

interface User extends UserGeneral {
  email: string;
  token: string;
}

type AuthData = {
  login: string;
  password: string;
}

type AuthType = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';
export type { User, UserGeneral, AuthData, AuthType };
