<h1> Gblog</h1>

## Nextjs && Notion API 를 이용한 블로그 !!

### 🔧 사용 스택

<div style={}>
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img  src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
<img  src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" />
</div>

## 파일 구조

```
┣ components
┃ ┣ footer.js
┃ ┣ header.js
┃ ┣ Infinite.js
┃ ┣ profile.js
┃ ┣ tag.js
┃ ┣ themeChange.jsx
┣ lib
┃ ┣ notion.js
┃ ┣ storageData.js
┃ ┗ themeContext.js
┣ page
┃ ┣ _app.js
┃ ┣ _document.js
┃ ┣ [id].js
┃ ┗ index.js
┣ styles
┃ ┣ global.js
┃ ┗theme.js
┣ .babelrc
┣ .env.local
┣ .eslintrc.json
┣ .gitignore
┣ .prettierrc
┣ next.config.js

```

### 1 notion database 데이터 추가

#### 1.getStaticprops 정리
