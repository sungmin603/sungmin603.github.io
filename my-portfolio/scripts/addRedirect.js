const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../build/404.html");
let html = fs.readFileSync(filePath, "utf8");

// SPA redirect: 잘못된 경로 접근 시 index.html 로 로드
// 브라우저 경로 그대로 유지
const redirectScript = `
<script type="text/javascript">
  // 현재 경로가 index.html이 아닌 경우
  if (!location.pathname.endsWith('index.html')) {
    // index.html 로 로드, 브라우저 경로 유지
    location.replace(location.origin + '/index.html' + location.search + location.hash);
  }
</script>
`;

html = html.replace("<head>", `<head>${redirectScript}`);
fs.writeFileSync(filePath, html, "utf8");

console.log("SPA redirect script added to 404.html");
