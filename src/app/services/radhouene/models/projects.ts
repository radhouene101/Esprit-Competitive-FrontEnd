/* tslint:disable */
/* eslint-disable */
import { Contest } from '../models/contest';
export interface Projects {
  classe?: string;
  coach?: string;
  contest?: Contest;
  date?: string;
  groupName?: string;
  groupStreak?: number;
  id?: number;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  nominated?: boolean;
  numberOfVotes?: number;
  scolarYear?: string;
  votingpool?: boolean;
  winner?: boolean;
}
