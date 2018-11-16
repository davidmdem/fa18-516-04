<template>
    <b-card :border-variant="borderVariant"
            :header="vm.name"
            header-border-variant="secondary"
            align="center">
    </b-card>
</template>

<script>
    export default {
        props: ['vm'],
        computed: {
            borderVariant() {
                let variant = 'success'
                if (this.vm.status !== 'running')
                    variant = 'warning'

                if (this.vm.status === 'error')
                    variant = 'danger'
                return variant
            }
        }
    }
</script>
