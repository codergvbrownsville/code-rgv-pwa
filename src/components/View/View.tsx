/**
 * Generic View Component
 */
import * as React from "react";

export const View: any = (g: any) => ({
  fold: g,
  contramap: (f: any) => View((x: any) => g(f(x))),
  concat: (other: any) =>
    View((x: any) =>
      <div>
        {g(x)} {other.fold(x)}
      </div>
    ),
  map: (f: any) => View((x: any) => f(g(x)))
});

View.of = (x: any) => View(() => x);

export interface Semigroup<A> {
  concat(x: A): Semigroup<A>;
}

export interface Functor<T> {
  map<U>(f: (t: T) => U): Functor<U>;
}

export interface Contravariant<A> {
  contramap<B>(f: (b: B) => A): Contravariant<A>;
}

export interface Component<T>
  extends Functor<T>,
    Contravariant<T>,
    Semigroup<T> {
  fold(t: T): T;
}
