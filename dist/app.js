const STORAGE = {
  language: 'tafaqqad-lang', demo: 'tafaqqad-demo', page: 'tafaqqad-page',
  logins: 'tafaqqad-imported-logins', imports: 'tafaqqad-import-history',
  notes: 'tafaqqad-notes', incidentStatus: 'tafaqqad-incident-status', linkDecision: 'tafaqqad-link-decision'
};

const copy = {
  ar: {
    brand:'تَفَقَّدْ', tagline:'التحليلات الأمنية', platform:'تَفَقَّدْ — منصة التحليلات الأمنية', eyebrow:'مركز العمليات الأمنية', language:'English', import:'استيراد البيانات', status:'الأنظمة تعمل بصورة طبيعية', about:'عن المنصة',
    overview:'نظرة عامة', incidents:'الحوادث الأمنية', logins:'تسجيلات الدخول المشبوهة', vulnerabilities:'إدارة الثغرات', phishing:'تحليل رسائل التصيّد',
    welcome:'رؤية أمنية أوضح، واستجابة أسرع', welcomeText:'راقب مؤشرات الخطر، رتّب الأولويات، وانتقل من الملاحظة إلى الإجراء من مكان واحد.', tryDemo:'تجربة البيانات التجريبية', demo:'البيانات المعروضة تجريبية لأغراض الاستكشاف.', clearDemo:'مسح البيانات التجريبية',
    openIncidents:'الحوادث المفتوحة', suspiciousLogins:'تسجيلات الدخول المشبوهة', openVulns:'الثغرات المفتوحة', suspiciousEmails:'الرسائل المشبوهة',
    incidentHelp:'افتح حادثًا واربط الأدلة به وحدّث حالته.', loginHelp:'استورد ملف CSV لعرض الحساب والوقت ونتيجة المحاولة.', vulnHelp:'استورد تقرير الثغرات لمراجعة الأجهزة والخطورة.', phishHelp:'ارفع رسالة .eml لتحليل المرسل والروابط والمرفقات.',
    newIncident:'فتح حادث', uploadCsv:'استيراد ملف CSV', uploadReport:'استيراد تقرير الثغرات', uploadEml:'رفع رسالة .eml', downloadTemplate:'تحميل قالب CSV', exportCsv:'تصدير CSV', clearFilters:'مسح الفلاتر',
    searchLogin:'ابحثي بالحساب أو عنوان IP…', searchIncident:'ابحثي برقم الحادث أو الحساب…', searchVuln:'ابحثي بالجهاز أو معرّف CVE…', searchPhish:'ابحثي بالمرسل أو الموضوع…', matching:'نتيجة مطابقة', noMatches:'لا توجد نتائج تطابق الفلاتر الحالية', noData:'لا توجد بيانات بعد', emptyLogin:'ارفعي ملف سجلات الدخول أو جرّبي البيانات التجريبية', emptyGeneric:'استوردي بياناتك أو جرّبي البيانات التجريبية',
    account:'الحساب', time:'الوقت', result:'نتيجة المحاولة', reason:'سبب الاشتباه', ip:'عنوان IP', source:'المصدر', imported:'مستورد', demoSource:'تجريبي',
    title:'العنوان', severity:'الخطورة', statusLabel:'الحالة', duration:'مدة المعالجة', device:'الجهاز', vulnerability:'الثغرة', sender:'المرسل', subject:'الموضوع', signals:'أسباب الاشتباه',
    all:'الكل', high:'عالية', medium:'متوسطة', low:'منخفضة', newStatus:'جديد', investigating:'قيد التحقيق', closed:'مغلق', open:'مفتوح', fixed:'مُصلح', insufficient:'بيانات غير كافية',
    preview:'معاينة الاستيراد', sampleRows:'عينة من الصفوف', missing:'الأعمدة الناقصة', noneMissing:'لا توجد أعمدة ناقصة', cancel:'إلغاء', confirm:'تأكيد الاستيراد', added:'سجلات مضافة', duplicates:'سجلات مكررة', rejected:'صفوف مرفوضة', importResult:'نتيجة الاستيراد', importedAt:'وقت الاستيراد',
    requiredColumns:'الأعمدة المطلوبة: account, time, attempt_result. عمود ip اختياري.', invalidCsv:'تعذّر قراءة الملف أو لا يحتوي على بيانات.', importedSuccess:'تم استيراد سجلات الدخول',
    aboutTitle:'عن تَفَقَّدْ', aboutText:'تَفَقَّدْ تعني Inspect: منصة لفحص الإشارات وربط الأدلة وتسريع الاستجابة.', incidentDetails:'تفاصيل الحادث', back:'العودة إلى الحوادث', print:'طباعة ملخص الحادث', analystNotes:'ملاحظات المحلّل', saveNotes:'حفظ الملاحظات', closeIncident:'إغلاق الحادث', notesSaved:'تم حفظ الملاحظات',
    suggested:'ارتباط مقترح', linkReason:'الحساب نفسه، وحدث تسجيل الدخول بعد بلاغ التصيّد بـ١٢ دقيقة.', confirmLink:'تأكيد الربط', dismissLink:'استبعاد الربط', timeline:'الخط الزمني للتحقيق', safePreview:'معاينة آمنة للرسالة', menu:'فتح القائمة'
  },
  en: {
    brand:'Tafaqqad', tagline:'Security Analytics', platform:'Tafaqqad — Security Analytics Platform', eyebrow:'Security Operations Center', language:'العربية', import:'Import Data', status:'All systems operational', about:'About the platform',
    overview:'Overview', incidents:'Security Incidents', logins:'Suspicious Logins', vulnerabilities:'Vulnerability Management', phishing:'Phishing Email Analysis',
    welcome:'Sharper security insight. Faster response.', welcomeText:'Monitor risk signals, prioritize what matters, and move from observation to action.', tryDemo:'Try Demo Data', demo:'You are viewing demo data for exploration.', clearDemo:'Clear demo data',
    openIncidents:'Open incidents', suspiciousLogins:'Suspicious logins', openVulns:'Open vulnerabilities', suspiciousEmails:'Suspicious emails',
    incidentHelp:'Open an incident, link evidence, and update its status.', loginHelp:'Import a CSV file to view the account, time, and attempt result.', vulnHelp:'Import a vulnerability report to review devices and severity.', phishHelp:'Upload an .eml message to inspect the sender, links, and attachments.',
    newIncident:'Open Incident', uploadCsv:'Import CSV', uploadReport:'Import Vulnerability Report', uploadEml:'Upload .eml', downloadTemplate:'Download CSV Template', exportCsv:'Export CSV', clearFilters:'Clear Filters',
    searchLogin:'Search by account or IP address…', searchIncident:'Search by incident ID or account…', searchVuln:'Search by device or CVE ID…', searchPhish:'Search by sender or subject…', matching:'matching results', noMatches:'No results match the current filters', noData:'No data yet', emptyLogin:'Upload a login log file or try the demo data', emptyGeneric:'Import your data or try the demo data',
    account:'Account', time:'Time', result:'Attempt result', reason:'Suspicion reason', ip:'IP address', source:'Source', imported:'Imported', demoSource:'Demo',
    title:'Title', severity:'Severity', statusLabel:'Status', duration:'Resolution time', device:'Device', vulnerability:'Vulnerability', sender:'Sender', subject:'Subject', signals:'Suspicion signals',
    all:'All', high:'High', medium:'Medium', low:'Low', newStatus:'New', investigating:'Investigating', closed:'Closed', open:'Open', fixed:'Fixed', insufficient:'Insufficient Data',
    preview:'Import Preview', sampleRows:'Sample rows', missing:'Missing columns', noneMissing:'No missing columns', cancel:'Cancel', confirm:'Confirm Import', added:'Records added', duplicates:'Duplicates', rejected:'Rejected rows', importResult:'Import result', importedAt:'Imported at',
    requiredColumns:'Required columns: account, time, attempt_result. The ip column is optional.', invalidCsv:'The file could not be read or contains no data.', importedSuccess:'Login records imported',
    aboutTitle:'About Tafaqqad', aboutText:'Tafaqqad means Inspect: a platform for examining signals, linking evidence, and accelerating response.', incidentDetails:'Incident Details', back:'Back to incidents', print:'Print Incident Summary', analystNotes:'Analyst notes', saveNotes:'Save Notes', closeIncident:'Close Incident', notesSaved:'Notes saved',
    suggested:'Suggested Link', linkReason:'Same account, and the login event occurred 12 minutes after the phishing report.', confirmLink:'Confirm Link', dismissLink:'Dismiss Link', timeline:'Investigation timeline', safePreview:'Safe Message Preview', menu:'Open menu'
  }
};

const demoData = {
  logins: [
    {account:'s.alqahtani@company.sa',time:'2026-11-17T09:42:00Z',attempt_result:'success',ip:'185.220.101.4',reason:'Successful login after five failed attempts',source:'demo'},
    {account:'admin@company.sa',time:'2026-11-17T08:16:00Z',attempt_result:'failed',ip:'45.155.205.9',reason:'Repeated failed attempts',source:'demo'}
  ],
  incidents:[['INC-2408','Unauthorized access attempt','high','investigating','—'],['INC-2402','Malware detected','high','closed','1h 12m']],
  vulnerabilities:[['SRV-PROD-04','CVE-2026-21841','high','open'],['FIN-LAP-118','CVE-2026-10992','medium','fixed']],
  phishing:[['security-update@micros0ft.support','Urgent security update','Reply-to domain mismatch','high']]
};

const state = {
  lang: localStorage.getItem(STORAGE.language) || 'ar',
  page: sessionStorage.getItem(STORAGE.page) || 'overview',
  demo: localStorage.getItem(STORAGE.demo) === 'true',
  search:'', filter:'all', pendingImport:null,
  importedLogins: readJson(STORAGE.logins, []),
  imports: readJson(STORAGE.imports, []),
  incidentStatus: localStorage.getItem(STORAGE.incidentStatus) || 'investigating',
  linkDecision: localStorage.getItem(STORAGE.linkDecision) || 'pending'
};

const navKeys=['overview','incidents','logins','vulnerabilities','phishing'];
const icons={overview:'◫',incidents:'⚑',logins:'↪',vulnerabilities:'◇',phishing:'✉'};
const $=selector=>document.querySelector(selector);
const tr=()=>copy[state.lang];

function readJson(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function saveState(){localStorage.setItem(STORAGE.language,state.lang);localStorage.setItem(STORAGE.demo,String(state.demo));sessionStorage.setItem(STORAGE.page,state.page)}
function allLogins(){return [...state.importedLogins,...(state.demo?demoData.logins:[])]}
function navigate(page){state.page=page;state.search='';state.filter='all';saveState();closeMenu();render()}

function render(){renderChrome();const content=$('#content');if(state.page==='overview')content.innerHTML=overviewView();else if(state.page==='about')content.innerHTML=aboutView();else if(state.page==='incident-detail')content.innerHTML=incidentView();else content.innerHTML=sectionView(state.page);hydrateLoginTable();bindViewEvents();if(state.page==='incident-detail')setNotesValue()}

function renderChrome(){document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='ar'?'rtl':'ltr';document.title=tr().platform;$('#brandName').textContent=tr().brand;$('#brandTagline').textContent=tr().tagline;$('#eyebrow').textContent=tr().eyebrow;$('#pageTitle').textContent=state.page==='about'?tr().aboutTitle:state.page==='incident-detail'?tr().incidentDetails:tr()[state.page];$('#languageButton').textContent=tr().language;$('#importButton').textContent=tr().import;$('#systemStatus').textContent=tr().status;$('#aboutButton').innerHTML=`<span class="nav-icon">ⓘ</span><span>${tr().about}</span>`;$('#demoBanner').hidden=!state.demo;$('#demoText').textContent=tr().demo;$('#clearDemo').textContent=tr().clearDemo;$('#menuButton').setAttribute('aria-label',tr().menu);renderNav()}
function renderNav(){$('#nav').innerHTML=navKeys.map(key=>`<button class="nav-button ${state.page===key?'active':''}" data-page="${key}"><span class="nav-icon">${icons[key]}</span><span>${tr()[key]}</span></button>`).join('')}

function overviewView(){const cards=[['incidents','openIncidents',state.demo?1:0],['logins','suspiciousLogins',allLogins().length],['vulnerabilities','openVulns',state.demo?1:0],['phishing','suspiciousEmails',state.demo?1:0]];return `<div class="hero"><div><h2>${tr().welcome}</h2><p>${tr().welcomeText}</p></div><button class="primary-button" id="tryDemo">${tr().tryDemo}</button></div><div class="cards">${cards.map(([page,label,count])=>`<button class="metric-card" data-card="${page}"><span class="metric-icon">${icons[page]}</span><div class="metric-value">${count||'—'}</div><div class="metric-label">${tr()[label]}</div></button>`).join('')}</div>`}
function aboutView(){return `<div class="about-page"><p class="lead">${tr().aboutText}</p></div>`}

function sectionView(page){const hasData=page==='logins'?allLogins().length>0:state.demo;if(!hasData)return emptyView(page);const rows=filteredRows(page);const actionKey={incidents:'newIncident',logins:'uploadCsv',vulnerabilities:'uploadReport',phishing:'uploadEml'}[page];return `<div class="panel"><div class="panel-header section-titlebar"><div><h2>${tr()[page]}</h2><p>${sectionHelp(page)}</p></div><div class="section-buttons"><button class="secondary-button" id="exportButton">${tr().exportCsv}</button>${page==='logins'?`<button class="secondary-button" id="templateButton">${tr().downloadTemplate}</button>`:''}<button class="primary-button" id="sectionAction">${tr()[actionKey]}</button></div></div><div class="filter-row advanced-filter"><input id="searchInput" value="${escapeAttr(state.search)}" placeholder="${searchPlaceholder(page)}"><select id="filterSelect">${filterOptions(page)}</select><button class="ghost-button" id="clearFilters">${tr().clearFilters}</button></div><div class="results-count"><strong>${rows.length}</strong> ${tr().matching}</div>${rows.length?tableView(page,rows):`<div class="no-results"><p>${tr().noMatches}</p><button class="text-link" id="clearEmpty">${tr().clearFilters}</button></div>`}</div>`}
function emptyView(page){const action={incidents:'newIncident',logins:'uploadCsv',vulnerabilities:'uploadReport',phishing:'uploadEml'}[page];return `<div class="panel contextual-empty"><div class="empty-icon">⌁</div><h2>${tr().noData}</h2><p>${page==='logins'?tr().emptyLogin:tr().emptyGeneric}</p><div class="empty-actions">${page==='logins'?`<button class="secondary-button" id="templateButton">${tr().downloadTemplate}</button>`:''}<button class="primary-button" id="sectionAction">${tr()[action]}</button><button class="secondary-button" id="tryDemo">${tr().tryDemo}</button></div></div>`}
function sectionHelp(page){return tr()[{incidents:'incidentHelp',logins:'loginHelp',vulnerabilities:'vulnHelp',phishing:'phishHelp'}[page]]}
function searchPlaceholder(page){return tr()[{incidents:'searchIncident',logins:'searchLogin',vulnerabilities:'searchVuln',phishing:'searchPhish'}[page]]}
function filterOptions(page){if(page==='incidents')return optionList([['all',tr().all],['investigating',tr().investigating],['closed',tr().closed]]);if(page==='logins')return optionList([['all',tr().all],['success','Success'],['failed','Failed']]);return optionList([['all',tr().all],['high',tr().high],['medium',tr().medium],['low',tr().low]])}
function optionList(items){return items.map(([value,label])=>`<option value="${value}" ${state.filter===value?'selected':''}>${label}</option>`).join('')}

function filteredRows(page){const q=state.search.trim().toLowerCase();let rows=page==='logins'?allLogins():demoData[page];return rows.filter(row=>{const values=Array.isArray(row)?row:Object.values(row);const text=values.join(' ').toLowerCase();const filterMatch=state.filter==='all'||values.includes(state.filter);return filterMatch&&text.includes(q)})}
function tableView(page,rows){if(page==='logins')return loginTable(rows);const heads=page==='incidents'?['title','severity','statusLabel','duration']:page==='vulnerabilities'?['device','vulnerability','severity','statusLabel']:['sender','subject','signals','severity'];return `<div class="table-wrap"><table><thead><tr>${heads.map(key=>`<th>${tr()[key]}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((cell,index)=>`<td class="${index===0?'ltr':''}">${['high','medium','low','open','fixed','closed','investigating'].includes(cell)?badge(cell):escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function loginTable(rows){state.visibleLoginRows=rows;return '<div class="table-wrap"><table id="loginTable"><thead></thead><tbody></tbody></table></div>'}
function hydrateLoginTable(){const table=$('#loginTable');if(!table)return;const headerRow=document.createElement('tr');[tr().account,tr().time,tr().result,tr().ip,tr().source].forEach(label=>{const th=document.createElement('th');th.textContent=label;headerRow.append(th)});table.tHead.append(headerRow);(state.visibleLoginRows||[]).forEach(record=>{const row=document.createElement('tr');const values=[record.account,formatDate(record.time),record.attempt_result,record.ip||'—'];values.forEach((value,index)=>{const cell=document.createElement('td');cell.textContent=value;if(index===0||index===1||index===3)cell.className='ltr';row.append(cell)});const sourceCell=document.createElement('td');const badge=document.createElement('span');badge.className=`badge ${record.source==='imported'?'fixed':'medium'}`;badge.textContent=record.source==='imported'?tr().imported:tr().demoSource;sourceCell.append(badge);if(record.source==='imported'){const meta=document.createElement('small');meta.className='import-meta';meta.textContent=`${record.fileName} · ${formatDate(record.importedAt)}`;sourceCell.append(document.createElement('br'),meta)}row.append(sourceCell);table.tBodies[0].append(row)})}
function badge(value){const label={high:tr().high,medium:tr().medium,low:tr().low,open:tr().open,fixed:tr().fixed,closed:tr().closed,investigating:tr().investigating}[value]||value;return `<span class="badge ${value}">${label}</span>`}

function incidentView(){return `<div class="incident-toolbar"><button class="back-link" id="backButton">← ${tr().back}</button><button class="secondary-button" id="printButton">${tr().print}</button></div><section class="incident-head panel"><div><span class="incident-id">INC-2408</span><h2>Unauthorized access attempt</h2><p class="ltr">17 Nov 2026 · 08:51</p></div>${badge(state.incidentStatus)}</section><section class="suggested-link"><div><span class="suggested-label">${tr().suggested}</span><h3>${tr().linkReason}</h3></div><div class="suggested-actions"><button class="primary-button" id="confirmLink">${tr().confirmLink}</button><button class="secondary-button" id="dismissLink">${tr().dismissLink}</button></div></section><div class="incident-layout"><section class="panel timeline-panel"><div class="panel-header"><h3>${tr().timeline}</h3></div><div class="timeline"><article><span class="timeline-time ltr">08:43</span><div><b>✉ ${tr().phishing}</b><p>Reply-to domain mismatch</p></div></article><article><span class="timeline-time ltr">08:51–09:42</span><div><b>↪ ${tr().logins}</b><p>Successful login after five failed attempts</p></div></article></div><section class="safe-email"><span class="safe-badge">${tr().safePreview}</span><p>We detected unusual activity. Review your account settings.</p><div class="defanged-link ltr">hxxps://secure-access[.]cc/session</div></section></section><aside class="panel notes-card"><h3>${tr().analystNotes}</h3><textarea id="analystNotes"></textarea><button class="secondary-button" id="saveNotes">${tr().saveNotes}</button><button class="primary-button danger-button" id="closeIncident">${tr().closeIncident}</button></aside></div>`}
function setNotesValue(){const field=$('#analystNotes');if(field)field.value=localStorage.getItem(STORAGE.notes)||''}

function bindViewEvents(){document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.page)));document.querySelectorAll('[data-card]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.card)));$('#tryDemo')?.addEventListener('click',()=>{state.demo=true;saveState();render()});$('#sectionAction')?.addEventListener('click',handleSectionAction);$('#templateButton')?.addEventListener('click',downloadLoginTemplate);$('#exportButton')?.addEventListener('click',exportCurrent);$('#clearFilters')?.addEventListener('click',clearFilters);$('#clearEmpty')?.addEventListener('click',clearFilters);$('#searchInput')?.addEventListener('input',handleSearch);$('#filterSelect')?.addEventListener('change',event=>{state.filter=event.target.value;render()});$('#backButton')?.addEventListener('click',()=>navigate('incidents'));$('#printButton')?.addEventListener('click',()=>window.print());$('#saveNotes')?.addEventListener('click',saveNotes);$('#closeIncident')?.addEventListener('click',()=>{state.incidentStatus='closed';localStorage.setItem(STORAGE.incidentStatus,'closed');render()});$('#confirmLink')?.addEventListener('click',()=>saveLinkDecision('confirmed'));$('#dismissLink')?.addEventListener('click',()=>saveLinkDecision('dismissed'))}
function handleSearch(event){const value=event.target.value;state.search=value;render();const input=$('#searchInput');input?.focus();input?.setSelectionRange(value.length,value.length)}
function clearFilters(){state.search='';state.filter='all';render()}
function handleSectionAction(){if(state.page==='logins')openFilePicker('.csv');else if(state.page==='incidents')showToast(tr().newIncident);else openFilePicker(state.page==='phishing'?'.eml':'.csv')}
function saveNotes(){localStorage.setItem(STORAGE.notes,$('#analystNotes').value);showToast(tr().notesSaved)}
function saveLinkDecision(value){state.linkDecision=value;localStorage.setItem(STORAGE.linkDecision,value);showToast(value==='confirmed'?tr().confirmLink:tr().dismissLink)}

function openFilePicker(accept){const input=$('#fileInput');input.accept=accept;input.click()}
$('#fileInput').addEventListener('change',event=>{const file=event.target.files[0];event.target.value='';if(!file)return;if(state.page==='logins'&&file.name.toLowerCase().endsWith('.csv'))readLoginCsv(file);else showToast(tr().invalidCsv)})

function readLoginCsv(file){const reader=new FileReader();reader.onload=()=>{try{const matrix=parseCsv(String(reader.result));if(matrix.length<2)throw new Error('empty');const headers=matrix[0].map(normalizeHeader);const required=['account','time','attempt_result'];const missing=required.filter(name=>!headers.includes(name));const preview=matrix.slice(1,6);state.pendingImport={fileName:file.name,importedAt:new Date().toISOString(),headers,rows:matrix.slice(1),missing};showLoginPreview(preview)}catch{showToast(tr().invalidCsv)}};reader.onerror=()=>showToast(tr().invalidCsv);reader.readAsText(file)}
function normalizeHeader(value){const key=value.trim().toLowerCase().replace(/\s+/g,'_');return ({email:'account',timestamp:'time',result:'attempt_result',attempt:'attempt_result','ip_address':'ip'}[key]||key)}
function parseCsv(text){const rows=[];let row=[],cell='',quoted=false;for(let i=0;i<text.length;i++){const char=text[i],next=text[i+1];if(char==='"'&&quoted&&next==='"'){cell+='"';i++}else if(char==='"'){quoted=!quoted}else if(char===','&&!quoted){row.push(cell);cell=''}else if((char==='\n'||char==='\r')&&!quoted){if(char==='\r'&&next==='\n')i++;row.push(cell);if(row.some(value=>value.trim()!==''))rows.push(row);row=[];cell=''}else cell+=char}row.push(cell);if(row.some(value=>value.trim()!==''))rows.push(row);return rows}

function showLoginPreview(previewRows){const pending=state.pendingImport;const modal=createModal();const head=document.createElement('div');head.className='modal-head';const titles=document.createElement('div');const small=document.createElement('small');small.textContent=tr().preview;const title=document.createElement('h2');title.textContent=pending.fileName;titles.append(small,title);head.append(titles,modalCloseButton(modal));modal.box.append(head);
  const hint=document.createElement('p');hint.textContent=tr().requiredColumns;modal.box.append(hint);
  const missing=document.createElement('div');missing.className='missing-box';missing.textContent=`${tr().missing}: ${pending.missing.length?pending.missing.join(', '):tr().noneMissing}`;modal.box.append(missing);
  const heading=document.createElement('h3');heading.textContent=tr().sampleRows;modal.box.append(heading);
  const wrap=document.createElement('div');wrap.className='table-wrap preview-table';const table=document.createElement('table');const headerRow=document.createElement('tr');pending.headers.forEach(value=>{const th=document.createElement('th');th.textContent=value;headerRow.append(th)});table.append(headerRow);previewRows.forEach(values=>{const row=document.createElement('tr');pending.headers.forEach((_,index)=>{const td=document.createElement('td');td.textContent=values[index]??'';row.append(td)});table.append(row)});wrap.append(table);modal.box.append(wrap);
  const actions=document.createElement('div');actions.className='modal-actions';const cancel=button(tr().cancel,'secondary-button');cancel.addEventListener('click',()=>modal.root.remove());const confirm=button(tr().confirm,'primary-button');confirm.disabled=pending.missing.length>0;confirm.addEventListener('click',()=>{modal.root.remove();commitLoginImport()});actions.append(cancel,confirm);modal.box.append(actions)}

function commitLoginImport(){const pending=state.pendingImport;const index=Object.fromEntries(pending.headers.map((name,i)=>[name,i]));const existing=new Set(state.importedLogins.map(loginKey));const added=[];let duplicates=0,rejected=0;pending.rows.forEach(values=>{const record={account:(values[index.account]||'').trim(),time:(values[index.time]||'').trim(),attempt_result:(values[index.attempt_result]||'').trim().toLowerCase(),ip:index.ip===undefined?'':(values[index.ip]||'').trim(),reason:'',source:'imported',fileName:pending.fileName,importedAt:pending.importedAt};if(!record.account||!isValidDate(record.time)||!record.attempt_result){rejected++;return}const key=loginKey(record);if(existing.has(key)){duplicates++;return}existing.add(key);added.push(record)});state.importedLogins.push(...added);state.imports.push({fileName:pending.fileName,importedAt:pending.importedAt,added:added.length,duplicates,rejected});localStorage.setItem(STORAGE.logins,JSON.stringify(state.importedLogins));localStorage.setItem(STORAGE.imports,JSON.stringify(state.imports));state.pendingImport=null;showImportResult(added.length,duplicates,rejected);render()}
function loginKey(record){return [record.account.toLowerCase(),new Date(record.time).toISOString(),record.attempt_result,record.ip].join('|')}
function isValidDate(value){return value&&Number.isFinite(new Date(value).getTime())}

function showImportResult(added,duplicates,rejected){const modal=createModal();const head=document.createElement('div');head.className='modal-head';const title=document.createElement('h2');title.textContent=tr().importResult;head.append(title,modalCloseButton(modal));modal.box.append(head);const stats=document.createElement('div');stats.className='import-stats';[[added,tr().added],[duplicates,tr().duplicates],[rejected,tr().rejected]].forEach(([number,label])=>{const card=document.createElement('article');const strong=document.createElement('strong');strong.textContent=number;const span=document.createElement('span');span.textContent=label;card.append(strong,span);stats.append(card)});modal.box.append(stats)}
function createModal(){const root=document.createElement('div');root.className='modal-backdrop';const box=document.createElement('div');box.className='modal';box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');root.append(box);root.addEventListener('click',event=>{if(event.target===root)root.remove()});document.body.append(root);return{root,box}}
function modalCloseButton(modal){const close=button('×','modal-close');close.setAttribute('aria-label',tr().cancel);close.addEventListener('click',()=>modal.root.remove());return close}
function button(label,className){const element=document.createElement('button');element.type='button';element.className=className;element.textContent=label;return element}

function downloadLoginTemplate(){downloadText('tafaqqad-login-template.csv','account,time,attempt_result,ip\nuser@company.sa,2026-11-17T09:42:00Z,success,192.0.2.10')}
function exportCurrent(){const rows=filteredRows(state.page);let matrix;if(state.page==='logins')matrix=[['account','time','attempt_result','ip','source'],...rows.map(row=>[row.account,row.time,row.attempt_result,row.ip,row.source])];else matrix=rows;downloadText(`${state.page}-filtered.csv`,matrix.map(row=>row.map(csvCell).join(',')).join('\n'))}
function downloadText(fileName,text){const blob=new Blob(['\ufeff'+text],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download=fileName;document.body.append(anchor);anchor.click();anchor.remove();URL.revokeObjectURL(url)}
function csvCell(value){const string=String(value??'');return /[",\n]/.test(string)?`"${string.replace(/"/g,'""')}"`:string}

function showToast(message){const toast=$('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2400)}
function closeMenu(){$('#sidebar').classList.remove('open');$('#scrim').classList.remove('show');$('#menuButton').setAttribute('aria-expanded','false')}
function formatDate(value){const date=new Date(value);return Number.isFinite(date.getTime())?date.toLocaleString(state.lang==='ar'?'ar-SA':'en-GB'):value}
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]))}
function escapeAttr(value){return escapeHtml(value)}

$('#languageButton').addEventListener('click',()=>{state.lang=state.lang==='ar'?'en':'ar';saveState();render()});
$('#importButton').addEventListener('click',()=>{if(state.page!=='logins')navigate('logins');openFilePicker('.csv')});
$('#aboutButton').addEventListener('click',()=>navigate('about'));
$('#clearDemo').addEventListener('click',()=>{state.demo=false;saveState();render()});
$('#menuButton').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('open');$('#scrim').classList.toggle('show',open);$('#menuButton').setAttribute('aria-expanded',String(open))});
$('#scrim').addEventListener('click',closeMenu);

render();
