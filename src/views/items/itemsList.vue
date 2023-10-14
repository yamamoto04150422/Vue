
<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { Member } from '@/interface';
import { useMemberStore } from '@/stores/member';
import Item from "@/components/items/Item.vue";
import {ref} from "vue";
import type {Items} from '@/interfaceItem'

const memberStore = useMemberStore()
memberStore.prepareMemberList()

const memberList = computed(
    () : Map<number,Member> => {
        return memberStore.memberList
    }
)

const isEmptyList = computed(
    () : boolean => {
        return memberStore.isMemberListEmpty
    }
)

const itemList = new Map<number,Items>();

itemList.set(1,{index : 1, title: "ネクタイ",
money : 1000,gaiyou : "青いネクタイ",content : "この商品はネクタイです",
count : 0 ,set : 5 ,note:"発送に時間がかかります"})

itemList.set(2,{index : 2, title: "ピアス",
money : 100,gaiyou : "透明なピアス",content : "この商品はピアスです",
count : 0 ,set : 2 })

itemList.set(14,{index : 3, title: "包丁",
money : 5000,gaiyou : "鋭い包丁",content : "この商品は包丁です",
count : 0 ,set : 3 })

itemList.set(4,{index : 4, title: "まな板",
money : 300,gaiyou : "木製のまな板",content : "この商品はまな板です",
count : 0 ,set : 3 })

const totalStore = ref(0);

const setSu = ref(0)

const totalCount = ref(0)

const onStore = () : void => {
    totalStore.value ++;
    totalCount.value ++
}

const onStoreSet = (set : number) : void => {
    setSu.value ++
    totalCount.value += set
}
</script>

<template>
    <h1>商品一覧</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{name : 'AppTop'}">
                    TOP
                </RouterLink>
            </li>
            <li>商品一覧</li>
        </ul>
    </nav>
    <p>注文単品個数:{{ totalStore }}</p>
    <p>注文セット数:{{ setSu }}</p>
    <p>総合計:{{ totalCount }}</p>
    <section>
        <Item 
        v-for="[id,item] in itemList"
        v-bind:key="id"
        v-bind:index="item.index"
        v-bind:title="item.title"
        v-bind:money="item.money"
        v-bind:gaiyou="item.gaiyou"
        v-bind:content="item.content"
        v-bind:count="item.count"
        v-bind:set="item.set"
        v-bind:note="item.note"
        @pointCount="onStore"
        @pointCountset="onStoreSet"
        />
    </section>
</template>