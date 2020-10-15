interface FetchResult {
    isLoading(): boolean;
    isSuccess(): boolean;
    isError(): boolean;
    loading: boolean;
    error: Error;
}

declare function onFetch(): FetchResult;