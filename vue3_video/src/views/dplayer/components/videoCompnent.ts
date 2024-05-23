import { defineAsyncComponent } from 'vue'

const DplayerVideo = defineAsyncComponent(() => import('./DplayerVideo.vue'))
const MpegtsjsVideo = defineAsyncComponent(() => import('./MpegtsjsVideo.vue'))
const LiveVideo = defineAsyncComponent(() => import('./LiveVideo.vue'))

export { DplayerVideo, LiveVideo, MpegtsjsVideo }
