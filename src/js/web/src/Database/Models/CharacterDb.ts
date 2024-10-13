import { Character } from '@Models/Character/Character';
import { Document, ObjectId } from 'mongodb';

export interface CharacterDB extends Document, Character {
  _id: ObjectId;
}