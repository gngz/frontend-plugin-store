import { ID } from './id';
import { ulid } from 'ulid';

export class UID extends ID {
  constructor(initalValue?: string) {
    super(initalValue ?? UID.generate());
  }

  static generate(): string {
    return ulid();
  }
}
