<template>

        <div class="box">
            <div class="entrance-box">
                <img src="../assets/ic_msg.png" alt="" @click="showPop">
            </div>
            <div :class="{'pop-box': popBox}">
                <div class="chatting-pop">
                    <transition name="slide-up-down">
                        <Chatting @showPop="showPop" v-show="pop"></Chatting>
                    </transition>
                </div>
            </div>
        </div>
</template>

<script>
import Chatting from './chatting'
export default {
    name: "chattingEntrance",
    components: {
        Chatting
    },
    data () {
        return {
            pop: false,
            popBox: false,
        }
    },
    methods: {
        showPop () {
            this.pop = !this.pop
        }
    },
    watch: {
        pop (old ,newV) {
           if (newV) {
               setTimeout(() => {
                   this.popBox = this.pop
               },300)
           } else {
               this.popBox = this.pop
           }
        }
    }
}
</script>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.png");
    background-size: cover;
}
.entrance-box {
    width: 2.5rem;
    height: 2.5rem;
    position: fixed;
    bottom: 20px;
    left: 20px;
    img {
        width: 100%;
    }
}
.pop-box {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    position: relative;
    .chatting-pop {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
}
.slide-up-down-enter-active {
    transition: all 0.6s ease-in-out;
}
.slide-up-down-leave-active {
    transition: all 0.3s ease;
}

.slide-up-down-enter {
    transform: translateY(50px);
    opacity: 1;
}

.slide-up-down-leave-active {
    transform: translateY(100px);
    opacity: 0;
}
</style>