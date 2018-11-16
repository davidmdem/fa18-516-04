<template>
    <!--
        Wrapper for using a bootstrap modal to yes/no prompt the user.

        Properties and event listeners declared on `prompt` are passed
        to the `b-modal` component:


        References:
        - https://bootstrap-vue.js.org/docs/components/modal/#component-reference
        - https://bootstrap-vue.js.org/docs/components/button/


        Example Usage:
        ```
        <prompt
            @ok="doSomething"
            title="Go ahead, do it..."
            description="You're about to do something."
            size="lg"
            variant="primary"
            centered="true">Do Something</prompt>
        ```


        Note:
            - You can pass along any `b-modal` property or event, not just the ones (`size`, `title`)
            listed in `props`. Those are listed there and re-bound to provide default values.

            -  `ok` must be defined like `@ok="doSomething"`. `@ok="doSomething(data.id)"` is not awaitable
            until https://github.com/vuejs/vue/issues/7628 is implimented.
    -->

    <div>
        <b-button @click="modalShow = !modalShow"
                  :variant="variant"
                  :size="size"
                  :class="buttonClassComputed"
                  :disabled="isWorking || disabled">
            <font-awesome-icon v-if="isWorking" icon="spinner" spin />
            <slot></slot>
        </b-button>

        <b-modal v-model="modalShow"
                 v-bind="$attrs"
                 v-on="inputListeners"
                 :size="size"
                 :title="title"
                 :body-class="bodyClassComputed">
            {{description}}
        </b-modal>
    </div>
</template>

<script>
    export default {
        props: {
            description: {
                type:String,
                default: ''
            },
            title: {
                type: String,
                default: 'Are you sure?'
            },
            size: {
                type: String,
                default: 'sm'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            variant: {
                type: String,
                default: 'link'
            },
            bodyClass: {
                type: [String, Array],
                default: ''
            }
        },

        data() {
            return {
                modalShow: false,
                isWorking: false
            }
        },

        computed: {
            bodyClassComputed() {
                // Hide the modal body if there is no description.
                return this.description === '' ? 'd-none' : this.bodyClass
            },
            buttonClassComputed() {
                // Eliminate button padding when displaying as a link.
                return this.variant === 'link' ? 'mx-0 px-0' : ''
            },
            inputListeners() {
                var vm = this
                return Object.assign({},
                    this.$listeners,
                    {
                        async ok(event) {
                            vm.isWorking = true
                            await vm.$listeners.ok.fns(event)
                            vm.isWorking = false
                        }
                    }
                )
            }
        }
    }
</script>
