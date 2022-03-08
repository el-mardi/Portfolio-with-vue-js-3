<template>
    <div class="fome-input">
        <label>
           {{name}}
            <input :name="name" :type="type" :placeholder="placeholder" v-model="InputValue">
        </label>
    </div>
</template>

<script>
export default {
  computed: {
    InputValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  props: ['name', 'type', 'placeholder', 'modelValue']
}
</script>

<style scoped>

.fome-input{
    display: block;
    width: 100%;
}

</style>
