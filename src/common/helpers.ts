export function* importer() {}

export function getElement<T = HTMLElement>(el: string) {
	return document.querySelector(el) as T;
}
