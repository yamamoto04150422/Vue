import { defineStore } from "pinia";
import type { Member } from "@/interface";

interface  State {
    memberList : Map<number,Member>
}

export const useMemberStore = defineStore ({
    id : 'members',
    state : () : State => {
        return {
            memberList : new Map<number,Member>()
        }
    },
    getters : {
        getById : (state) => {
            return (id : number) : Member => {
                const member = state.memberList.get(id) as Member
                return member
            }
        },
        isMemberListEmpty : (state) : boolean => {
            return state.memberList.size == 0
        }
    },
    actions : {
        prepareMemberList() : void {
            let memberList = new Map<number,Member>()
            const memberListJsonStr = sessionStorage.getItem('memberList')
            if(memberListJsonStr != undefined) {
                const memberListJson = JSON.parse(memberListJsonStr)
                memberList = new Map<number,Member>(memberListJson)
            }
            this.memberList = memberList;
        },
        insertMember(member : Member) : void {
            this.memberList.set(member.id,member)
            const memberListJsonStr = JSON.stringify([...this.memberList])
            sessionStorage.setItem('memberList',memberListJsonStr)
        }
    }
})