(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=async o=>{if(!o)throw new Error("Endpoint inexistente");return await(await fetch(o)).json()};const d=document.querySelector(".container-cards"),l="http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json",u="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/",m=(o,s,c)=>{const n=document.createElement("div");n.classList.add("card");const e=document.createElement("h3");e.classList.add("name"),e.innerHTML=o,n.appendChild(e);const t=document.createElement("img");t.classList.add("img"),t.src=s,t.alt=o,n.appendChild(t);const r=document.createElement("p");r.classList.add("describe"),r.innerHTML=c,n.appendChild(r),d.appendChild(n)},p=async()=>{const o=await a(l);if(o){const{data:s}=o;Object.entries(s).forEach(([n,{image:e,title:t}])=>{const r=`${e.full.split(".")[0]}_0.jpg`,i=`${u}${r}`;m(n,i,t)})}};window.onload=()=>{p()};
