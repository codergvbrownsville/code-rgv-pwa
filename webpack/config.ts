/**
 * Config for code splitting
*/
const highPriorityChunks = ["vendor", "polyfills"];

export const config = {
  OUTPUT: "dist",
  sortChunks: (prev: any, next: any) => {
    const prevName = prev.names[0];
    const nextName = next.names[0];
    return (
      highPriorityChunks.indexOf(prevName) <
      highPriorityChunks.indexOf(nextName)
    );
  }
};
