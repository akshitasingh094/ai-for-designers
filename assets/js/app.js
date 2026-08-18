/* ============================================================================
   APP — shared behaviour for the library pages.
   Currently powers the Prompt library (renderPrompts). Reads window.PROMPTS
   and window.PROMPT_CATEGORIES from the data file. No framework, no build.
   ========================================================================== */

/* ---- copy-to-clipboard, reusable ---------------------------------------- */
const ICON_COPY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const ICON_DONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
function setBtn(btn, label, icon){ btn.innerHTML = icon + '<span>' + label + '</span>'; }

function attachCopy(btn, getText){
  const label = (btn.dataset.label || btn.textContent || 'Copy').trim();
  btn.dataset.label = label;
  setBtn(btn, label, ICON_COPY);
  btn.addEventListener('click', async ()=>{
    try{
      await navigator.clipboard.writeText(getText());
      setBtn(btn, 'Copied', ICON_DONE); btn.classList.add('done');
      setTimeout(()=>{ setBtn(btn, label, ICON_COPY); btn.classList.remove('done'); }, 1400);
    }catch(e){ setBtn(btn, 'Select manually', ICON_COPY); }
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

/* ---- skills library ----------------------------------------------------- */
function renderSkills(){
  const mount = document.getElementById('skilllib');
  if(!mount || !window.SKILLS) return;

  const groups = window.SKILL_GROUPS;
  const items = window.SKILLS;
  let activeGroup = 'all';
  let query = '';

  const toolbar = document.getElementById('skilltoolbar');
  const count = document.createElement('div'); count.className='lib-count';

  const search = document.createElement('input');
  search.className='lib-search'; search.type='search';
  search.placeholder='Search skills, tags, tasks…';
  search.setAttribute('aria-label','Search skills');
  search.addEventListener('input', e=>{ query=e.target.value.toLowerCase().trim(); render(); });

  const chips = document.createElement('div'); chips.className='lib-chips'; chips.setAttribute('role','tablist');
  const mkChip=(id,label)=>{
    const b=document.createElement('button'); b.className='lib-chip'; b.type='button';
    b.textContent=label; b.dataset.g=id; b.setAttribute('role','tab');
    b.setAttribute('aria-selected', id==='all'?'true':'false');
    b.addEventListener('click',()=>{ activeGroup=id; chips.querySelectorAll('.lib-chip').forEach(x=>x.setAttribute('aria-selected',x.dataset.g===id?'true':'false')); render(); });
    return b;
  };
  chips.appendChild(mkChip('all','All'));
  groups.forEach(g=>chips.appendChild(mkChip(g.id,g.name)));

  toolbar.appendChild(search); toolbar.appendChild(chips); toolbar.appendChild(count);

  function matches(s){
    if(activeGroup!=='all' && s.group!==activeGroup) return false;
    if(!query) return true;
    const hay=(s.name+' '+s.desc+' '+s.purpose+' '+s.when+' '+(s.tags||[]).join(' ')).toLowerCase();
    return hay.includes(query);
  }

  function render(){
    const shown = items.filter(matches);
    count.textContent = shown.length + (shown.length===1?' skill':' skills');
    mount.innerHTML='';
    if(!shown.length){ mount.innerHTML='<p class="lib-empty">No skills match that. Try a different word, or clear the filter.</p>'; return; }

    groups.filter(g=>shown.some(s=>s.group===g.id)).forEach(g=>{
      const sec=document.createElement('section'); sec.className='lib-group'; sec.id='grp-'+g.id;
      sec.innerHTML='<div class="lib-group-head"><h2>'+g.name+'</h2><p>'+g.blurb+'</p></div>';
      const grid=document.createElement('div'); grid.className='lib-grid skill-grid';
      shown.filter(s=>s.group===g.id).forEach(s=>grid.appendChild(card(s)));
      sec.appendChild(grid); mount.appendChild(sec);
    });
  }

  function card(s){
    const el=document.createElement('article'); el.className='pcard scard'; el.id=s.name;
    const isUser = s.group==='user';
    const badge = isUser ? '/'+s.name : s.name;
    const tags=(s.tags||[]).slice(0,5).map(t=>'<span class="tag">'+t+'</span>').join('');
    el.innerHTML = `
      <div class="pcard-head">
        <span class="scard-badge ${isUser?'u':'m'}">${isUser?'❯ ':''}${badge}</span>
        <p class="pcard-desc">${s.purpose}</p>
      </div>
      <div class="pcard-when"><span class="eyebrow">${isUser?'When to use':'When it applies'}</span>${s.when}</div>
      <div class="scard-usage"><span class="eyebrow">${isUser?'Example':'In practice'}</span>
        <div class="scard-usage-line">${isUser?'<code>'+s.usage+'</code>':s.usage}</div>
        <p class="scard-returns">${s.returns}</p>
      </div>
      <details class="scard-install">
        <summary>Install — copy &amp; paste into your terminal</summary>
        <div class="codewrap">
          <pre></pre>
          <button class="copy" type="button" data-label="Copy install">Copy install</button>
        </div>
        <p class="scard-hint">Paste in your terminal. It writes the skill to <code>~/.claude/skills/${s.name}/</code> — no repo needed.${isUser?' Then type <code>/'+s.name+'</code> in Claude Code.':''}</p>
      </details>
      <div class="tags">${tags}</div>`;
    const pre=el.querySelector('pre'); pre.textContent=s.install;
    attachCopy(el.querySelector('.copy'), ()=>s.install);
    return el;
  }

  render();
  if(location.hash){ const t=document.getElementById(location.hash.slice(1)); if(t) t.scrollIntoView(); }
}

/* ---- subagents library -------------------------------------------------- */
function renderSubagents(){
  const mount = document.getElementById('sublib');
  if(!mount || !window.SUBAGENTS) return;
  const items = window.SUBAGENTS;
  let query='';

  const toolbar = document.getElementById('subtoolbar');
  const count = document.createElement('div'); count.className='lib-count';
  const search = document.createElement('input');
  search.className='lib-search'; search.type='search';
  search.placeholder='Search subagents, tags…';
  search.setAttribute('aria-label','Search subagents');
  search.addEventListener('input',e=>{ query=e.target.value.toLowerCase().trim(); render(); });
  toolbar.appendChild(search); toolbar.appendChild(count);

  function matches(s){
    if(!query) return true;
    return (s.name+' '+s.desc+' '+s.when+' '+(s.tags||[]).join(' ')).toLowerCase().includes(query);
  }
  function render(){
    const shown=items.filter(matches);
    count.textContent=shown.length+(shown.length===1?' subagent':' subagents');
    mount.innerHTML='';
    if(!shown.length){ mount.innerHTML='<p class="lib-empty">No subagents match that. Try a different word, or clear the filter.</p>'; return; }
    const grid=document.createElement('div'); grid.className='lib-grid skill-grid';
    shown.forEach(s=>grid.appendChild(card(s)));
    mount.appendChild(grid);
  }
  function card(s){
    const el=document.createElement('article'); el.className='pcard scard'; el.id=s.name;
    const tags=(s.tags||[]).slice(0,5).map(t=>'<span class="tag">'+t+'</span>').join('');
    const tools = s.tools ? `<span class="scard-tools">tools: ${s.tools}</span>` : '';
    el.innerHTML=`
      <div class="pcard-head">
        <span class="scard-badge sub">◆ ${s.name}</span>
        <p class="pcard-desc">${s.desc}</p>
      </div>
      <div class="pcard-when"><span class="eyebrow">Reach for it when</span>${s.when}</div>
      <div class="scard-usage"><span class="eyebrow">How it's invoked</span>
        <div class="scard-usage-line">${s.usage}</div>
        <p class="scard-returns">${s.returns}</p>${tools}
      </div>
      <details class="scard-install">
        <summary>Install — copy &amp; paste into your terminal</summary>
        <div class="codewrap"><pre></pre><button class="copy" type="button" data-label="Copy install">Copy install</button></div>
        <p class="scard-hint">Writes the agent to <code>~/.claude/agents/${s.name}.md</code>. Claude delegates to it automatically when a task matches, or ask for it by name.</p>
      </details>
      <div class="tags">${tags}</div>`;
    el.querySelector('pre').textContent=s.install;
    attachCopy(el.querySelector('.copy'), ()=>s.install);
    return el;
  }
  render();
  if(location.hash){ const t=document.getElementById(location.hash.slice(1)); if(t) t.scrollIntoView(); }
}

/* ---- workflows ---------------------------------------------------------- */
function renderWorkflows(){
  const mount = document.getElementById('wflib');
  if(!mount || !window.WORKFLOWS) return;
  const items = window.WORKFLOWS;
  let query='';

  const RUNG = {
    context:{label:'Context', cls:'ctx'},
    prompt:{label:'Prompt', cls:'t1'},
    skill:{label:'Skill', cls:'t2'},
    subagent:{label:'Subagent', cls:'t3'}
  };

  const toolbar = document.getElementById('wftoolbar');
  const count = document.createElement('div'); count.className='lib-count';
  const search = document.createElement('input');
  search.className='lib-search'; search.type='search';
  search.placeholder='Search workflows, tags…';
  search.setAttribute('aria-label','Search workflows');
  search.addEventListener('input',e=>{ query=e.target.value.toLowerCase().trim(); render(); });
  toolbar.appendChild(search); toolbar.appendChild(count);

  function matches(w){
    if(!query) return true;
    const hay=(w.title+' '+w.goal+' '+w.when+' '+(w.tags||[]).join(' ')+' '+w.steps.map(s=>s.label).join(' ')).toLowerCase();
    return hay.includes(query);
  }
  function render(){
    const shown=items.filter(matches);
    count.textContent=shown.length+(shown.length===1?' workflow':' workflows');
    mount.innerHTML='';
    if(!shown.length){ mount.innerHTML='<p class="lib-empty">No workflows match that. Try a different word, or clear the filter.</p>'; return; }
    shown.forEach(w=>mount.appendChild(card(w)));
  }
  function card(w){
    const el=document.createElement('article'); el.className='wf-card'; el.id=w.id;
    const tags=(w.tags||[]).slice(0,4).map(t=>'<span class="tag">'+t+'</span>').join('');
    const steps=w.steps.map(s=>{
      const r=RUNG[s.rung]||RUNG.prompt;
      const ref = s.ref ? `<a class="wf-ref" href="${s.ref.page}#${s.ref.id}">${s.ref.name} &rarr;</a>` : '';
      return `<li class="wf-step">
        <span class="wf-rung ${r.cls}">${r.label}</span>
        <div class="wf-step-body"><b>${s.label}</b><span>${s.detail}</span>${ref}</div>
      </li>`;
    }).join('');
    el.innerHTML=`
      <div class="wf-head">
        <h3>${w.title}</h3>
        <p class="wf-goal">${w.goal}</p>
        <div class="wf-when"><span class="eyebrow">When</span>${w.when}</div>
      </div>
      <ol class="wf-steps">${steps}</ol>
      <div class="wf-outcome"><span class="eyebrow">You end with</span>${w.outcome}</div>
      <div class="tags">${tags}</div>`;
    return el;
  }
  render();
  if(location.hash){ const t=document.getElementById(location.hash.slice(1)); if(t) t.scrollIntoView(); }
}

document.addEventListener('DOMContentLoaded', ()=>{
  wireStaticCode();
  renderPrompts();
  renderSkills();
  renderSubagents();
  renderWorkflows();
});
