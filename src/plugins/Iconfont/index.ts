import { h } from 'vue'
import * as icons from '@ant-design/icons-vue'
import type { App } from 'vue'

type Props = {
    name: string
}

export const iconFont = (props: Props) => {
    const { name } = props

    // @ts-ignore  
    const IconComponent = icons[name]
    return h(IconComponent)
}

iconFont.props = ['name']

const init = (app: App) => {
    app.component('IconFont', iconFont)
}

export default init