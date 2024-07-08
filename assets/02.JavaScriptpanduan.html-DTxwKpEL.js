import{_ as n,o as s,c as a,a as t}from"./app-EaupiRXX.js";const p={},e=t(`<h2 id="javascript判断空字符串-空对象-空数组-null-undefined-nan" tabindex="-1"><a class="header-anchor" href="#javascript判断空字符串-空对象-空数组-null-undefined-nan"><span>JavaScript判断空字符串，空对象，空数组，null，undefined，NaN</span></a></h2><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>JavaScript在if判断中，空字符串， 0， NaN， false，null，undefined都为false。<br> 0、空字符串和false归为一类，称为&quot;假值&quot;。<br> null 和 undefined 归为一类，称为&quot;空值&quot;。</p></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token comment">//根源：</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">==</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空字符串" tabindex="-1"><a class="header-anchor" href="#空字符串"><span>空字符串</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//判断是否为空字符串</span>
  <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>tmp<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;空字符串&#39;</span><span class="token punctuation">)</span> <span class="token comment">//空字符串</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空对象" tabindex="-1"><a class="header-anchor" href="#空对象"><span>空对象</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 判断是否为空对象</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span> <span class="token comment">//{}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;{}&#39;</span><span class="token punctuation">)</span> <span class="token comment">// JSON.stringify(tmp)不等于{}，类型不同</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span> <span class="token comment">//{}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空数组" tabindex="-1"><a class="header-anchor" href="#空数组"><span>空数组</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 判断是否为空数组</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> tmp<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;array&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> tmp<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;array&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>null</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 判断是否为null</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tmp <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;undefined&quot;</span> <span class="token operator">&amp;&amp;</span> tmp <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;null&quot;</span><span class="token punctuation">)</span> <span class="token comment">//null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;null&quot;</span><span class="token punctuation">)</span> <span class="token comment">//null</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span>undefined</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//判断undefined</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token comment">//undefined</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token comment">//undefined</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nan" tabindex="-1"><a class="header-anchor" href="#nan"><span>NaN</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//判断是否为NaN</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;NaN&quot;</span><span class="token punctuation">)</span> <span class="token comment">//NaN</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;NaN&quot;</span><span class="token punctuation">)</span> <span class="token comment">//NaN</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","02.JavaScriptpanduan.html.vue"]]),d=JSON.parse('{"path":"/docs/JavaScript/02.JavaScriptpanduan.html","title":"JavaScript判断","lang":"zh-CN","frontmatter":{"title":"JavaScript判断","date":"2022-09-28T00:00:00.000Z","tags":["JavaScript"],"categories":["JavaScript"]},"headers":[{"level":2,"title":"JavaScript判断空字符串，空对象，空数组，null，undefined，NaN","slug":"javascript判断空字符串-空对象-空数组-null-undefined-nan","link":"#javascript判断空字符串-空对象-空数组-null-undefined-nan","children":[{"level":3,"title":"空字符串","slug":"空字符串","link":"#空字符串","children":[]},{"level":3,"title":"空对象","slug":"空对象","link":"#空对象","children":[]},{"level":3,"title":"空数组","slug":"空数组","link":"#空数组","children":[]},{"level":3,"title":"null","slug":"null","link":"#null","children":[]},{"level":3,"title":"undefined","slug":"undefined","link":"#undefined","children":[]},{"level":3,"title":"NaN","slug":"nan","link":"#nan","children":[]}]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/JavaScript/02.JavaScript判断.md","readingTime":{"minutes":0.91,"words":274}}');export{r as comp,d as data};
