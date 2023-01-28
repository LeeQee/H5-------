// const host = window.location.host
// //* 如果想要在本地调试线上环境，手动取消下面这行代码的注释：
// // const isProd = true;
// const isProd = host === 'www.knowledgesource.cn';
// //! 但一定要在推送代码/打包时改回到上面这行代码！

// const localUrl = isProd ? 'https://www.knowledgesource.cn' : 'https://zkcx.cxstar.cn'
// const baseUrl = isProd ? 'https://www.knowledgesource.cn' : 'https://zkcx.cxstar.cn'
// const fileUrl = isProd ? 'https://file.knowledgesource.cn' : 'https://file.cxstar.cn'

/** 测试环境 */
// const localUrl = 'http://chandao.cxstar/zentao';
// const baseUrl = 'http://chandao.cxstar/zentao';
const localUrl = 'http://58.218.154.78:5000';
const baseUrl = 'http://58.218.154.78:5000';
const fileUrl = 'https://file.cxstar.cn';

/** 线上环境环境 */
// const localUrl = 'https://www.knowledgesource.cn';
// const baseUrl = 'https://www.knowledgesource.cn';
// const fileUrl = 'https://file.cxstar.cn';

/** 预发布环境-ip */
// const localUrl = 'http://159.226.241.205';
// const baseUrl = 'http://159.226.241.205';
// const fileUrl = 'https://file.knowledgesource.cn';

/** 预发布环境-预发布 */
// const localUrl = 'https://pre.knowledgesource.cn';
// const baseUrl = 'https://pre.knowledgesource.cn';
// const fileUrl = 'https://file.knowledgesource.cn';

/** 预发布环境-正式 */
// const localUrl = 'https://www.knowledgesource.cn';
// const baseUrl = 'https://www.knowledgesource.cn';
// const fileUrl = 'https://file.knowledgesource.cn';


const coverapi = "/api/v1/fileredirect/file?ruid=";
export default {
    fileUrl,
    localUrl,
    baseUrl,
    coverapi,
    checkIsNotEmpty(val){
        if(val!=undefined&&val!=null&&val!=""&&val.trim()!=""&&val!=" "){
            return true
        }else{
            return false
        }
    }
}
