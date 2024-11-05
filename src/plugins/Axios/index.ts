
import { useInterfaces } from '@/plugins/Store/index'
import { AxiosModules, Interfaces, InterfacesItem } from '@/types/index'

const init = async () => {
    const modules: AxiosModules = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })
    const interfaces: Interfaces = {}
    const { setInterfaces } = useInterfaces()

    for (const path in modules) {
        modules[path].forEach((item: InterfacesItem) => {
            const { category, name } = item
            const key = `${category}/${name}`
            if (!Reflect.has(interfaces, key)) {
                interfaces[key] = item
            }
        })
    }
    setInterfaces(interfaces)
}

export default init