const date = function (v) {
     var date = new Date(v);
     return date.getFullYear() + "-" +
         ((date.getMonth() + 1)).toString().padStart(2, "0") + "-" +
         (date.getDate()).toString().padStart(2, "0") + " " +
         (date.getHours()).toString().padStart(2, "0") + ":" +
         (date.getMinutes()).toString().padStart(2, "0") + ":" +
         (date.getSeconds()).toString().padStart(2, "0")
 }
 const currency =(v,n=2)=>"$"+v.toFixed(n)


 export default {
     install(Vue){
         Vue.filter("date",date);
         Vue.filter("currency",currency);
     }
 }