import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const p={},e=t(`<div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 最大值</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>

<span class="token comment">// 最小值</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token comment">// 绝对值</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5.6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5.6</span>

<span class="token comment">// 平方</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>

<span class="token comment">// 向上取整</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">4.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>

<span class="token comment">// 向下取整</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">3.8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

<span class="token comment">// 四舍五入</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">3.6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>

<span class="token comment">// 随机数</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number-format" tabindex="-1"><a class="header-anchor" href="#number-format"><span>number_format</span></a></h3><table><thead><tr><th>参数</th><th>描述</th><th>默认</th></tr></thead><tbody><tr><td>参数1</td><td>格式化数值</td><td>必填</td></tr><tr><td>参数2</td><td>保留几位小数</td><td>选填(默认不保留小数)</td></tr><tr><td>参数3</td><td>小数位分割符号</td><td>选填(默认 . )</td></tr><tr><td>参数4</td><td>千分位分割符号</td><td>选填(默认 , )</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token comment">// 千分位格式化函数</span>
<span class="token variable">$number</span> <span class="token operator">=</span> <span class="token number">213423143211234.567</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token function">number_format</span><span class="token punctuation">(</span><span class="token variable">$number</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;.&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 213,423,143,211,234.56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(u,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","05.shuxuehanshu.html.vue"]]),r=JSON.parse('{"path":"/docs/PHP/05.shuxuehanshu.html","title":"数学函数","lang":"zh-CN","frontmatter":{"title":"数学函数","date":"2023-02-15T00:00:00.000Z","tags":["php"]},"headers":[{"level":3,"title":"number_format","slug":"number-format","link":"#number-format","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/PHP/05.数学函数.md","readingTime":{"minutes":0.6,"words":181}}');export{d as comp,r as data};
