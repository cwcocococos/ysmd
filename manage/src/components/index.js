import addShopType from "./shop/addShopType"
import addShop from "./shop/addShop"
import list from"./shop/list"
import pageInfo from "./common/pageInfo"
import pageInfoTwo from "./common/pageInfoTwo"
import addGoodsType from "./goods/addGoodsType"
const components = {
    addShopType,
    list,
    pageInfo,
    addShop,
    pageInfoTwo,
    addGoodsType
}
export default {
    install(Vue){
        // Vue.component("addShopType",addShopType);
        for(var key in components){
            Vue.component(key,components[key])
        }

    }
}