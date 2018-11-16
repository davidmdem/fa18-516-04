<template>
    <div class="danger float-left" v-b-popover.hover="'Details'" :title="vm.name" v-if="variant === 'danger'"></div>
    <div class="warning float-left" v-b-popover.hover="'Details'" :title="vm.name" v-else-if="variant === 'warning'"></div>
    <div class="success float-left" v-b-popover.hover="'Details'" :title="vm.name" v-else-if="variant === 'success'"></div>
    <div class="default float-left" v-b-popover.hover="'Details'" :title="vm.name" v-else="variant === 'default'"></div>
</template>

<script>
    export default {
        props: ['vm'],
        computed: {
            variant() {
                let variant = 'default'

                if (this.vm.status === 'running')
                    variant = 'success'

                if (this.vm.status === 'paused')
                    variant = 'warning'

                if (this.vm.status === 'error')
                    variant = 'danger'

                return variant
            }
        }
    }
</script>

<style scoped>
    .danger {
        width: 20px;
        height: 20px;
        background-color: red
    }
    .warning {
        width: 20px;
        height: 20px;
        background-color: orange
    }
    .success {
        width: 20px;
        height: 20px;
        background-color: green
    }
    .default {
        width: 20px;
        height: 20px;
        background-color: gray
    }
</style>
