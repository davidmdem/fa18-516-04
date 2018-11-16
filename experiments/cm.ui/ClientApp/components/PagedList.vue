<template>
    <!--
        Calls an endpoint with a search parameter and displays the results.

        Example Usage:
        ```
        <search v-model="selectedResult">
            <div slot-scope="{r}">
                {{r.last_name}}, {{r.first_name}}
            </div>
        </search>
        ```
    -->
    <div>
        <b-card no-body>
            <b-card-header class="d-flex justify-content-between">
                <b-pagination :total-rows="filteredResultCount"
                              v-model="currentPage"
                              :per-page="displayLimit"
                              size="sm"></b-pagination>

                <small>
                    Showing {{pageStartNum}} to {{pageEndNum}} of {{filteredResultCount}} entries
                    <span v-if="isFiltered">(filtered from {{totalResultCount}} total)</span>
                </small>

                <div class="w-25">
                    <b-form-input type="search"
                                  v-model="filterTerm"
                                  size="sm"
                                  placeholder="Filter Results"></b-form-input>
                </div>
            </b-card-header>

            <b-list-group flush v-if="type === 'list'">
                <b-list-group-item href="#"
                                   @click="handleSelect(r)"
                                   class="flex-column align-items-start"
                                   v-for="r in displayList"
                                   :key="r.id">

                    <div v-if="showResults">
                        <slot :r="r"></slot>
                    </div>
                    <div v-if="!showResults">No results</div>
                </b-list-group-item>
            </b-list-group>

            <b-card-group columns v-if="type === 'card'" class="p-4">
                <div v-if="showResults">
                    <div v-for="r in displayList" @click="handleSelect(r)">
                        <slot :r="r"></slot>
                    </div>
                </div>
                <div v-if="!showResults">No results</div>
            </b-card-group>


            <div class="p-4" v-if="type === 'flex'">
                <div v-if="showResults">
                    <div v-for="r in displayList" @click="handleSelect(r)">
                        <slot :r="r"></slot>
                    </div>
                </div>
                <div v-if="!showResults">No results</div>
            </div>

            <b-card-footer class="d-flex justify-content-between">
                <b-pagination :total-rows="filteredResultCount"
                              v-model="currentPage"
                              :per-page="displayLimit"
                              size="sm"></b-pagination>

                <small>
                    Showing {{pageStartNum}} to {{pageEndNum}} of {{filteredResultCount}} entries
                    <span v-if="isFiltered">(filtered from {{totalResultCount}} total)</span>
                </small>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
    import { filterByValue } from '../util'

    export default {
        props: {
            displayLimit: {
                type: Number,
                default: 10
            },
            list: {
                type: Array,
                default: []
            },
            type: {
                type: String,
                default: 'list',
                validator: value => ['list', 'card', 'flex'].indexOf(value) !== -1
            }
        },

        data() {
            return {
                currentPage: 1,
                filterTerm: ''
            }
        },

        methods: {
            handleSelect(selected) {
                this.$emit('input', selected)
            }
        },

        computed: {
            filteredResults() {
                let results = this.list

                if (this.filterTerm) {
                    results = filterByValue(results, this.filterTerm)
                }

                return results
            },

            displayList() {
                return this.filteredResults.slice(this.pageStartNum - 1, this.pageEndNum)
            },

            pageStartNum() {
                return (this.currentPage - 1) * this.displayLimit + 1
            },

            pageEndNum() {
                return this.filteredResultCount < this.displayLimit
                    ? this.filteredResultCount
                    : this.pageStartNum + this.displayLimit - 1
            },

            totalResultCount() {
                return this.displayList.length
            },

            filteredResultCount() {
                return this.filteredResults.length
            },

            isFiltered() {
                return !!this.filterTerm
            },

            showResults() {
                return this.displayList && this.displayList.length
            }
        }
    }
</script>
