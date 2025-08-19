const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../build/404.html");
let html = fs.readFileSync(filePath, "utf8");

// GitHub Pages SPA redirect
// 잘못된 경로 접근 시 index.html을 불러오되, 브라우저 주소는 그대로 유지
const redirectScript = `
<script type="text/javascript">
  (function() {
    var redirectPath = sessionStorage.getItem("redirectPath");
    if (!redirectPath) {
      // 404.html이 로드된 경우, 현재 경로를 저장하고 index.html로 이동
      sessionStorage.setItem("redirectPath", location.pathname + location.search + location.hash);
      window.location.replace(location.origin + location.pathname.replace(/\\/[^/]*$/, '') + "/index.html");
    } else {
      // index.html이 로드된 경우, 저장된 경로로 주소창만 복원
      history.replaceState(null, "", redirectPath);
      sessionStorage.removeItem("redirectPath");
    }
  })();
</script>
`;

html = html.replace("<head>", `<head>${redirectScript}`);
fs.writeFileSync(filePath, html, "utf8");

console.log("SPA redirect script added to 404.html");
