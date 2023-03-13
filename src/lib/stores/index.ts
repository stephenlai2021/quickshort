import { writable } from "svelte/store";

export const user = writable({})
export const auth = writable(false)
export const mobile = writable(false);
export const menuOpen = writable(false);
export const widthLessthan680 = writable(false)
export const widthLessthan560 = writable(false)
export const widthLessthan480 = writable(false)