/**
 * Generic View Component
 */
import * as React from "react";

export class View<A, B> {
  public static of: <V, W>(u: W) => View<V, W> = of;

  constructor(public readonly g: (a: A) => B) {}

  public fold: (t: A) => B = this.g;

  public of<T2, V>(v: V): View<T2, V> {
    return of(v);
  }

  public map<B2>(f: (a: B) => B2): View<A, B2> {
    return new View(a => f(this.g(a)));
  }

  public contramap<B2>(f: (b: B2) => A): View<B2, B> {
    return new View(a => this.g(f(a)));
  }

  public concat(other: View<A, B>): View<A, JSX.Element> {
    return new View((a: A) =>
      <div>
        {this.fold(a)} {other.fold(a)}
      </div>
    );
  }
}

export function of<T, U>(u: U): View<T, U> {
  return new View(() => u);
}

export function map<E, A, B>(f: (a: A) => B, fa: View<E, A>): View<E, B> {
  return fa.map(f);
}

export function contramap<E, A, B>(f: (b: A) => E, fa: View<E, B>): View<A, B> {
  return fa.contramap(f);
}

export function concat<A, B>(
  x: View<A, B>,
  y: View<A, B>
): View<A, JSX.Element> {
  return new View((a: A) =>
    <div>
      {x.fold(a)} {y.fold(a)}
    </div>
  );
}

export const view = <A, B extends {}>(g: (a: A) => B) => new View(g);
