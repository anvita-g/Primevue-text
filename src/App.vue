<template>


  <div class ="card flex flex-column md:flex-row gap-3">
    <div class="p-inputgroup flex-1">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
      </span>
      <InputText placeholder = "Username" type="text" v-model="value" />
    </div>
  </div>

</template>

<script>
export default {
  name: "App"
}
</script>
