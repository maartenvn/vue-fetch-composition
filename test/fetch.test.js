import CompositionApi from "@vue/composition-api";
import flushPromises from "flush-promises";
import { mount } from "@vue/test-utils";
import { onFetch } from "../src";

describe("$fetch tests", () => {
    const mockErrorMessage = "Is it a bug? Is it a plane? No its an error!";

    // Component to execute tests on.
    function mockComponent(promise) {
        return {
            template: "<div></div>",
            setup() {
                const $fetch = onFetch(async () => {
                    await promise;
                });

                return {
                    $fetch
                };
            }
        };
    }

    test("'isLoading()' is true when the promise is not yet resolved", () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        console.log(vm.$fetch);

        expect(vm.$data.$fetch.isLoading()).toEqual(true);
    });

    test("'isLoading()' is false when the promise has been resolved", async () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.isLoading()).toEqual(false);
    });

    test("'isLoading()' is false when the promise has been rejected", async () => {
        const promise = Promise.reject(mockErrorMessage);
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.isLoading()).toEqual(false);
    });

    test("'isSuccess()' is false when the promise is not yet resolved", () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        expect(vm.$data.$fetch.isSuccess()).toEqual(false);
    });

    test("'isSuccess()' is false when the promise is not yet resolved", () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        expect(vm.$data.$fetch.isSuccess()).toEqual(false);
    });

    test("'isSuccess()' is true when the promise has been resolved", async () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.isSuccess()).toEqual(true);
    });

    test("'isSuccess()' is false when the promise has been rejected", async () => {
        const promise = Promise.reject(mockErrorMessage);
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.isSuccess()).toEqual(false);
    });

    test("'isError()' is false when the promise is not yet resolved", () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        expect(vm.$data.$fetch.isError()).toEqual(false);
    });

    test("'isError()' is true when the promise has been rejected", async () => {
        const promise = Promise.reject(mockErrorMessage);
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.isError()).toEqual(true);
    });

    test("'isError()' is false when the promise has been resolved", async () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.isError()).toEqual(false);
    });

    test("'loading' is true when the promise is not yet resolved", () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        expect(vm.$data.$fetch.loading).toEqual(true);
    });

    test("'loading' is false when the promise has been resolved", async () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.loading).toEqual(false);
    });

    test("'error' is null when the promise succeeded", async () => {
        const promise = Promise.resolve();
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.error).toEqual(null);
    });

    test("'error' is defined and correct when the promise failed", async () => {
        const promise = Promise.reject(mockErrorMessage);
        const vm = mount(mockComponent(promise)).vm;

        // Await the promise before checking the result
        await flushPromises();

        expect(vm.$data.$fetch.error).toEqual(mockErrorMessage);
    });
});
