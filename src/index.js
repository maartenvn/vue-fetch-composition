import { reactive, onBeforeMount } from "vue-demi";

/**
 * Vue Composition function
 */
export function onFetch(fun) {
    const $fetch = reactive({
        /**
         * If the fetch is loading.
         */
        isLoading: () => $fetch.loading,

        /**
         * If the fetch has succeeded.
         */
        isSuccess: () => !$fetch.loading && !$fetch.error,

        /**
         * If the fetch has failed.
         */
        isError: () => $fetch.loading !== null,

        /**
         * If the fetch is loading.
         */
        loading: false,

        /**
         * Error when the fetch has failed.
         */
        error: null
    });

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
