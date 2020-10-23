import { reactive, onMounted } from "vue-demi";

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

    $fetch.loading = true;

    // Attempt to call the fetch function
    try {
        await fun();
    } catch (err) {
        $fetch.error = err;
    } finally {
        $fetch.loading = false;
    }

    return $fetch;
}
