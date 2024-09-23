import { Document, ObjectId } from 'mongodb';
import { Character } from '../../../Shared/models';

export interface CharacterDB extends Document, Character {
  _id: ObjectId;
}