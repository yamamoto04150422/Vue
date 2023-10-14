<script setup lang="ts">
import type {Item} from '@/interfaceItem'
import type {Emits} from '@/interfaceEmit'
import { ref ,computed } from 'vue';

const props = withDefaults(
    defineProps<Item>(),
    {note : "---"}
)
const localCount = ref(props.count);

// 個別アカウントアップ
const countUp = () : void => {
    localCount.value ++;
}

const emit = defineEmits<Emits>();

const countUpStore = () : void => {
    emit("pointCount");
    localCount.value ++
}
const countUpStoreSet = () : void => {
    emit('pointCountset',props.set);
}

</script>

<template>
    <section class="box">
        <h3>{{ index }}.{{ title }}</h3>
        <h4>商品概要 : {{ gaiyou }}</h4>
        <h4>金額 : {{ money }}円</h4>
        <p>{{ content }}</p>
        <p>単品注文数 : {{ localCount }}</p>
        <p>セット数:{{ set }}</p>
        <button v-on:click="countUpStore">単品追加</button>
        <button @click="countUpStoreSet">セット追加</button>
        <p>note:{{ note }}</p>
        <p>リンク</p>
    </section>
</template>

<style scoped>
.box {
  border: gray 1px solid;
  padding: 20px;
  margin: 10px;
}
</style>