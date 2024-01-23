<script lang="ts" setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import '@amap/amap-jsapi-types';
import { onMounted, onUnmounted, ref, shallowRef } from 'vue';

let map = shallowRef<AMap.Map | null>(null);

let SatelliteLayer: any;
let TrafficLayer: any;
onMounted(async () => {
  const AMap = await AMapLoader.load({
    key: '4ec99e79a9fc0fac0217c7573db321b7', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      'AMap.ControlBar',
      'AMap.LineSearch',
      'AMap.StationSearch',
      'AMap.PolylineEditor',
      'AMap.PolygonEditor',
      'AMap.CircleEditor',
      'AMap.AutoComplete',
      'AMap.AutoComplete',
      'AMap.DistrictSearch',
      'AMap.PlaceSearch',
      'AMap.MouseTool',
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  });

  map.value = new AMap.Map('container', {
    // 设置地图容器id
    viewMode: '3D', // 是否为3D地图模式
    zoom: 11, // 初始化地图级别
    center: [116.397428, 39.90923], // 初始化地图中心点位置
    mapStyle: 'amap://styles/dark', // 设置地图的显示样式
  });

  // 信息窗体的内容
  const content =
    '<div className="custom-infowindow input-card">' +
    '<label style="color:grey">故宫博物院</label>' +
    '<div class="input-item">' +
    '<div class="input-item-prepend">' +
    '<span class="input-item-text" >经纬度</span>' +
    '</div>' +
    '<input id="lnglat" type="text" />' +
    '</div>' +
    // 为 infowindow 添加自定义事件
    '<input id="lnglat2container" type="button" class="btn" value="获取该位置经纬度" onclick="getLngLat()"/>' +
    '</div>';

  // 创建 infoWindow 实例
  const infoWindow = new AMap.InfoWindow({
    content, // 传入 dom 对象，或者 html 字符串
    autoMove: true, // 自动调整窗体到视野内
    isCustom: true, // 使用自定义窗体
  });

  // 打开信息窗体
  // infoWindow.open(map.value, [112.401337, 39.907886]);
  SatelliteLayer = useSatelliteLayer(map.value);
  TrafficLayer = useTrafficLayer(map.value);
});

// const useTrafficLayer = () => {
//   return new AMap.TileLayer.Traffic({
//     zIndex: 10,
//     zooms: [7, 22],
//   });
// };
const useTrafficLayer = (map: AMap.Map) => {
  const temp = new AMap.TileLayer.Traffic({
    zIndex: 10,
    zooms: [7, 22],
  });
  temp.setMap(map);
  return temp;
};

const useSatelliteLayer = (map: AMap.Map) => {
  const temp = new AMap.TileLayer.Satellite();
  temp.setMap(map);
  return temp;
};

const visable = ref(false);
const handle = () => {
  if (visable.value) {
    SatelliteLayer?.hide();
    TrafficLayer?.hide();
    visable.value = false;
  } else {
    SatelliteLayer?.show();
    TrafficLayer?.show();
    visable.value = true;
  }
};

onUnmounted(() => {
  map.value?.destroy();
});
</script>

<template>
  <button @click="handle">切换</button>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: calc(100vh - 20px);
}
</style>
