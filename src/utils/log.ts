/**
 * Functional console log
 */
import { tap } from "ramda";
export const log: any = tap(console.log.bind(console));
