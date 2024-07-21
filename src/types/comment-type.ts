import { UserGeneral } from './user-type';

export interface Comment {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: UserGeneral;
}
