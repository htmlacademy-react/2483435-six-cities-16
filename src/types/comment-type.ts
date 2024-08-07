import { UserGeneral } from './user-type';

export interface Comment {
  id: string;
  date: string;
  user: UserGeneral;
  comment: string;
  rating: number;
}
