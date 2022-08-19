<template>
  <q-page>
    <button @click="$q.dark.set(false)">라이트모드</button>
    <button @click="$q.dark.set(true)">다크모드</button>
    <br />
    <div>
      {{ $dayjs().format("YYYY년 MM월 DD일 HH:mm:ss SSS [Z] A") }}
    </div>
    <div class="flex items-center">
      <h5 class="text-h5 q-mr-lg" style="font-size: 16px">글씨배율 변경</h5>
      <q-select v-model="fontScale" :options="fontScaleOptions" label="글씨 배율 설정" style="width: 200px" />
    </div>
    <p style="font-size: 1rem">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </p>
  </q-page>
</template>

<script>
  export default {
    name: "PlateForms",
    data() {
      return {
        fontScale: 1,
        fontScaleOptions: [1, 2, 3, 4, 5],
      };
    },
    watch: {
      fontScale(val) {
        document.documentElement.style.setProperty("--default-font-scale", val);
      },
    },
  };
</script>
