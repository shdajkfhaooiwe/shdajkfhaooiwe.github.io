import{_ as s,o as n,c as a,a as t}from"./app-EaupiRXX.js";const p={},e=t(`<h3 id="样式绑定" tabindex="-1"><a class="header-anchor" href="#样式绑定"><span>样式绑定</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>绑定样式：
  <span class="token number">1.</span> <span class="token keyword">class</span>样式
    <span class="token literal-property property">写法</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;xxx&quot;</span> xxx可以是字符串、对象、数组。
       <span class="token comment">// 字符串写法适用于：类名不确定，要动态获取。</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;basic&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mood&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;changeMood&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> 
	  <span class="token literal-property property">mood</span><span class="token operator">:</span><span class="token string">&#39;normal&#39;</span>
        
      <span class="token comment">// 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;basic&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;classObj&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	  <span class="token literal-property property">classObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">normal1</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">normal2</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
        
      <span class="token comment">// 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;basic&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;classArr&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token literal-property property">classArr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;normal1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;normal2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;normal3&#39;</span><span class="token punctuation">]</span>

  <span class="token number">2.</span> <span class="token literal-property property">style样式</span>
    <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{fontSize: xxx}&quot;</span>其中xxx是动态值。
    	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 绑定style样式<span class="token operator">--</span>对象写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;basic&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;styleObj&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token literal-property property">styleObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>

	<span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;[a,b]&quot;</span>其中a、b是样式对象。
	  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 绑定style样式<span class="token operator">--</span>数组写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
	  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;basic&quot;</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;styleArr&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token literal-property property">styleArr</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;40px&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">&#39;gray&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scoped样式" tabindex="-1"><a class="header-anchor" href="#scoped样式"><span>scoped样式</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>作用：让样式在局部生效，防止冲突。

写法：&lt;style scoped&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function l(r,c){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","09.yangshibangding.html.vue"]]),k=JSON.parse('{"path":"/docs/Vue/09.yangshibangding.html","title":"样式绑定","lang":"zh-CN","frontmatter":{"title":"样式绑定","date":"2023-03-28T00:00:00.000Z","tags":["vue"],"categories":["vue"]},"headers":[{"level":3,"title":"样式绑定","slug":"样式绑定","link":"#样式绑定","children":[]},{"level":3,"title":"scoped样式","slug":"scoped样式","link":"#scoped样式","children":[]}],"git":{"createdTime":1680015807000,"updatedTime":1680015807000,"contributors":[{"name":"limou","email":"10554021+li-wei-xuan@user.noreply.gitee.com","commits":1}]},"filePathRelative":"docs/Vue/09.样式绑定.md","readingTime":{"minutes":0.81,"words":243}}');export{u as comp,k as data};
