import { yarg } from './config'

// console.log(process.argv)
// console.log(yarg)


(async()=>{
    await main()
})()

async function main(){
    
    console.log("🚀 ~ main ~ yarg.base:", yarg.base)
}
