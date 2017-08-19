/**
 * Generic View Component
 */
import * as React from "react";

export class View<T, U> {
  public static of: <V, W>(u: W) => View<V, W> = of;

  constructor(public readonly g: (a: T) => U) {}

  public fold(t: T): U {
    return this.g(t);
  }

  public of<T2, V>(v: V): View<T2, V> {
    return of(v);
  }

  public map<V>(f: (u: U) => V): View<T, V> {
    return new View((t: T) => f(this.fold(t)));
  }

  public contramap<V>(f: (a: T) => T): View<T, U> {
    return new View((t: T) => this.fold(f(t)));
  }

  public concat(other: View<T, U>): View<T, JSX.Element> {
    return new View((t: T) =>
      <div>
        {this.fold(t)} {other.fold(t)}
      </div>
    );
  }
}

export function of<T, U>(u: U): View<T, U> {
  return new View((t: T) => u);
}

// tslint:disable-next-line:export-name no-default-export
export default Object.assign(View.prototype);
