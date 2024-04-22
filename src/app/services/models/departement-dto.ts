/* tslint:disable */
/* eslint-disable */
import { SuperieureH } from '../models/superieure-h';
import { Utilisateur } from '../models/utilisateur';
export interface DepartementDto {
  createdBy?: string;
  createdDate?: string;
  id?: number;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  listEmploye?: Array<Utilisateur>;
  manager?: SuperieureH;
  nom?: string;
}
