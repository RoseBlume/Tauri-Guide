class m extends HTMLElement{constructor(){super(),window.addEventListener("DOMContentLoaded",()=>{const i=this.querySelector("form.pagefind-ui__form"),n=this.querySelector("input.pagefind-ui__search-input"),s=this.querySelector("button.pagefind-ui__search-clear"),y=Array.from(this.children).filter(e=>e.classList.contains("card-grid"));Array.from(this.children).filter(e=>e instanceof HTMLHeadingElement||e instanceof HTMLParagraphElement).forEach((e,r)=>{const t=document.createElement("p");t.classList.add("hidden","warning"),t.id=`warn-${r}`,t.innerHTML=`
						<style>
							.warning {
								font-style: italic;
								color: var(--sl-color-text);
								font-size: larger;
							}
							.hidden {
								display: none;
							}
						</style>
						<span>No results found in ${e.textContent}</span>
						`,e.insertAdjacentElement("afterend",t)});const d=document.querySelectorAll('[id^="warn-"]');i.addEventListener("submit",e=>{e.preventDefault()}),i.addEventListener("keydown",e=>{s.classList.remove("pagefind-ui__suppressed"),e.key==="Escape"?c():e.key==="Enter"&&e.preventDefault()}),n.addEventListener("keydown",e=>{e.key==="Enter"&&e.preventDefault()}),n.addEventListener("keyup",()=>{o()}),s.addEventListener("click",()=>{s.classList.add("pagefind-ui__suppressed"),c()});function c(){n.value="",o()}function o(){const e=n.value.toUpperCase();y.forEach((r,t)=>{const l=Array.from(r.children);let a=l.length;l.forEach(f=>{const u=f,p=f.querySelector("span"),h=p?.textContent||p?.innerText;h&&(h.toUpperCase().indexOf(e)>-1?(a++,u.style.display=""):(a--,u.style.display="none"),a===0?d[t].classList.remove("hidden"):d[t].classList.add("hidden"))})})}})}}customElements.define("card-search",m);
