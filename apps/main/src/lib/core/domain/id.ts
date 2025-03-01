export abstract class ID<T = string> {
  constructor(protected _value: T) {}

  get value() {
    return this._value;
  }
}
