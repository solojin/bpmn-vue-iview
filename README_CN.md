[English](./README.md) | 简体中文

# bpmn-vue-iview

[![NPM Version](http://img.shields.io/npm/v/workflow-bpmn-modeler.svg?style=flat)](https://www.npmjs.org/package/workflow-bpmn-modeler)
[![NPM Downloads](https://img.shields.io/npm/dm/workflow-bpmn-modeler.svg?style=flat)](https://www.npmjs.org/package/workflow-bpmn-modeler)
![](https://img.shields.io/badge/license-MIT-000000.svg)

🔥 本项目基于 'vue' 、 'bpmn.io@7.0' 、 'iview@4.7' and 'workflow-bpmn-modeler@0.2.8'，实现 flowable 的工作流设计器

## 预览 📟

![20200930030243](https://cdn.jsdelivr.net/gh/goldsubmarine/cdn@master/blog/20200930030243.png)

## 安装 ⏳

```bash
# 安装
yarn add bpmn-vue-iview
```

## 使用说明 👣

```vue
<template>
  <div>
    <bpmn-modeler
      ref="refNode"
      :xml="xml"
      :users="users"
      :groups="groups"
      :categorys="categorys"
      :is-view="false"
      @save="save"
    />
  </div>
</template>

<script>
import bpmnModeler from "bpmn-vue-iview";

export default {
  components: {
    bpmnModeler,
  },
  data() {
    return {
      xml: "", // 后端查询到的xml
      users: [
        { name: "披头士", id: "1" },
        { name: "滚石乐队", id: "2" },
        { name: "平克·佛洛伊德", id: "3" },
      ],
      groups: [
        { name: "web", id: "4" },
        { name: "java", id: "5" },
        { name: "python", id: "6" },
      ],
      categorys: [
        { name: "音乐", id: "7" },
        { name: "文章", id: "8" },
      ],
    };
  },
  methods: {
    getModelDetail() {
      // 发送请求，获取xml
      // this.xml = response.xml
    },
    save(data) {
      console.log(data);  // { process: {...}, xml: '...', svg: '...' }
    },
  },
};
</script>
```

## License 📄

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, jinyangjie
