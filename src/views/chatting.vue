<template>
    <div class="chating-box">
        <div class="header">
            <div class="header-top">
                <div class="header-top-left">好友</div>
                <div class="header-top-right">
                    <img src="../assets/ic_down.png" alt="" @click.stop="showPop">
                </div>
            </div>
            <div class="header-name">喜洋洋</div>
        </div>
        <div class="content-box">
            <!-- 聊天内容区域 -->
            <div class="chatting-content">
                <div v-for="(item,index) of massageList" :key="index">
                    <!--渲染本人发送的信息-->
                    <div v-if="item.self" class="chatting-child self clearfix margin-top-10">
                        <div class="msg-date">
                            {{ item.date }}
                        </div>
                        <div class="flex flex-end">
                            <div class="msg-content-box-2">
                                <em></em>
                                <div class="msg-content-2 b-g-g">{{ item.content }}</div>
                            </div>
                            <div class="msg-from">
                                <img :src="item.avatarUrl" alt="">
                            </div>
                        </div>
                    </div>
                    <!--渲染对方发送的信息-->
                    <div v-else class="chatting-child other clearfix margin-top-10">
                        <div class="msg-date">
                            {{ item.date }}
                        </div>
                        <div class="flex flex-start">
                            <div class="msg-from">
                                <img :src="item.avatarUrl" alt="">
                            </div>
                            <div class="msg-content-box">
                                <em></em>
                                <div class="msg-content">{{ item.content }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="insert-box flex align-center justify-center">
            <div class="insert-box-left">
                <img src="../assets/images/ic_msg.png" alt="">
            </div>
            <div class="insert-box-center flex justify-center align-center">
                <input type="text" class="inputMsg" placeholder="请输入....." v-model="msg">
            </div>
            <div class="insert-box-right flex justify-center align-center">
                <div class="send-btn" @click="sendMessage">发送</div>
            </div>
        </div>
    </div>
</template>

<script>
import massageList from '../mock/massageList'
export default {
    name: "chatting",
    data() {
        return {
            massageList: massageList,
            msg: '',
            contentBox: ''
        }
    },
    mounted() {
        this.contentBox =  document.querySelector('.content-box')
        this.contentBox.scrollTop = this.contentBox.scrollHeight
    },
    methods: {
        showPop () {
            this.$emit('showPop')
        },
        sendMessage () {
            // 判空处理
           if (this.msg !== '') {
               // 获取当前时间
               let date = this.nowDate()
               let msg = { date: date,
                   from: '我我我',
                   avatarUrl: require('../assets/images/qiqiu.jpg'),
                   content: this.msg,
                   self: true
               }
               // 插入聊天信息
               this.massageList.push (msg)
               //    还原输入框
               this.msg = ''
               setTimeout ( () => this.contentBox.scrollTop = this.contentBox.scrollHeight, 0)
           }
        },
        nowDate () {
            let date = new Date()
            let h = date.getHours()
            let m = date.getMinutes()
            let s = date.getSeconds()
            if (h < 10) {
                h = '0'+ h
            }
            if (m < 10) {
                m = '0'+ m
            }
            if (s < 10) {
                s = '0'+ s
            }
            return h + ':'+ m + ':' + s
        }
    }
}
</script>

<style lang="less" scoped>
    @import "chatting";
</style>