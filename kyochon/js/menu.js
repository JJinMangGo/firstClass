/* Example content for a design exercise, not confirmed commercial menu data. */
const menuItems = [
  {id:1,name:"허니 치킨",description:"달콤한 풍미를 강조한 치킨 메뉴 시안",category:"chicken",isNew:false},
  {id:2,name:"레드 치킨",description:"매콤한 맛을 강조한 치킨 메뉴 시안",category:"chicken",isNew:false},
  {id:3,name:"간장 치킨",description:"감칠맛을 강조한 치킨 메뉴 시안",category:"chicken",isNew:false},
  {id:4,name:"시그니처 신메뉴 A",description:"새로운 조합을 소개하는 예시 메뉴",category:"chicken",isNew:true},
  {id:5,name:"시그니처 신메뉴 B",description:"신메뉴 소개용 예시 메뉴",category:"side",isNew:true},
  {id:6,name:"웨지 감자",description:"치킨과 함께 즐기는 사이드 예시",category:"side",isNew:false},
  {id:7,name:"치즈볼",description:"한입에 즐기는 사이드 예시",category:"side",isNew:false},
  {id:8,name:"생맥주",description:"음료 카테고리 구성을 위한 예시",category:"drink",isNew:false},
  {id:9,name:"캔맥주",description:"음료 카테고리 구성을 위한 예시",category:"drink",isNew:false}
];
const labels={chicken:"CHICKEN",side:"SIDE",drink:"BEVERAGE"};
const imageIcon='<svg viewBox="0 0 36 36" fill="none" stroke-width="1.3" aria-hidden="true"><rect x="4" y="5" width="28" height="26" rx="1"/><circle cx="13" cy="13" r="3"/><path d="M6 27l9-9 6 6 4-4 5 5"/></svg>';
const grid=document.querySelector("#menu-grid");
const count=document.querySelector("#menu-count");
const empty=document.querySelector("#empty-state");
const buttons=[...document.querySelectorAll(".menu-tab")];

function makeCard(item) {
  const article=document.createElement("article");
  article.className="menu-card";
  const media=document.createElement("div");
  media.className="menu-media";
  const placeholder=document.createElement("div");
  placeholder.className="placeholder";
  placeholder.innerHTML=imageIcon+"<span>IMAGE PLACEHOLDER</span>";
  media.append(placeholder);
  if(item.isNew) {
    const tag=document.createElement("span");
    tag.className="tag";
    tag.textContent="NEW";
    media.append(tag);
  }
  const info=document.createElement("div");
  info.className="menu-card-info";
  const label=document.createElement("p");
  label.className="menu-card-category";
  label.textContent=labels[item.category];
  const title=document.createElement("h3");
  title.textContent=item.name;
  const desc=document.createElement("p");
  desc.textContent=item.description;
  info.append(label,title,desc);
  article.append(media,info);
  return article;
}

function renderMenu(filter) {
  const filtered=menuItems.filter(item=>filter==="all" || (filter==="new"?item.isNew:item.category===filter));
  grid.replaceChildren(...filtered.map(makeCard));
  count.textContent=String(filtered.length);
  empty.hidden=filtered.length!==0;
  buttons.forEach(button=>{
    const selected=button.dataset.filter===filter;
    button.classList.toggle("is-active",selected);
    button.setAttribute("aria-pressed",String(selected));
  });
}

buttons.forEach(button=>button.addEventListener("click",()=>renderMenu(button.dataset.filter)));
renderMenu("all");
