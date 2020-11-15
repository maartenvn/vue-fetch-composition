import { reactive, onBeforeMount } from "vue-demi";

/**
 * Create an empty fetch state object.
 */
export function useFetchState() {
    const $state = reactive({
        /**
         * If the fetch is loading.
         */
        isLoading: () => $state.loading,

        /**
         * If the fetch has succeeded.
         */
        isSuccess: () => !$state.loading && !$state.error,

        /**
         * If the fetch has failed.
         */
        isError: () => $state.loading !== null,

        /**
         * If the fetch is loading.
         */
        loading: false,

        /**
         * Error when the fetch has failed.
         */
        error: null
    });

    return $state;
}

/**
 * Vue Composition function
 */
export function onFetch(fun) {
    const $fetch = useFetchState();

    // Make sure the `fetch` option is present.
    onBeforeMount(async () => {
        $fetch.loading = true;

        // Attempt to call the fetch function
        try {
            await fun();
        } catch (err) {
            $fetch.error = err;
            $fetch.error = err;
        } finally {
            $fetch.loading = false;
        }
    });

    return $fetch;
}
