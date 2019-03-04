<template>
  <section class="partners-table">
    <Table border :columns="partnersTableColumns" :data="partnersTableData" />
  </section>
</template>

<script>
import { getAllPartners } from '../../services/partner'
import axios from 'axios'

const partnersTableColumns = [
  { title: 'First Name', key: 'first_name' },
  { title: 'Last Name', key: 'last_name' },
  { title: 'Email', key: 'email' },
  { title: 'Phone', key: 'phone' },
  { title: 'Wallet Address', key: 'wallet_address' },
  { title: 'Amount', key: 'amount' },
  { title: 'Currency', key: 'currency' },
  { title: 'Document', key: 'document' },
]

export default {
  data() {
    return {
      partnersTableColumns: partnersTableColumns,
      partnersTableData: []
    }
  },
  methods: {
    populateTable() {
      this.partnersTableData = getAllPartners()
      console.log(this.partnersTableData)
    }
  },
  mounted() {
    this.$nextTick(() => {
      axios.get(`${process.env.VUE_APP_API_ENDPOINT}/partners`)
        .then(response => {
          console.log(response.data)
          this.partnersTableData = response.data
        })
        .catch(err => console.log(err))
    })
  }
}
</script>
