import addShopType from "./shop/addShopType"
import list from"./shop/list"
import pageInfo from "./common/pageInfo"
const components = {
    addShopType,
    list,
    pageInfo
}
export default {
    install(Vue){
        // Vue.component("addShopType",addShopType);
        for(var key in components){
            Vue.component(key,components[key])
        }

    }
}