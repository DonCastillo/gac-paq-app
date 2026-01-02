import { getCurrentPage, getCurrentPageNumber } from "@store/settings/settingsSlice";
import { useSelector } from "react-redux";

/**
 * Hook returning the current page and the current page number from the redux store.
 * Keeps selector usage in one place for reuse across components.
 */
export default function useCurrentPage() {
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	return { currentPage, currentPageNumber };
}
