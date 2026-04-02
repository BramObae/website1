// MED AID Kenya — Application Logic
// Health Accountability Platform
// All data, rendering, and interaction logic

// ===== DATA STORE =====
let DB = {
  complaints: [
    {id:'MED-2026-0892',category:'Doctor / Staff Absenteeism',facility:'Kenyatta National Hospital',county:'Nairobi',desc:'The paediatric ward had no doctor on duty for over 6 hours on Wednesday morning. There were more than 40 children and their guardians waiting. Nurses were overwhelmed and unable to provide medical care. A child with a high fever was left unattended. When I asked the nurse, she said the doctor had not come in and they could not reach him.',date:'2026-03-20',anon:true,name:'',contact:'',emergency:false,upvotes:47,comments:[{author:'Concerned Parent',text:'This happened to my child too last month. Same ward, same story.',time:'2 days ago',avatar:'👩'},{author:'KNH Staff (Anon)',text:'Management is aware but refuses to enforce attendance. We are tired of covering up.',time:'1 day ago',avatar:'👨‍⚕️'}],files:[],status:'inreview',response:'',voted:false,donated:0},
    {id:'MED-2026-0891',category:'Insurance Overcharging',facility:'Mombasa Coast General Hospital',county:'Mombasa',desc:'I have a valid NHIF card covering my husband\'s admission for malaria treatment. The hospital\'s accounts department demanded Ksh 45,000 in cash before they would release him and let the NHIF process. They said NHIF does not cover all costs but refused to show us an itemised bill. My husband was detained for 3 days over this. We had to borrow money from family.',date:'2026-03-19',anon:false,name:'Fatuma Abdallah',contact:'0712345678',emergency:false,upvotes:89,comments:[{author:'NHIF Watch Kenya',text:'This is systematic. Coast General does this routinely. Complaint filed with NHIF board already.',time:'3 days ago',avatar:'📋'}],files:['Receipt_Hospital_March2026.pdf','NHIF_Card_Scan.jpg'],status:'escalated',response:'Ministry has contacted NHIF and Coast General management. Investigation opened. Reference: MOH/INS/2026/087',voted:false,donated:0},
    {id:'MED-2026-0890',category:'Patient Neglect or Mistreatment',facility:'Pumwani Maternity Hospital',county:'Nairobi',desc:'My wife was in labour for 11 hours. No midwife attended to her for the last 4 hours of labour. When I went to call for help, I was told rudely to wait outside. My wife gave birth almost unassisted while a nurse was on her phone nearby. The baby needed resuscitation which was delayed by nearly 10 minutes. The baby survived but we were traumatised.',date:'2026-03-18',anon:false,name:'James Wafula',contact:'0723456789',emergency:true,upvotes:234,comments:[{author:'Dr. A. Kamau',text:'This is obstetric negligence. This case should be reported to the Kenya Medical Practitioners Board.',time:'4 days ago',avatar:'👨‍⚕️'},{author:'Anonymous Mother',text:'Same thing happened to me at Pumwani 2 months ago. Glad someone is speaking up.',time:'3 days ago',avatar:'👩'},{author:'Maternal Health Kenya NGO',text:'We are documenting this case. Please contact us at 0800720601 for legal support.',time:'2 days ago',avatar:'🏥'}],files:['Hospital_Admission_Record.jpg'],status:'escalated',response:'Ministry has escalated to Nairobi County Health Executive and Kenya Medical Practitioners Board. Formal investigation underway.',voted:false,donated:0},
    {id:'MED-2026-0889',category:'Drug / Equipment Shortage',facility:'Kisumu County Referral Hospital',county:'Kisumu',desc:'The hospital has had no insulin available for diabetic patients for 3 weeks. Patients are being told to buy insulin from private chemists at their own cost — some at Ksh 3,500 per vial. Poor patients cannot afford this and are going untreated. I spoke to the pharmacy and they said the procurement department has not ordered stock.',date:'2026-03-17',anon:true,name:'',contact:'',emergency:false,upvotes:156,comments:[{author:'Dr. Grace Otieno',text:'KEMSA supply chain failure. This is a national issue not just Kisumu. 17 counties have reported the same.',time:'5 days ago',avatar:'👩‍⚕️'}],files:[],status:'new',response:'',voted:false,donated:0},
    {id:'MED-2026-0888',category:'Discharge Detention (Unpaid Fees)',facility:'Naivasha Sub-County Hospital',county:'Nakuru',desc:'My mother was kept in the hospital for 8 days after being declared medically fit for discharge because she could not pay her bill of Ksh 18,000. She is 68 years old. The hospital locked her ward and told her she cannot leave until payment is made. This is illegal under Kenyan law but the hospital does not care.',date:'2026-03-16',anon:false,name:'Peter Njoroge',contact:'0734567890',emergency:false,upvotes:112,comments:[{author:'Legal Aid Kenya',text:'Under Section 36 of the Health Act, detaining a patient over fees is ILLEGAL. Please call 0800724466 for free legal help.',time:'6 days ago',avatar:'⚖️'}],files:['Mothers_Discharge_Order.jpg','Hospital_Bill.pdf'],status:'resolved',response:'Nakuru County Health Executive has ordered the immediate release of all detained patients at Naivasha Sub-County Hospital. Hospital administrator issued formal warning. Patient has been released.',voted:false,donated:0},
    {id:'MED-2026-0887',category:'Insurance Overcharging',facility:'Aga Khan University Hospital',county:'Nairobi',desc:'I have SHA insurance through my employer. The hospital insisted on a Ksh 80,000 deposit before admitting me for a planned procedure despite my insurance covering 100% of the costs. When I showed them my insurance documents, they said they could not confirm with the insurer until the next business day and required the deposit in the meantime. This is a rich people\'s hospital but even rich people should not be exploited.',date:'2026-03-15',anon:false,name:'Miriam Omondi',contact:'0745678901',emergency:false,upvotes:78,comments:[],files:[],status:'inreview',response:'',voted:false,donated:0},
  ],
  resolutions: [
    {id:'RES-2026-034',complaint:'MED-2026-0890',title:'Pumwani Maternity Hospital — Obstetric Negligence Investigation',body:'Following multiple complaints received regarding maternity care standards at Pumwani Maternity Hospital, the Ministry of Health has taken the following actions: (1) Formal investigation launched by the Kenya Medical Practitioners and Dentists Council. (2) Nairobi County Health Executive directed to conduct unannounced inspection. (3) All nursing staff on duty during reported incidents placed on administrative review. (4) Hospital Chief Nursing Officer summoned for disciplinary hearing scheduled for 28 March 2026.',type:'Investigation Launched',date:'2026-03-21',officer:'CS Health — Hon. Dr. S. Mutuku'},
    {id:'RES-2026-033',complaint:'MED-2026-0888',title:'Patient Detention at Naivasha Sub-County Hospital — Immediate Release Ordered',body:'This Ministry has received and verified complaints of illegal patient detention at Naivasha Sub-County Hospital, Nakuru County. Under Section 36 of the Health Act 2017, no hospital may detain a patient on grounds of non-payment of fees. The following actions have been taken: (1) Hospital administrator formally warned. (2) All currently detained patients immediately released. (3) Nakuru County Health Executive directed to conduct county-wide audit of detention practices. (4) Matter referred to DPP for prosecution if further violations occur.',type:'Disciplinary Action Taken',date:'2026-03-20',officer:'Director of Health Services'},
    {id:'RES-2026-032',complaint:'MED-2026-0891',title:'NHIF Overcharging at Coast General Hospital',body:'The Ministry of Health in collaboration with the Social Health Authority (SHA/NHIF) has launched a formal audit of billing practices at Mombasa Coast General Hospital following documented complaints of insurance overcharging. Patients who were billed out-of-pocket amounts inconsistent with their insurance cover between January and March 2026 are encouraged to submit their receipts to SHA offices for reimbursement review.',type:'Insurance Probe Initiated',date:'2026-03-19',officer:'SHA Director — Ms. A. Mwangi'},
  ],
  activism: [
    {type:'Doctor / Health Worker Strike Notice',org:'Kenya Medical Practitioners, Pharmacists and Dentists Union (KMPDU)',title:'7-Day Strike Notice — Full Industrial Action from 1 April 2026',body:'KMPDU hereby serves formal 7-day strike notice effective today, 22 March 2026. Industrial action shall commence at 00:01 hours on 1 April 2026 unless the Government of Kenya honours the 2017 CBA which remains 89% unimplemented. Key demands: (1) Full implementation of salary structures. (2) Provision of medical malpractice insurance for all public doctors. (3) Deployment of 3,000 doctors to understaffed counties. (4) Posting of all intern doctors within 30 days of graduation. Emergency services shall be maintained.',date:'2026-03-22',actionDate:'2026-04-01',files:['KMPDU_Strike_Notice_Signed.pdf'],supports:1456,supported:false},
    {type:'Planned Demonstration',org:'Beba Mzigo Activists',title:'Peaceful March to Ministry of Health Headquarters — 29 March 2026',body:'We are calling on all concerned Kenyans to join us for a peaceful march from Uhuru Park to the Ministry of Health headquarters on Upper Hill on 29 March 2026 at 10:00 AM. Our demands: End illegal patient detention in all public hospitals. Full SHA implementation. Accountability for hospital drug theft. Stop misuse of county health budgets. Bring identification. This is a lawful assembly under Article 37 of the Constitution.',date:'2026-03-21',actionDate:'2026-03-29',files:[],supports:3892,supported:false},
    {type:'Lobby Group Petition',org:'Nurses Association of Kenya (NAK)',title:'Petition: Staffing Crisis at Level 4 and 5 Hospitals',body:'NAK presents this petition to the Cabinet Secretary for Health and all 47 County Health Executives. Public health facilities are operating at 40% staffing capacity due to delays in employment and deployment. The nurse-to-patient ratio in most wards is 1:80 against the WHO recommended 1:6. We demand: (1) Immediate employment of 5,000 qualified nurses on payroll. (2) Rural hardship allowance implementation. (3) End to unpaid internship placements.',date:'2026-03-18',actionDate:'2026-03-31',files:['NAK_Petition_Signed.pdf','Staffing_Data_2026.xlsx'],supports:2341,supported:false},
  ],
  donations: [
    {id:'DON-001',name:'Mama Grace Wanjiku',age:64,county:'Kiambu',story:'Held at Thika Level 5 Hospital for 3 weeks after total hip replacement. Hospital bill: Ksh 87,000. Family has already paid Ksh 50,000. Needs Ksh 37,000 to be released.',target:37000,raised:28500,avatar:'👵',completed:false,complaintId:'MED-2026-0871'},
    {id:'DON-002',name:'Baby Amani Ochieng (4 months)',age:0,county:'Kisumu',story:'Admitted for malnutrition and chest infection. Mother is a single parent, domestic worker. Hospital bill: Ksh 22,000. Mother cannot leave work or she loses her job.',target:22000,raised:19800,avatar:'👶',completed:false,complaintId:''},
    {id:'DON-003',name:'Hassan Aden (32)',age:32,county:'Garissa',story:'Road accident victim. Three broken limbs. Hospital cost Ksh 145,000. No insurance. Family is nomadic pastoralist, sold livestock to raise Ksh 60,000. Still needs Ksh 85,000.',target:85000,raised:61200,avatar:'🧑',completed:false,complaintId:''},
    {id:'DON-004',name:'Joyce Kamau (28, new mother)',age:28,county:'Nakuru',story:'Delivered twins at Nakuru PGH. Both babies healthy but Joyce is being held over Ksh 14,500 maternity bill. Husband is a boda boda rider. Has raised Ksh 6,000.',target:14500,raised:12400,avatar:'👩',completed:false,complaintId:''},
    {id:'DON-005',name:'Mzee Kariuki (78)',age:78,county:'Murang\'a',story:'Diabetic complications required amputation. Discharged medically but cannot leave. Bill of Ksh 56,000. Sons are tea pickers. Family needs Ksh 31,000 more.',target:56000,raised:25000,avatar:'👴',completed:false,complaintId:''},
    {id:'DON-COMP-001',name:'Sarah Muthoni (19)',age:19,county:'Nyeri',story:'Appendicitis surgery. Community fundraised Ksh 45,000 in 72 hours on MED AID. Discharged and recovering well.',target:45000,raised:45000,avatar:'👩‍🎓',completed:true,complaintId:''},
  ],
  currentFilter:{feed:'all',watch:'all',activism:'all'},
  currentDonateTarget: null
};

// ===== NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  let nb = document.getElementById('nb-'+name);
  if(nb) nb.classList.add('active');
  window.scrollTo(0,0);
  if(name==='feed') renderFeed();
  if(name==='watchlist') renderWatchlist();
  if(name==='county') renderCounty();
  if(name==='donate') renderDonate();
  if(name==='activism') renderActivism();
  if(name==='ministry') renderMinistry();
  // hide footer on ministry
  document.getElementById('site-footer').style.display = name==='ministry' ? 'none' : 'grid';
  document.querySelector('.foot-bottom').style.display = name==='ministry' ? 'none' : 'flex';
}

// ===== MODALS =====
function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden'}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow=''}

// ===== TOAST =====
function toast(msg,dur=3200){let t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),dur)}

// ===== COMPLAINT MODAL LOGIC =====
let isAnon=true,isEmerg=false,attachedFiles=[];
function setAnon(v){
  isAnon=v;
  document.getElementById('opt-anon').className='radio-opt'+(v?' sel-anon':'');
  document.getElementById('opt-id').className='radio-opt'+(v?'':' sel-id');
  document.getElementById('id-fields').style.display=v?'none':'block';
}
function setEmerg(v){
  isEmerg=v;
  let yes=document.getElementById('emerg-yes'),no=document.getElementById('emerg-no');
  if(v){yes.style.background='#BB0000';yes.style.color='#fff';no.style.background='';no.style.color=''}
  else{no.style.background='#EFF7EE';no.style.color='var(--green)';yes.style.background='#FEF0F0';yes.style.color='var(--red)'}
}
function addFiles(inp){
  Array.from(inp.files).forEach(f=>{attachedFiles.push(f.name);renderFiles()});
}
function renderFiles(){
  let fl=document.getElementById('file-list');
  fl.innerHTML=attachedFiles.map((f,i)=>`<div class="file-tag">📎 ${f}<button onclick="removeFile(${i})">✕</button></div>`).join('');
}
function removeFile(i){attachedFiles.splice(i,1);renderFiles()}

function genId(){return 'MED-2026-'+String(Math.floor(1000+Math.random()*8999))}
function now(){let d=new Date();return d.toLocaleDateString('en-KE',{day:'numeric',month:'short',year:'numeric'})}

function submitComplaint(){
  let cat=document.getElementById('c-category').value;
  let fac=document.getElementById('c-facility').value.trim();
  let cty=document.getElementById('c-county').value;
  let desc=document.getElementById('c-desc').value.trim();
  if(!cat||!fac||!cty||!desc){toast('⚠️ Please fill in all required fields');return}
  let id=genId();
  let nm=isAnon?'':(document.getElementById('c-name').value.trim()||'');
  let co=isAnon?'':(document.getElementById('c-contact').value.trim()||'');
  let cdate=document.getElementById('c-date').value||now();
  DB.complaints.unshift({id,category:cat,facility:fac,county:cty,desc,date:cdate,anon:isAnon,name:nm,contact:co,emergency:isEmerg,upvotes:0,comments:[],files:[...attachedFiles],status:'new',response:'',voted:false,donated:0});
  attachedFiles=[];renderFiles();
  closeModal('complaint-modal');
  ['c-category','c-county','c-facility','c-desc','c-date','c-name','c-contact'].forEach(id=>{let el=document.getElementById(id);if(el)el.value=''});
  setAnon(true);setEmerg(false);
  updateStats();
  // Show tracking number
  let msg=`✅ Complaint submitted! Your tracking number: ${id}`;
  if(isEmerg) msg='🚨 EMERGENCY complaint filed and escalated! Tracking: '+id;
  toast(msg,6000);
  // If viewing feed, refresh
  if(document.getElementById('page-feed').classList.contains('active')) renderFeed();
}

// ===== FEED =====
let feedFilter='all';
function setFilter(area,val,btn){
  DB.currentFilter[area]=val;
  let parent=btn.parentElement;
  parent.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(area==='feed') renderFeed();
  if(area==='watch') renderWatchlist();
  if(area==='activism') renderActivism();
}
function renderFeed(){
  let list=document.getElementById('feed-list');
  let q=(document.getElementById('feed-search')||{value:''}).value.toLowerCase();
  let f=DB.currentFilter.feed;
  let filtered=DB.complaints.filter(c=>{
    if(f==='Resolved') return c.status==='resolved';
    if(f!=='all'&&c.category!==f) return false;
    if(q&&!c.desc.toLowerCase().includes(q)&&!c.facility.toLowerCase().includes(q)&&!c.county.toLowerCase().includes(q)) return false;
    return true;
  });
  if(!filtered.length){list.innerHTML='<div class="empty-state"><span class="es-icon">📋</span><p>No complaints found for this filter. Be the first to report.</p></div>';return}
  list.innerHTML=filtered.map(c=>complaintCardHTML(c)).join('');
}

function complaintCardHTML(c,mini=false){
  let statusBadge={new:'badge-new',inreview:'badge-inreview',resolved:'badge-resolved',escalated:'badge-escalated'}[c.status]||'badge-new';
  let statusText={new:'New',inreview:'Under Review',resolved:'✅ Resolved',escalated:'🚨 Escalated'}[c.status]||'New';
  let filesHTML=c.files.length?'<div style="margin-top:8px">'+c.files.map(f=>`<span class="evidence-item">📎 ${f}</span>`).join('')+'</div>':'';
  let responseHTML=c.response?`<div class="response-box"><div class="rb-header">🏛 Ministry of Health Response</div><div class="rb-text">${c.response}</div></div>`:'';
  let commentsHTML=!mini?`
    <div class="comments-section">
      ${c.comments.map(cm=>`<div class="comment-item"><div class="comment-avatar">${cm.avatar||'👤'}</div><div class="comment-content"><div class="comment-author">${cm.author}</div><div class="comment-text">${cm.text}</div><div class="comment-time">${cm.time}</div></div></div>`).join('')}
      <div class="comment-input-wrap">
        <input class="comment-input" id="ci-${c.id}" type="text" placeholder="Add a comment..." onkeydown="if(event.key==='Enter')addComment('${c.id}')">
        <button class="comment-submit" onclick="addComment('${c.id}')">Post</button>
      </div>
    </div>`:'';
  return `<div class="card mb-16" id="card-${c.id}" style="border-left:3px solid ${c.emergency?'var(--red)':'var(--border)'};margin-bottom:16px">
    ${c.emergency?'<div style="font-size:12px;font-weight:700;color:var(--red);margin-bottom:8px">🚨 EMERGENCY / LIFE-THREATENING — ESCALATED</div>':''}
    <div class="card-meta">
      <span class="badge ${statusBadge}">${statusText}</span>
      <span class="badge ${c.anon?'badge-anon':'badge-id'}">${c.anon?'🛡 Anonymous':'✓ '+c.name}</span>
      <span style="font-size:12px;color:var(--muted)">${c.county} · ${c.facility}</span>
      <span style="font-size:12px;color:var(--muted);margin-left:auto">${c.id} · ${c.date}</span>
    </div>
    <div class="card-title">${c.category}</div>
    <div class="card-body">${c.desc.length>320?c.desc.substring(0,320)+'...':c.desc}</div>
    ${filesHTML}
    ${responseHTML}
    <div class="card-footer">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="upvote-btn${c.voted?' voted':''}" onclick="upvote('${c.id}')">▲ ${c.upvotes} Support</button>
        ${!mini?`<button class="comment-btn" onclick="toggleComments('${c.id}')">💬 ${c.comments.length} Comment${c.comments.length!==1?'s':''}</button>`:''}
      </div>
      <div style="display:flex;gap:8px">
        ${c.status!=='resolved'?`<button class="btn-secondary" style="padding:6px 12px;font-size:12px" onclick="showPage('donate')">💚 Help Patient</button>`:''}
        ${c.status==='new'||c.status==='inreview'?`<button class="btn-secondary" style="padding:6px 12px;font-size:12px;background:var(--black);color:#fff;border-color:var(--black)" onclick="openModal('resolution-modal');document.getElementById('r-id').value='${c.id}'">🏛 Respond</button>`:''}
      </div>
    </div>
    ${commentsHTML}
  </div>`;
}

function upvote(id){
  let c=DB.complaints.find(x=>x.id===id);
  if(!c) return;
  if(c.voted){c.upvotes--;c.voted=false;toast('Support removed')}
  else{c.upvotes++;c.voted=true;toast('✅ Support added — your voice counts')}
  // re-render visible pages
  if(document.getElementById('page-feed').classList.contains('active')) renderFeed();
  if(document.getElementById('page-county').classList.contains('active')) renderCountyDetail();
}

function toggleComments(id){
  let cs=document.querySelector(`#card-${id} .comments-section`);
  if(cs) cs.style.display=cs.style.display==='none'?'block':'none';
}

function addComment(id){
  let inp=document.getElementById('ci-'+id);
  if(!inp||!inp.value.trim()) return;
  let c=DB.complaints.find(x=>x.id===id);
  if(!c) return;
  c.comments.push({author:'You (Anonymous)',text:inp.value.trim(),time:'Just now',avatar:'🧑'});
  inp.value='';
  toast('💬 Comment posted');
  if(document.getElementById('page-feed').classList.contains('active')) renderFeed();
  let el=document.getElementById('ci-'+id);
  if(el) setTimeout(()=>{el.closest('.card').querySelector('.comments-section').style.display='block'},100);
}

// ===== WATCHLIST =====
function renderWatchlist(){
  let f=DB.currentFilter.watch;
  // Build hospital data from complaints
  let hospitals={};
  DB.complaints.forEach(c=>{
    if(!hospitals[c.facility]) hospitals[c.facility]={name:c.facility,county:c.county,count:0,unresolved:0,categories:{}};
    hospitals[c.facility].count++;
    if(c.status!=='resolved') hospitals[c.facility].unresolved++;
    hospitals[c.facility].categories[c.category]=(hospitals[c.facility].categories[c.category]||0)+1;
  });
  let sorted=Object.values(hospitals).sort((a,b)=>b.unresolved-a.unresolved);
  if(f!=='all') sorted=sorted.filter(h=>h.county===f);
  let max=sorted[0]?.count||1;
  let cont=document.getElementById('watchlist-container');
  if(!sorted.length){cont.innerHTML='<div class="empty-state"><span class="es-icon">🏥</span><p>No hospitals on watchlist for this filter.</p></div>';return}
  cont.innerHTML=sorted.map((h,i)=>`
    <div class="hospital-card">
      <div class="hosp-rank">${i+1}</div>
      <div style="flex:1">
        <div class="hosp-name">${h.name}</div>
        <div class="hosp-county">📍 ${h.county} County · ${h.count} complaint${h.count!==1?'s':''} · ${h.unresolved} unresolved</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:8px">
          ${Object.entries(h.categories).map(([cat,n])=>`<span class="badge badge-new">${cat} (${n})</span>`).join('')}
        </div>
        <div class="hosp-bar"><div class="hosp-fill" style="width:${Math.round(h.count/max*100)}%"></div></div>
        <div style="font-size:11.5px;color:var(--muted);margin-top:4px">${h.unresolved} of ${h.count} complaints unresolved — ${Math.round(h.unresolved/h.count*100)}% unresolved rate</div>
      </div>
    </div>`).join('');
}

// ===== COUNTY =====
let allCounties=['Nairobi','Mombasa','Kisumu','Nakuru','Kiambu','Meru','Kilifi','Kakamega','Machakos','Uasin Gishu','Nyeri','Bungoma','Murang\'a','Kajiado','Trans Nzoia','Siaya','Homa Bay','Migori','Kericho','Bomet','Nandi','Laikipia','Vihiga','Busia','Nyamira','Kisii','Embu','Kitui','Makueni','Tharaka Nithi','Nyandarua','Kirinyaga','Elgeyo Marakwet','West Pokot','Baringo','Samburu','Isiolo','Marsabit','Mandera','Wajir','Garissa','Tana River','Lamu','Taita Taveta','Kwale','Turkana','Narok'];
let selectedCounty='Nairobi';
function renderCounty(){
  let counts={};
  DB.complaints.forEach(c=>{counts[c.county]=(counts[c.county]||0)+1});
  let grid=document.getElementById('county-grid');
  grid.innerHTML=allCounties.map(cn=>`
    <div class="county-pill${cn===selectedCounty?' active':''}" onclick="selectCounty('${cn}')">
      <span class="county-count">${counts[cn]||0}</span>${cn}
    </div>`).join('');
  renderCountyDetail();
}
function selectCounty(cn){
  selectedCounty=cn;
  renderCounty();
}
function renderCountyDetail(){
  let complaints=DB.complaints.filter(c=>c.county===selectedCounty);
  let det=document.getElementById('county-detail');
  det.style.display='block';
  document.getElementById('county-detail-title').textContent=`${selectedCounty} County — ${complaints.length} Complaint${complaints.length!==1?'s':''}`;
  let feed=document.getElementById('county-detail-feed');
  if(!complaints.length){feed.innerHTML='<div class="empty-state"><span class="es-icon">✅</span><p>No complaints on record for '+selectedCounty+' county yet.</p></div>';return}
  feed.innerHTML=complaints.map(c=>complaintCardHTML(c,true)).join('');
}

// ===== DONATE =====
function renderDonate(){
  let active=DB.donations.filter(d=>!d.completed);
  let completed=DB.donations.filter(d=>d.completed);
  document.getElementById('donate-cards').innerHTML=active.map(d=>donateCardHTML(d)).join('');
  document.getElementById('donate-completed').innerHTML=completed.map(d=>donateCardHTML(d,true)).join('');
}
function donateCardHTML(d,done=false){
  let pct=Math.min(100,Math.round(d.raised/d.target*100));
  return `<div class="donate-card">
    <div class="donate-patient">
      <div class="donate-avatar">${d.avatar}</div>
      <div><div class="donate-name">${d.name}</div><div style="font-size:11.5px;color:var(--muted)">📍 ${d.county} County</div></div>
    </div>
    <div class="card-body" style="font-size:13px">${d.story}</div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-label">
      <span>KSh ${d.raised.toLocaleString()} raised</span>
      <span>${pct}% of KSh ${d.target.toLocaleString()}</span>
    </div>
    ${done?'<div style="text-align:center;padding:10px;font-size:13px;color:var(--green);font-weight:700;border-radius:8px;background:#EFF7EE;margin-top:10px">✅ Fully Funded — Patient Released</div>':
    `<button class="donate-btn" onclick="openDonate('${d.id}')">💚 Donate via M-Pesa</button>`}
  </div>`;
}
function openDonate(id){
  let d=DB.donations.find(x=>x.id===id);
  if(!d) return;
  DB.currentDonateTarget=id;
  document.getElementById('dm-title').textContent='Support '+d.name;
  document.getElementById('dm-story').textContent=d.story;
  openModal('donate-modal');
}
let donateAmt=0;
function setDonateAmt(v,el){
  donateAmt=v;
  document.querySelectorAll('#donate-modal .radio-opt').forEach(e=>e.className='radio-opt');
  el.className='radio-opt sel-anon';
  document.getElementById('donate-amount').value=v;
}
function processDonate(){
  let amt=parseInt(document.getElementById('donate-amount').value)||donateAmt;
  let mpesa=document.getElementById('mpesa-num').value.trim();
  if(!amt||amt<10){toast('⚠️ Please enter an amount');return}
  if(!mpesa){toast('⚠️ Please enter M-Pesa number');return}
  let d=DB.donations.find(x=>x.id===DB.currentDonateTarget);
  if(d){d.raised=Math.min(d.target,d.raised+amt);if(d.raised>=d.target)d.completed=true;}
  closeModal('donate-modal');
  toast(`💚 M-Pesa prompt sent to ${mpesa}. Thank you for your kindness!`,5000);
  updateStats();
  if(document.getElementById('page-donate').classList.contains('active')) renderDonate();
}

// ===== ACTIVISM =====
function renderActivism(){
  let f=DB.currentFilter.activism;
  let filtered=DB.activism.filter(a=>{
    if(f==='all') return true;
    if(f==='Strike') return a.type.includes('Strike');
    if(f==='Demonstration') return a.type.includes('Demonstration');
    if(f==='Petition') return a.type.includes('Petition');
    return true;
  });
  let list=document.getElementById('activism-list');
  if(!filtered.length){list.innerHTML='<div class="empty-state"><span class="es-icon">✊</span><p>No notices posted yet.</p></div>';return}
  list.innerHTML=filtered.map((a,i)=>`
    <div class="activism-card">
      <div class="ac-header">
        <div>
          <div class="ac-type" style="color:${a.type.includes('Strike')?'var(--red)':a.type.includes('Demonstration')?'#B45309':'var(--green)'}">${a.type}</div>
          <div class="ac-title">${a.title}</div>
          <div style="font-size:12.5px;font-weight:600;color:var(--muted)">${a.org}</div>
        </div>
        <div style="text-align:right;flex-shrink:0;margin-left:16px">
          <div style="font-size:11px;color:var(--muted)">Posted: ${a.date}</div>
          ${a.actionDate?`<div style="font-size:11px;font-weight:700;color:var(--red);margin-top:3px">Action: ${a.actionDate}</div>`:''}
        </div>
      </div>
      <div class="ac-body">${a.body}</div>
      ${a.files.length?`<div style="margin-top:10px">${a.files.map(f=>`<span class="evidence-item">📎 ${f}</span>`).join('')}</div>`:''}
      <div class="ac-footer">
        <button class="support-btn${a.supported?' ':'  '}" style="background:${a.supported?'var(--green)':'var(--surface)'};color:${a.supported?'#fff':'var(--text)'};border:1px solid ${a.supported?'var(--green)':'var(--border)'}" onclick="supportActivism(${i})">
          ${a.supported?'✅':'✊'} ${a.supports.toLocaleString()} Support${a.supports!==1?'s':''}
        </button>
        <span style="font-size:12px;color:var(--muted)">📅 Filed ${a.date} — officially timestamped on this platform</span>
      </div>
    </div>`).join('');
}
function supportActivism(i){
  let a=DB.activism[i];
  if(a.supported){a.supports--;a.supported=false;toast('Support withdrawn')}
  else{a.supports++;a.supported=true;toast('✊ You are now supporting this action')}
  renderActivism();
}
function submitActivism(){
  let type=document.getElementById('a-type').value;
  let org=document.getElementById('a-org').value.trim();
  let title=document.getElementById('a-title').value.trim();
  let body=document.getElementById('a-body').value.trim();
  if(!org||!title||!body){toast('⚠️ Please fill all required fields');return}
  DB.activism.unshift({type,org,title,body,date:new Date().toISOString().split('T')[0],actionDate:document.getElementById('a-date').value,files:[],supports:0,supported:false});
  closeModal('activism-modal');
  ['a-org','a-title','a-body','a-date'].forEach(id=>document.getElementById(id).value='');
  toast('✅ Notice posted and timestamped. The Ministry has been notified.',5000);
  renderActivism();
}

// ===== MINISTRY =====
function renderMinistry(){
  // Stats
  let total=DB.complaints.length;
  let resolved=DB.complaints.filter(c=>c.status==='resolved').length;
  let emerg=DB.complaints.filter(c=>c.emergency).length;
  let oneWeekAgo=new Date();oneWeekAgo.setDate(oneWeekAgo.getDate()-7);
  let newThis=DB.complaints.filter(c=>{try{let d=new Date(c.date);return d>=oneWeekAgo}catch{return false}}).length;
  document.getElementById('ms-total').textContent=total;
  document.getElementById('ms-new').textContent=newThis||total;
  document.getElementById('ms-resolved').textContent=resolved;
  document.getElementById('ms-emergency').textContent=emerg;
  // Resolutions
  let rl=document.getElementById('resolutions-list');
  rl.innerHTML=DB.resolutions.map(r=>`
    <div class="resolution-card">
      <div class="rc-header">
        <div>
          <span class="badge badge-resolved" style="margin-bottom:6px;display:inline-flex">${r.type}</span>
          <div class="rc-title">${r.title}</div>
          ${r.complaint?`<div style="font-size:11.5px;color:var(--muted);margin-top:2px">Re: ${r.complaint}</div>`:''}
        </div>
        <div style="text-align:right;flex-shrink:0;margin-left:16px">
          <div style="font-size:11px;color:var(--muted)">${r.date}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px">${r.officer}</div>
        </div>
      </div>
      <div class="rc-body">${r.body}</div>
    </div>`).join('');
  // Pending
  let pending=DB.complaints.filter(c=>c.status==='new'||c.status==='inreview'||c.status==='escalated');
  document.getElementById('pending-list').innerHTML=pending.length?
    pending.map(c=>`<div style="margin-bottom:12px">${complaintCardHTML(c,true)}</div>`).join(''):
    '<div class="empty-state"><span class="es-icon">✅</span><p>All complaints have been addressed!</p></div>';
  // Stats breakdown
  let cats={};DB.complaints.forEach(c=>{cats[c.category]=(cats[c.category]||0)+1});
  document.getElementById('stats-breakdown').innerHTML=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([cat,n])=>`
    <div style="background:var(--surface);border-radius:10px;padding:16px">
      <div style="font-size:22px;font-weight:900;color:var(--red)">${n}</div>
      <div style="font-size:12px;color:var(--muted);margin-top:3px">${cat}</div>
    </div>`).join('');
  // County chart
  let cty={};DB.complaints.forEach(c=>{cty[c.county]=(cty[c.county]||0)+1});
  let sorted=Object.entries(cty).sort((a,b)=>b[1]-a[1]).slice(0,10);
  let mx=sorted[0]?.[1]||1;
  document.getElementById('county-chart').innerHTML=sorted.map(([cn,n])=>`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div style="width:130px;font-size:12.5px;font-weight:600;text-align:right;flex-shrink:0">${cn}</div>
      <div style="flex:1;height:22px;background:var(--surface);border-radius:4px;overflow:hidden">
        <div style="height:100%;background:var(--red);border-radius:4px;width:${Math.round(n/mx*100)}%;display:flex;align-items:center;padding-left:8px">
          <span style="font-size:11px;font-weight:700;color:#fff">${n}</span>
        </div>
      </div>
    </div>`).join('');
}
function submitResolution(){
  let title=document.getElementById('r-title').value.trim();
  let body=document.getElementById('r-body').value.trim();
  let type=document.getElementById('r-type').value;
  let cid=document.getElementById('r-id').value.trim();
  if(!title||!body){toast('⚠️ Please fill in required fields');return}
  let rid='RES-2026-'+String(Math.floor(100+Math.random()*899));
  DB.resolutions.unshift({id:rid,complaint:cid,title,body,type,date:new Date().toISOString().split('T')[0],officer:'Ministry of Health Official'});
  if(cid){
    let c=DB.complaints.find(x=>x.id===cid);
    if(c){c.status='resolved';c.response=body}
  }
  closeModal('resolution-modal');
  ['r-title','r-body','r-id'].forEach(id=>document.getElementById(id).value='');
  toast('🏛 Resolution published and linked to complaint.',5000);
  updateStats();
  if(document.getElementById('page-ministry').classList.contains('active')) renderMinistry();
  if(document.getElementById('page-feed').classList.contains('active')) renderFeed();
}

// ===== TRACKING =====
function trackCase(){
  let q=document.getElementById('track-input').value.trim().toUpperCase();
  let res=document.getElementById('track-result');
  let c=DB.complaints.find(x=>x.id===q||x.id===q.replace('MED ','MED-').replace('MED-','MED-'));
  if(!c){res.innerHTML=`<div style="text-align:center;padding:16px;color:var(--muted);font-size:13.5px">No complaint found with that tracking number. Check the number and try again.<br><br>Try one of the demo numbers: <b>MED-2026-0892</b></div>`;return}
  let steps=[{l:'Submitted',s:'done'},{l:'Under Review',s:c.status==='new'?'active':'done'},{l:'Escalated',s:c.status==='escalated'?'active':c.status==='resolved'?'done':'pending'},{l:'Resolved',s:c.status==='resolved'?'done':'pending'}];
  res.innerHTML=`
    <div class="track-wrap">
      <div class="track-num">${c.id}</div>
      <div style="font-size:13px;color:var(--muted);margin-top:4px">${c.category} · ${c.facility} · ${c.county}</div>
      <div class="track-steps">
        ${steps.map((st,i)=>`
          <div class="track-step">
            <div style="display:flex;align-items:center;width:100%">
              <div class="track-dot ${st.s}">${st.s==='done'?'✓':st.s==='active'?'→':i+1}</div>
              ${i<steps.length-1?`<div class="track-line ${st.s==='done'?'done':''}"></div>`:''}
            </div>
            <div class="track-step-label ${st.s}">${st.l}</div>
          </div>`).join('')}
      </div>
    </div>
    ${c.response?`<div class="response-box"><div class="rb-header">🏛 Ministry Response</div><div class="rb-text">${c.response}</div></div>`:'<div style="font-size:13px;color:var(--muted);text-align:center;padding:8px">No Ministry response yet. Cases are typically reviewed within 5-7 working days.</div>'}
  `;
}

// ===== STATS =====
function updateStats(){
  let n=DB.complaints.length;
  let r=DB.complaints.filter(c=>c.status==='resolved').length;
  let hosp=new Set(DB.complaints.map(c=>c.facility)).size;
  let don=DB.donations.reduce((s,d)=>s+d.raised,0);
  document.getElementById('st-complaints').textContent=n;
  document.getElementById('st-resolved').textContent=r;
  document.getElementById('st-hospitals').textContent=hosp;
  document.getElementById('st-donated').textContent='KSh '+don.toLocaleString();
}

// ===== TABS =====
function switchTab(area,tab){
  let panels=document.querySelectorAll(`#page-${area} .tab-panel`);
  let btns=document.querySelectorAll(`#page-${area} .tab-btn`);
  panels.forEach(p=>p.classList.remove('active'));
  btns.forEach(b=>b.classList.remove('active'));
  let panel=document.getElementById(`${area}-tab-${tab}`);
  if(panel) panel.classList.add('active');
  event.target.classList.add('active');
}

// ===== CLOSE MODAL ON BACKDROP =====
document.querySelectorAll('.modal-overlay').forEach(o=>{
  o.addEventListener('click',e=>{if(e.target===o) closeModal(o.id)});
});

// ===== INIT =====
updateStats();