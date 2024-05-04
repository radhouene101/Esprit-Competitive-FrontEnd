/* tslint:disable */
/* eslint-disable */
import { CategoryProjects } from '../models/category-projects';
import { ContestDto } from '../models/contest-dto';
import { Option } from '../models/option';
export interface ProjectsDto {
  category?: CategoryProjects;
  classe?: string;
  coach?: string;
  contest?: ContestDto;
  date?: string;
  groupName?: string;
  groupStreak?: number;
  id?: number;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  nominated?: boolean;
  numberOfVotes?: number;
  optionSpeciality?: Option;
  scolarYear?: string;
  userId?: number;
  votingpool?: boolean;
  winner?: boolean;
}
