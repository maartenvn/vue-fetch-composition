import { reactive, onMounted } from "vue-demi"

/**
 * Vue Composition function
 */
export function onFetch(fun) {
    const $fetch = reactive({
        /**
         * If the fetch is loading.
         */
        isLoading: () => this.$data.$fetch.loading,

        /**
         * If the fetch has succeeded.
         */
        isSuccess: () =>
            !this.$data.$fetch.loading && !this.$data.$fetch.error,

        /**
         * If the fetch has failed.
         */
        isError: () => this.$data.$fetch.error !== null,

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
    onMounted(async () => {
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
};