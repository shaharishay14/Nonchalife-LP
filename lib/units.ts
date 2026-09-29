/**
 * Desktop designs are drawn at 1440px. `--u` is 1px at 1440 and shrinks with
 * the viewport below that, so absolutely placed art keeps its proportions.
 */
export const u = (n: number) => `calc(${n} * var(--u))`;

/** Habit card unit. Set `--cu` on a parent to scale the cards inside it. */
export const cu = (n: number) => `calc(${n} * var(--cu, 1px))`;
