// ==UserScript==
// @name         万龙觉醒H5GG自动采集脚本
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  自动采集《万龙觉醒》H5GG版中的资源
// @author       Liqishan123
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 定义目标资源的标识符（需要根据游戏实际情况调整）
    const RESOURCE_SELECTOR = '.resource-node'; // 假设资源节点的CSS选择器
    const COLLECT_BUTTON_SELECTOR = '.collect-button'; // 假设采集按钮的CSS选择器

    // 自动采集函数
    function autoCollectResources() {
        // 查找所有资源节点
        const resourceNodes = document.querySelectorAll(RESOURCE_SELECTOR);

        if (resourceNodes.length === 0) {
            console.log('未找到可采集的资源节点');
            return;
        }

        // 遍历资源节点并尝试采集
        resourceNodes.forEach(node => {
            console.log('发现资源节点:', node);

            // 模拟点击资源节点（假设点击后会弹出采集按钮）
            node.click();

            // 等待采集按钮出现
            setTimeout(() => {
                const collectButton = node.querySelector(COLLECT_BUTTON_SELECTOR);
                if (collectButton) {
                    console.log('点击采集按钮');
                    collectButton.click();
                } else {
                    console.log('未找到采集按钮');
                }
            }, 1000); // 等待1秒
        });
    }

    // 启动自动采集
    console.log('启动自动采集脚本');
    setInterval(autoCollectResources, 5000); // 每5秒执行一次采集
})();
