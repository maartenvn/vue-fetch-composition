interface FetchResult {
    isLoading(): boolean;
    isSuccess(): boolean;
    isError(): boolean;
    loading: boolean;
    error: Error;
}

declare function useFetchState(): FetchResult;
declare function onFetch(fun: () => any): FetchResult;

export { useFetchState, onFetch };
