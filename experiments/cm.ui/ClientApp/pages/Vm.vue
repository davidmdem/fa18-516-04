<template>
    <div>
        <h3>Virtual Machines</h3>
        <hr />

        <div class="d-flex justify-content-end mb-2">
            <b-form-select v-model="displayType" :options="displayTypes" class="mr-2" />
            <b-form-input v-model.number="displayLim" type="number" placeholder="How many to display"></b-form-input>
        </div>

        <paged-list :list="vms" :display-limit="displayLim" type="card" v-if="displayType === 'list'">
            <vm-list-display slot-scope="{r}" :vm="r"></vm-list-display>
        </paged-list>

        <paged-list :list="vms" :display-limit="displayLim" type="card" v-if="displayType === 'card'">
            <vm-card-display slot-scope="{r}" :vm="r" v-if="displayType === 'card'"></vm-card-display>
        </paged-list>

        <paged-list :list="vms" :display-limit="displayLim" type="card" v-if="displayType === 'square'">
            <vm-square-display slot-scope="{r}" :vm="r" v-if="displayType === 'square'"></vm-square-display>
        </paged-list>
    </div>
</template>

<script>
    import { getVms } from '../api'
    import PagedList from '../components/PagedList.vue'
    import VmListDisplay from '../components/vm/VmListDisplay.vue'
    import VmCardDisplay from '../components/vm/VmCardDisplay.vue'
    import VmSquareDisplay from '../components/vm/VmSquareDisplay.vue'

    
    export default {
        components: {
            'paged-list': PagedList,
            'vm-list-display': VmListDisplay,
            'vm-card-display': VmCardDisplay,
            'vm-square-display': VmSquareDisplay
        },

        data() {
            return {
                vms: [],
                displayType: 'card',
                displayTypes: ['card', 'list', 'square'],
                displayLim: 10
            }
        },

        async mounted() {
            console.log('VM page mounted')

            this.vms = await getVms()

            console.log('vms', this.vms)
        }, 

        methods: {
        },

    }
</script>
