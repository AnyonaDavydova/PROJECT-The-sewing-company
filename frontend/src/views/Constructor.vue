<template>
  <div>
    <canvas>

    </canvas>
    <div>
      <label for="width">Ширина изделия:</label>
      <input type="number" v-model="width" id="width">
      <select v-model="width.unit">
        <option value="cm">см</option>
        <option value="m">м</option>
        <option value="mm">мм</option>
      </select>
    </div>
    <div>
      <label for="height">Высота изделия:</label>
      <input type="number" v-model="height" id="height">
      <select v-model="height.unit">
        <option value="cm">см</option>
        <option value="m">м</option>
        <option value="mm">мм</option>
      </select>
    </div>
    <div>
      <label for="fabric">Вариант ткани:</label>
      <select v-model="fabric" id="fabric">
        <option v-for="fabricOption in fabricOptions" :key="fabricOption">{{ fabricOption }}</option>
      </select>
    </div>
    <div>
      <label for="edging">Вариант окантовки:</label>
      <select v-model="edging" id="edging">
        <option v-for="edgingOption in edgingOptions" :key="edgingOption">{{ edgingOption }}</option>
      </select>
    </div>
    <div>
      <label for="hardware">Вариант фурнитуры:</label>
      <select v-model="hardware" id="hardware">
        <option v-for="hardwareOption in hardwareOptions" :key="hardwareOption">{{ hardwareOption }}</option>
      </select>
    </div>
    <div>
      <label for="hardwarePlacement">Размещение и размеры фурнитуры:</label>
      <input type="text" v-model="hardwarePlacement" id="hardwarePlacement">
    </div>
    <div>
      <label for="hardwareRotation">Свободный поворот фурнитуры:</label>
      <input type="checkbox" v-model="hardwareRotation" id="hardwareRotation">
    </div>
    <div>
      <label for="customFabric">Пользовательский вариант ткани:</label>
      <input type="file" @change="uploadCustomFabric" id="customFabric">
    </div>
    <div>
      <label for="customHardware">Пользовательский вариант фурнитуры:</label>
      <input type="file" @change="uploadCustomHardware" id="customHardware">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: { value: 0, unit: 'cm' },
      height: { value: 0, unit: 'cm' },
      fabric: '',
      edging: '',
      hardware: '',
      hardwarePlacement: '',
      hardwareRotation: false,

      fabricOptions: ['1', '2', '3'],
      edgingOptions: ['1', '2', '3'],
      hardwareOptions: ['1', '2', '3'],
    };
  },
  methods: {
    uploadCustomFabric(event) {
      const file = event.target.files[0];
     ////////////
    },
    uploadCustomHardware(event) {
      const file = event.target.files[0];
      //////
    },
  },
};
</script>
<style>
canvas{
  width: 60%;
  height: 60%;
  background-color: white;
}

</style>
