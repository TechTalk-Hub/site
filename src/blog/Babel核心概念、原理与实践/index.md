---
title: Babel核心概念、原理与实践
pubDate: 2024-05-08
description: '介绍Babel核心概念、原理和实践的一篇文章，读者可以学到AST相关的概念、具体的应用、Babel的插件开发等等'
author: 'wosmer@gmail.com'
image:
    url: './image.png'
    alt: 'About Babel pic.'
tags: ["astro", "blogging", "learning in public"]
---

## Babel是什么？

babel 是一个转译器，暴露了很多 api，用这些 api 可以完成代码到 AST 的解析、转换、以及目标代码的生成。

## Babel在前端工具中的定位

主要有以下场景：

1. 语法转换。主要是语法降级或者是源码转换，比如jsx
2. polyfill特性的实现和接入
3. 源码转换，比如jsx

换成支持的能力来说：

1. 使用最新的 JavaScript 功能编写代码
2. 将其转换为在旧环境中运行的兼容代码
3. 根据其要求定位特定环境

![alt text](image-2.png)

## Babel的编译过程

![alt text](image-3.png)

Babel处理流程是 代码 -> 代码 的过程，主要的流程分三步：

1. parse：通过 parser 把源码转成抽象语法树（AST）
2. transform：遍历 AST，调用各种 transform 插件对 AST 进行增删改
3. generate：把转换后的 AST 打印成目标代码，并生成 sourcemap

## AST（抽象语法树）

下边是代码`console.log('hello world')`对应的AST:

![alt text](image-4.png)

Program、CallExpression、Identifier 这些都是节点的类型，每个节点都是一个有意义的语法单元。 这些节点类型定义了一些属性来描述节点的信息

所以，直观点来讲就是一个js对象，包含节点和节点信息。

## Babel核心包

这些核心的包除了在Babel内部使用，同时也提供给开发者，比如开发Babel的插件就会用到

|Package| Purpose |
|---|---|
|@babel/core |转换管道的主要入口点和编排
|@babel/parser |将 JavaScript 代码解析为抽象语法树 （AST）
|@babel/traverse  |处理 AST 遍历并支持转换
|@babel/generator|从 AST 生成 JavaScript 代码
|@babel/types |用于 AST 节点创建、验证和操作的工具包
|@babel/template  |基于模板的 AST 节点创建实用程序