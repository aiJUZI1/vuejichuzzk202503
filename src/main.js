import { createApp } from 'vue'
import App from './App.vue'
import Ref from './components/Ref.vue'
import Vtext from './components/Vtext.vue'
import VBind from './components/VBind.vue'
import VON from './components/VON.vue'
import VModel from './components/VModel.vue'
import Vif from './components/Vif.vue'
import VSHOW from './components/VSHOW.vue'
// 确保 Reactive.vue 文件存在
import Reactive from './components/Reactive.vue'

// 创建多个应用
createApp(VSHOW).mount('#VSHOW')
createApp(Vif).mount('#Vif')
createApp(VModel).mount('#VModel')
createApp(VON).mount('#VON')
createApp(Vtext).mount('#Vtext')
createApp(VBind).mount('#VBind')
createApp(App).mount('#app')
createApp(Ref).mount('#Ref')
createApp(Reactive).mount('#Reactive')

