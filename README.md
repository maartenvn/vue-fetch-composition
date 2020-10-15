# vue-fetch-composition

[![build status](https://img.shields.io/travis/maartenvn/vue-fetch-composition)](https://travis-ci.org/maartenvn/vue-fetch-composition)
[![npm version](https://img.shields.io/npm/v/vue-fetch-composition)](https://www.npmjs.com/vue-fetch-composition)
[![npm downloads](https://img.shields.io/npm/dm/vue-fetch-composition)](http://npm-stat.com/charts.html?package=vue-fetch-composition)


Composition function for easy data fetching in Vue using the composition API. Prevents unnecesarry boilerplate code and offers a much more intuative workflow. Inspired by the Nuxt.JS `fetch` hook.


## Installation

Make sure you have the Vue 2 composition API installed.

### Using NPM:

```
npm install vue-fetch-composition --save
```

### Using YARN

```
yarn add vue-fetch-composition
```

### Using CDN

```html
<script src="https://unpkg.com/vue-fetch-composition@latest/dist/vue-fetch-composition.min.js"></script>
```

## Usage

```vue
<template>
    <div>

        <!-- Loading -->
        <template v-if="$fetch.isLoading()">
            Loading...
        </template>

        <!-- Success -->
        <template v-else-if="$fetch.isSuccess()">
            {{ articles }}
        </template>

        <!-- Error -->
        <template v-else-if="$fetch.isError()">
            Oops an error:

            <p>
                {{ $fetch.error }}
            </p>
        </template>
    </div>
</template>

<script>
import { onFetch } from "vue-fetch-composition"

export default {
    setup() {
        const articles = reactive([]);

        const $fetch = onFetch(async () => {
            await fetch("http://api/articles").then(res => res.json());
        });

        return {
            articles,
            $fetch
        }
    }
}
</script>
```