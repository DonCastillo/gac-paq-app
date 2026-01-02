/**
 * Hook returning the current page and the current page number from the redux store.
 * Keeps selector usage in one place for reuse across components.
 */
export default function useTranslations(currentPageNumber: number, currentPage: any) {
	return {
		translatedPage: currentPage?.page?.translations,
	};
}
