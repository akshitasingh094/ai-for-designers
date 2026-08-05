/* ============================================================================
   APP — shared behaviour for the library pages.
   Currently powers the Prompt library (renderPrompts). Reads window.PROMPTS
   and window.PROMPT_CATEGORIES from the data file. No framework, no build.
   ========================================================================== */

/* ---- copy-to-clipboard, reusable ---------------------------------------- */
function attachCopy(btn, getText){
  btn.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText(getText());
      const o = btn.dataset.label || btn.textContent;
      btn.textContent = 'Copied'; btn.classList.add('done');
      setTimeout(()=>{ btn.textContent = o; btn.classList.remove('done'); }, 1400);
    }catch(e){ btn.textContent = 'Select manually'; }
  });
}

/* attach to any static <pre> code blocks on the page */
function wireStaticCode(){
  document.querySelectorAll('.codewrap').forEach(w=>{
    if(w.querySelector('.copy')) return;
    const pre = w.querySelector('pre'); if(!pre) return;
    const b = document.createElement('button'); b.className='copy'; b.type='button'; b.textContent='Copy';
    attachCopy(b, ()=>pre.innerText);
    w.appendChild(b);
  });
}

/* ---- prompt library ----------------------------------------------------- */
function renderPrompts(){
  const mount = document.getElementById('lib');
  if(!mount || !window.PROMPTS) return;

  const cats = window.PROMPT_CATEGORIES;
  const items = window.PROMPTS;

  // state
  let activeCat = 'all';
  let query = '';

  // ---- toolbar ----
  const toolbar = document.getElementById('toolbar');
  const count = document.createElement('div');
  count.className = 'lib-count';

  const search = document.createElement('input');
  search.className = 'lib-search';
  search.type = 'search';
  search.placeholder = 'Search prompts, tags, tasks…';
  search.setAttribute('aria-label','Search prompts');

  const chips = document.createElement('div');
  chips.className = 'lib-chips';
  chips.setAttribute('role','tablist');
  const mkChip = (id, label)=>{
    const b = document.createElement('button');
    b.className = 'lib-chip'; b.type='button'; b.textContent = label;
    b.dataset.cat = id;
    b.setAttribute('role','tab');
    b.setAttribute('aria-selected', id==='all' ? 'true':'false');
    b.addEventListener('click', ()=>{ activeCat = id; syncChips(); render(); });
    return b;
  };
  chips.appendChild(mkChip('all','All'));
  cats.forEach(c=> chips.appendChild(mkChip(c.id, c.name)));

  function syncChips(){
    chips.querySelectorAll('.lib-chip').forEach(b=>{
      b.setAttribute('aria-selected', b.dataset.cat===activeCat ? 'true':'false');
    });
  }

  search.addEventListener('input', e=>{ query = e.target.value.toLowerCase().trim(); render(); });

  toolbar.appendChild(search);
  toolbar.appendChild(chips);
  toolbar.appendChild(count);

  // ---- render ----
  function matches(p){
    if(activeCat!=='all' && p.cat!==activeCat) return false;
    if(!query) return true;
    const hay = (p.title+' '+p.desc+' '+p.when+' '+(p.tags||[]).join(' ')+' '+p.cat).toLowerCase();
    return hay.includes(query);
  }

  function catName(id){ const c = cats.find(x=>x.id===id); return c?c.name:id; }

  function render(){
    const shown = items.filter(matches);
    count.textContent = shown.length + (shown.length===1?' prompt':' prompts');
    mount.innerHTML = '';

    if(!shown.length){
      mount.innerHTML = '<p class="lib-empty">No prompts match that. Try a different word, or clear the filter.</p>';
      return;
    }

    // group by category, preserving category order
    const order = cats.map(c=>c.id);
    const groups = {};
    shown.forEach(p=>{ (groups[p.cat] ||= []).push(p); });

    order.filter(id=>groups[id]).forEach(id=>{
      const c = cats.find(x=>x.id===id);
      const sec = document.createElement('section');
      sec.className = 'lib-group';
      sec.id = 'cat-'+id;
      sec.innerHTML =
        '<div class="lib-group-head"><h2>'+c.name+'</h2><p>'+c.blurb+'</p></div>';
      const grid = document.createElement('div');
      grid.className = 'lib-grid';
      groups[id].forEach(p=> grid.appendChild(card(p)));
      sec.appendChild(grid);
      mount.appendChild(sec);
    });
  }

  function card(p){
    const el = document.createElement('article');
    el.className = 'pcard';
    el.id = p.id;

    const tags = (p.tags||[]).slice(0,5)
      .map(t=>'<span class="tag">'+t+'</span>').join('');

    el.innerHTML = `
      <div class="pcard-head">
        <span class="pcard-cat">${catName(p.cat)}</span>
        <h3>${p.title}</h3>
        <p class="pcard-desc">${p.desc}</p>
      </div>
      <div class="pcard-when"><span class="eyebrow">When to use</span>${p.when}</div>
      <div class="codewrap pcard-pre">
        <pre></pre>
        <button class="copy pcard-copy" type="button" data-label="Copy prompt">Copy prompt</button>
      </div>
      ${p.example ? `<details class="pcard-ex"><summary>Example — Acme</summary><p>${p.example}</p></details>` : ''}
      <div class="tags">${tags}</div>
    `;
    // set prompt text as textContent (avoids HTML-escaping issues) and wire copy
    const pre = el.querySelector('pre');
    pre.textContent = p.prompt;
    attachCopy(el.querySelector('.pcard-copy'), ()=>p.prompt);
    return el;
  }

  render();

  // deep-link to a prompt by hash
  if(location.hash){
    const t = document.getElementById(location.hash.slice(1));
    if(t) t.scrollIntoView();
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  wireStaticCode();
  renderPrompts();
});
