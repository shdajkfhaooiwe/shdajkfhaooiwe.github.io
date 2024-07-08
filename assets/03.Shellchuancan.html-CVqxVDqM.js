import{_ as t,r as l,o as i,c,b as n,e as s,d as o,a as e}from"./app-EaupiRXX.js";const r={},d=e(`<h3 id="shell-传递参数" tabindex="-1"><a class="header-anchor" href="#shell-传递参数"><span>Shell 传递参数</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>我们可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：<span class="token variable">$n</span>。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……

$ <span class="token function">chmod</span> +x test.sh 
$ ./test.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
Shell 传递参数实例！
执行的文件名：./test.sh
第一个参数为：1
第二个参数为：2
第三个参数为：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊字符用来处理参数" tabindex="-1"><a class="header-anchor" href="#特殊字符用来处理参数"><span>特殊字符用来处理参数</span></a></h3>`,3),p=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"参数处理."),n("th",{style:{"text-align":"center"}},"说明")])],-1),u=n("tr",null,[n("td",{style:{"text-align":"center"}},"$#"),n("td",{style:{"text-align":"center"}},"传递到脚本的参数个数")],-1),h=n("tr",null,[n("td",{style:{"text-align":"center"}},"$*"),n("td",{style:{"text-align":"center"}},'以一个单字符串显示所有向脚本传递的参数。 如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。')],-1),v=n("tr",null,[n("td",{style:{"text-align":"center"}},"$$"),n("td",{style:{"text-align":"center"}},"脚本运行的当前进程ID号")],-1),m=n("tr",null,[n("td",{style:{"text-align":"center"}},"$!"),n("td",{style:{"text-align":"center"}},"后台运行的最后一个进程的ID号")],-1),b=n("tr",null,[n("td",{style:{"text-align":"center"}},"$@"),n("td",{style:{"text-align":"center"}},'与$*相同，但是使用时加引号，并在引号中返回每个参数。 如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。')],-1),k=n("td",{style:{"text-align":"center"}},"$-",-1),g={style:{"text-align":"center"}},_={href:"https://www.runoob.com/linux/linux-comm-set.html",target:"_blank",rel:"noopener noreferrer"},$=n("tr",null,[n("td",{style:{"text-align":"center"}},"$?"),n("td",{style:{"text-align":"center"}},"显示最后命令的退出状态。0表示没有错误，其他任何值表明有错误。")],-1),x=e(`<h3 id="与-区别" tabindex="-1"><a class="header-anchor" href="#与-区别"><span>$* 与 $@ 区别</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>相同点：都是引用所有参数。
不同点：只有在双引号中体现出来。假设在脚本运行时写了三个参数 <span class="token number">1</span>、2、3，，则 <span class="token string">&quot; * &quot;</span> 等价于 <span class="token string">&quot;1 2 3&quot;</span>（传递了一个参数），而 <span class="token string">&quot;@&quot;</span> 等价于 <span class="token string">&quot;1&quot;</span> <span class="token string">&quot;2&quot;</span> <span class="token string">&quot;3&quot;</span>（传递了三个参数）。

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-- \\<span class="token variable">$*</span> 演示 ---&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;-- \\<span class="token variable">$@</span> 演示 ---&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>

$ <span class="token function">chmod</span> +x test.sh 
$ ./test.sh <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
-- <span class="token variable">$*</span> 演示 ---
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
-- <span class="token variable">$@</span> 演示 ---
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function y(q,f){const a=l("ExternalLinkIcon");return i(),c("div",null,[d,n("table",null,[p,n("tbody",null,[u,h,v,m,b,n("tr",null,[k,n("td",g,[s("显示Shell使用的当前选项，与"),n("a",_,[s("set命令"),o(a)]),s("功能相同。")])]),$])]),x])}const w=t(r,[["render",y],["__file","03.Shellchuancan.html.vue"]]),N=JSON.parse('{"path":"/docs/Shell/03.Shellchuancan.html","title":"Shell传参","lang":"zh-CN","frontmatter":{"title":"Shell传参","date":"2023-02-15T00:00:00.000Z","tags":["Shell"]},"headers":[{"level":3,"title":"Shell 传递参数","slug":"shell-传递参数","link":"#shell-传递参数","children":[]},{"level":3,"title":"特殊字符用来处理参数","slug":"特殊字符用来处理参数","link":"#特殊字符用来处理参数","children":[]},{"level":3,"title":"$* 与 $@ 区别","slug":"与-区别","link":"#与-区别","children":[]}],"git":{"createdTime":1679887873000,"updatedTime":1679887873000,"contributors":[{"name":"liweijiang","email":"916215061@qq.com","commits":1}]},"filePathRelative":"docs/Shell/03.Shell传参.md","readingTime":{"minutes":1.42,"words":426}}');export{w as comp,N as data};
