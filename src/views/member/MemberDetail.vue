<script setup lang="ts">
import {computed} from 'vue'
import { RouterLink } from 'vue-router';
import type { Member } from '@/interface';
import { useMemberStore } from '@/stores/member';

interface Props {
    id : number
}

const props = defineProps<Props>()



const memberStore = useMemberStore()

const member = computed(
    () : Member => {
        return memberStore.getById(props.id)
    }
)

const localNote = computed(
    () : string => {
        let localNote = '---'
        if (member.value.note != undefined) {
            localNote = member.value.note
        }
        return localNote
    }
)

</script>

<template>
    <h1>会員情報</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>
                <RouterLink v-bind:to="{name:'AppTop'}">
                    TOP
                </RouterLink>
            </li>
            <li>
                <RouterLink v-bind:to="{name:'MemberList'}">
                    会員リスト
                </RouterLink>
            </li>
            <li>会員情報詳細</li>
        </ul>
    </nav>
    <section>
        <h2>会員情報詳細</h2>
        <dl>
            <dt>ID</dt>
            <dd>{{ member.id }}</dd>
            <dt>名前</dt>
            <dd>{{ member.name }}</dd>
            <dt>email</dt>
            <dd>{{ member.email }}</dd>
            <dt>保有ポイント</dt>
            <dd>{{ member.points }}</dd>
            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>