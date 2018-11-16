<template>
    <!--
        Used to display content that is dependent upon data from an ajax call.

        Will display a loading message while data is being retrieved.
        If the call fails an error message and opportunity to retry will display.
        If the call succeeds the content in the default slot will be displayed
        with `data` populated with the ajax call results.

        Example Usage:
        ```
        <content-async url="api/get-thing" :query="queryParams">
            <div slot-scope="{data}">
                {{data.thingName}}

                <div class="d-flex">
                    <prompt @ok="doAction(data.thingId)" class="mr-3">Action 1</prompt>
                    <prompt @ok="doAction2(data.thingId)">Action 2</prompt>
                </div>
            </div>
        </content-async>
        ```
    -->

    <div>
        <slot v-if="data" :data="data"></slot>

        <div v-if="isLoading">
            <font-awesome-icon icon="spinner" spin />
            <span>{{loadingText}}</span>
        </div>

        <div v-if="isNotFound">{{noDataText}}</div>

        <div v-if="isError">Sorry, there was an error retreiving data. <b-link @click="load(2)">Try again.</b-link></div>

        <div v-if="isTimeout">The request timed out in {{timeoutDisplay}}. <b-link @click="load(2)">Try again.</b-link> </div>
    </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        props: {
            url: {
                type: String,
                required: true
            },
            query: {
                type: Object,
                default: null
            },
            timeout: {
                type: Number,
                default: 30000
            },
            loadingText: {
                type: String,
                default: 'Loading...'
            },
            noDataText: {
                type: String,
                default: 'Nothing found.'
            }
        },

        data() {
            return {
                data: null,
                isLoading: true,
                isError: false,
                isTimeout: false,
                isNotFound: false
            }
        },

        async mounted() {
            await this.load()
        },

        methods: {
            async load(timeoutMultiplier = 1) {
                this.reset()

                try {
                    this.data = await $.get({
                        url: this.url,
                        data: this.query,
                        timeout: this.timeout * timeoutMultiplier
                    })

                    this.isNotFound = this.data === null
                    this.$emit('input', this.data)
                }
                catch (e) {
                    console.log('content-async error', this.url, e)

                    if (e.statusText === 'timeout')
                        this.isTimeout = true
                    else
                        this.isError = true
                }

                this.isLoading = false
            },

            reset() {
                Object.assign(this.$data, this.$options.data())
            }
        },

        watch: {
            query(oldParams, newParams) {
                this.load()
            },
            url(oldParams, newParams) {
                this.load()
            }
        },

        computed: {
            timeoutDisplay() {
                return `${this.timeout / 1000}s`
            }
        }
    }
</script>
