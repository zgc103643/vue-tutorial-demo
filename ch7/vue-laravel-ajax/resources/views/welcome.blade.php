<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="root">
      <ul v-for="task in tasks">
          <li>@{{ task }}</li>
      </ul>
    </div>

    <script src="https://cdn.bootcss.com/vue/2.2.6/vue.js"></script>
    <script src="https://cdn.bootcss.com/axios/0.16.1/axios.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
</body>
</html>