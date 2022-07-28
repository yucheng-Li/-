# -响应式布局解决方案

## 主要思路
+   1. 全局使用rem 来编写
+   2. 端差异较大如 PC\Mobile 出两套设计稿，结合媒体查询来适配位置布局

```css
/* 核心代码 */
@media screen and (max-width: 1366px) {
        font-size: 7.32vw;

        @function px2rem($px) {
            @return $px / 100 * 1em;
        }
}
```