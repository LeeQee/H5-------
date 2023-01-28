const host = window.location.host;

/** 测试环境 */
const localUrl = "http://chandao.xx/zentao";
const baseUrl = "http://chandao.xx/zentao";
const fileUrl = "https://file.xx.cn";

const coverapi = "/api/v1/fileredirect/file?ruid=";
export default {
  fileUrl,
  localUrl,
  baseUrl,
  coverapi,
  checkIsNotEmpty(val) {
    if (
      val != undefined &&
      val != null &&
      val != "" &&
      val.trim() != "" &&
      val != " "
    ) {
      return true;
    } else {
      return false;
    }
  }
};
