<script lang="ts" setup>
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'

interface ICropOptions {
  img: string
  outputSize?: number
  outputType?: 'jpeg' | 'png' | 'webp'
  info?: boolean
  canScale?: boolean
  autoCrop?: boolean
  autoCropWidth?: number
  autoCropHeight?: number
  fixed?: boolean
  fixedNumber?: Array<number>
  full?: boolean
  fixedBox?: boolean
  canMove?: boolean
  canMoveBox?: boolean
  original?: boolean
  centerBox?: boolean
  high?: boolean
  infoTrue?: boolean
  maxlmgSize?: number
  enlarge?: number
  mode?: 'contain' | 'cover' | string
  limitMinSize?: number | string
  fillColor?: string
}
interface IRealTimeImg {
  w: number
  h: number
  url: string
  div: any
  img: any
  html?: string
}

const cropperRef = ref()
const cropOptions = reactive<ICropOptions>({
  img: 'https://picsum.photos/seed/picsum/400/300',
  outputSize: 1,
  outputType: 'png',
  info: true,
  canScale: true,
  autoCrop: true,
  autoCropWidth: 200,
  autoCropHeight: 200,
  fixed: true,
  fixedNumber: [1, 1],
  full: true,
  fixedBox: false,
  canMove: false,
  canMoveBox: true,
  original: true,
  centerBox: true,
  high: true,
  infoTrue: true,
  maxlmgSize: 2000,
  enlarge: 1,
  mode: 'contain',
  limitMinSize: 10,
})

const crap = ref(true)
const realTimeImg = ref<IRealTimeImg>({
  w: 0,
  h: 0,
  url: '',
  div: {},
  img: {},
})
const previewImg = computed(() => ({
  width: `${realTimeImg.value.w}px`,
  height: `${realTimeImg.value.h}px`,
  overflow: 'hidden',
  borderRadius: '50%',
  border: '2px solid #fff',
  boxShadow: '0 0 5px #ccc',
  transform: `scale(${crap.value ? 1 : 0})`,
}))

/**
 * 无
 */
const imgLoad = () => {}

/**
 * 当裁剪区域变化时的处理函数
 */
const cropChange = () => {
  // 用于更新裁剪图像的数据
}

/**
 * 完成裁剪，根据类型获取裁剪后的图片数据
 * @param {('blob' | 'base64')} type - 图片数据类型，可以是 'blob' 或 'base64'
 */
const finish = (type: 'blob' | 'base64') => {
  if (type === 'blob') {
    // 获取二进制blob格式的图片数据
    cropperRef.value.getCropBlob((data: any) => {
      const img = window.URL.createObjectURL(data)
      console.log(img)
    })
  } else {
    // 获取base64格式的图片数据
    cropperRef.value.getCropData((data: any) => {
      console.log(data)
    })
  }
}

/**
 * 下载裁剪后的图片，根据类型决定下载的数据格式
 * @param {('blob' | 'base64')} type - 图片数据类型，可以是 'blob' 或 'base64'
 */
const downloadImg = (type: 'blob' | 'base64') => {
  const a = document.createElement('a')
  a.download = 'img'
  if (type === 'blob') {
    // 创建blob类型图片并下载
    cropperRef.value.getCropBlob((data: any) => {
      const img = window.URL.createObjectURL(data)
      a.href = img
      a.click()
    })
  } else {
    // 创建base64类型图片并下载
    cropperRef.value.getCropData((data: any) => {
      a.href = data
      a.click()
    })
  }
}

/**
 * 实时更新裁剪预览图
 * @param {IRealTimeImg} data - 包含实时裁剪图像数据的对象
 */
const cropRealTime = (data: IRealTimeImg) => {
  realTimeImg.value = data
}

/**
 * 上传图片到裁剪器
 */
const uploadImg = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = (e: any) => {
    const file = e.target.files[0]
    // 检查图片文件类型是否支持
    // eslint-disable-next-line regexp/no-unused-capturing-group
    if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
      // eslint-disable-next-line no-alert
      alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
      return false
    }
    // 读取文件并将其数据转换为URL
    const reader = new FileReader()
    reader.onload = (el: any) => {
      cropOptions.img = el.target.result
    }
    reader.readAsDataURL(file)
  }
  input.click()
}

/**
 * 清除当前裁剪的图片
 */
const clearImg = () => {
  cropOptions.img = ''
}

/**
 * 开始裁剪
 */
const startCrop = () => {
  crap.value = true
  cropperRef.value.startCrop()
}

/**
 * 停止裁剪
 */
const stopCrop = () => {
  crap.value = false
  cropperRef.value.stopCrop()
}

/**
 * 清除当前的裁剪状态
 */
const clearCrop = () => {
  cropperRef.value.clearCrop()
}

/**
 * 刷新裁剪器状态
 */
const refreshCrop = () => {
  cropperRef.value.refresh()
}

/**
 * 改变裁剪区域的缩放比例
 * @param {number} num - 缩放比例，若未提供，默认为1
 */
const cropChangeScale = (num: number) => {
  num = num || 1
  cropperRef.value.changeScale(num)
}

/**
 * 裁剪区域向左旋转
 */
const cropRotateLeft = () => {
  cropperRef.value.rotateLeft()
}

/**
 * 裁剪区域向右旋转
 */
const cropRotateRight = () => {
  cropperRef.value.rotateRight()
}
</script>

<template>
  <n-card title="裁剪头像">
    <template #header-extra />
    <template #footer>
      <n-flex vertical>
        <n-button-group>
          <n-button type="primary" @click="uploadImg"> 上传图片 </n-button>
          <n-button type="primary" @click="clearImg"> 清除图片 </n-button>
          <n-button type="primary" @click="startCrop"> 开始裁剪 </n-button>
          <n-button type="primary" @click="stopCrop"> 停止裁剪 </n-button>
          <n-button type="primary" @click="clearCrop"> 清除裁剪框 </n-button>
          <n-button type="error" @click="refreshCrop"> 重新裁剪 </n-button>
        </n-button-group>
        <n-button-group>
          <n-button type="info" @click="cropChangeScale(1)"> 放大图片 </n-button>
          <n-button type="info" @click="cropChangeScale(-1)"> 缩小图片 </n-button>
          <n-button type="info" @click="cropRotateLeft"> 向左旋转 90° </n-button>
          <n-button type="info" @click="cropRotateRight"> 向右旋转 90° </n-button>
        </n-button-group>
        <n-button-group>
          <n-button type="primary" @click="cropChange"> 获取图片 </n-button>
          <n-button type="primary" @click="finish('base64')"> 预览图片(base64) </n-button>
          <n-button type="primary" @click="finish('blob')"> 预览图片(blob) </n-button>
          <n-button type="primary" @click="downloadImg('base64')"> 下载图片(base64) </n-button>
          <n-button type="primary" @click="downloadImg('blob')"> 下载图片(blob) </n-button>
        </n-button-group>
      </n-flex>
    </template>
    <n-flex>
      <div class="cropper-box">
        <vue-cropper
          ref="cropperRef"
          v-bind="cropOptions"
          @real-time="cropRealTime"
          @img-load="imgLoad"
        />
      </div>
      <div :style="previewImg">
        <div :style="realTimeImg.div">
          <img :src="realTimeImg.url" :style="realTimeImg.img" />
        </div>
      </div>
    </n-flex>
  </n-card>
</template>

<style scoped>
.cropper-box {
  width: 400px;
  height: 300px;
  border: 1px solid #000;
  box-shadow: 0 0 5px #000;
}
</style>
