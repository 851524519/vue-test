<template>
  <div>
    <a-pagination
      show-size-changer
      :current="pagination.current"
      :pageSize="pagination.pageSize"
      :total="pagination.total"
      @change="pageChange"
      @showSizeChange="pageSizeChange"
    />
  </div>
</template>

<script>
import { Pagination } from 'ant-design-vue'
export default {
  name: 'Pagination',
  components: {
    aPagination: Pagination
  },
  props: {
    pagination: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    pagination: function (val) {
      console.log(val)
    }
  },
  methods: {
    pageChange (page, pageSize) {
      this.$emit('changePage', page, pageSize)
    },
    pageSizeChange (page, pageSize) {
      this.$emit('changePageSize', page, pageSize)
    }
  }
}
</script>

<style scoped>

</style>
