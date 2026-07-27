// ===================================================================
// MRCS PART A — single best answer question bank
//
//   window.QBANK.questions[] = {
//     id,            ⚠ NEVER CHANGE — keys mrcs_qbank_progress
//     section,       must match a window.SPECIALTIES id
//     paper,         "paper1" | "paper2"
//     topic,         free text, shown in the review
//     stem,
//     options[],     5 options, lettered A–E in the UI
//     answer,        ZERO-BASED index of the correct option
//     explanation    why the right answer is right (and, where useful, why the
//                    tempting wrong one is wrong)
//   }
//
// Distribution is deliberately blueprint-weighted: anatomy carries the most
// questions because it carries the most marks.
// ===================================================================

window.QBANK = { questions: [

// ---------------------------------------------------------------- ANATOMY
{ id:"q_an_001", section:"anatomy", paper:"paper1", topic:"Thoracic wall",
  stem:"A chest drain is being inserted into the fifth intercostal space in the mid-axillary line. To avoid injuring the intercostal neurovascular bundle, the drain should be passed:",
  options:[
    "Immediately below the upper rib of the space",
    "Immediately above the lower rib of the space",
    "Through the middle of the intercostal muscle in the anterior axillary line only",
    "Directly through the centre of the rib above",
    "Below the lower rib of the space"],
  answer:1,
  explanation:"The main neurovascular bundle lies in the subcostal groove on the inferior surface of the rib above, in the order vein, artery, nerve from superior to inferior. Passing just above the lower rib of the space keeps the instrument furthest from it. A smaller collateral bundle does run along the upper border of the lower rib, which is why staying in the middle of the space is also taught, but of the options given, immediately above the lower rib is the standard safe answer." },

{ id:"q_an_002", section:"anatomy", paper:"paper1", topic:"Diaphragm",
  stem:"At which vertebral level does the inferior vena cava pass through the diaphragm?",
  options:["T8","T10","T12","L1","T6"],
  answer:0,
  explanation:"The caval opening is at T8, within the central tendon, and also transmits the right phrenic nerve. The mnemonic counts letters: vena cava (8 letters) at T8, oesophagus (10) at T10, aortic hiatus (12) at T12. The caval opening widens on inspiration, which aids venous return." },

{ id:"q_an_003", section:"anatomy", paper:"paper1", topic:"Structures at the sternal angle",
  stem:"Which of the following does NOT occur at the level of the sternal angle of Louis?",
  options:[
    "Bifurcation of the trachea",
    "The beginning and end of the arch of the aorta",
    "Termination of the azygos vein",
    "Origin of the coeliac trunk",
    "The junction of the second costal cartilage with the sternum"],
  answer:3,
  explanation:"The coeliac trunk arises from the abdominal aorta at T12, well below the sternal angle. The sternal angle marks the T4/T5 plane, at which the trachea bifurcates, the aortic arch begins and ends, the azygos vein arches over the right lung root to enter the superior vena cava, the second costal cartilage articulates, and the superior and inferior mediastina are divided." },

{ id:"q_an_004", section:"anatomy", paper:"paper1", topic:"Bronchial tree",
  stem:"An unconscious supine patient aspirates gastric contents. Which bronchopulmonary segment is most likely to be affected?",
  options:[
    "Apical segment of the right upper lobe",
    "Posterior segment of the right lower lobe",
    "Lingula",
    "Anterior segment of the left upper lobe",
    "Medial segment of the right middle lobe"],
  answer:1,
  explanation:"The right main bronchus is wider, shorter and more vertical than the left, so aspirate preferentially enters the right lung. In a supine patient gravity directs it posteriorly, into the posterior segment of the right lower lobe. In an upright patient the posterobasal segment of the right lower lobe is favoured." },

{ id:"q_an_005", section:"anatomy", paper:"paper1", topic:"Coronary circulation",
  stem:"A patient develops complete heart block following an inferior myocardial infarction. Occlusion of which vessel most likely explains this?",
  options:[
    "Left anterior descending artery",
    "Circumflex artery",
    "Right coronary artery",
    "Left main stem",
    "First diagonal branch"],
  answer:2,
  explanation:"The right coronary artery supplies the atrioventricular node in about 80 per cent of people and the sinoatrial node in about 60 per cent, and it supplies the inferior wall (leads II, III and aVF). Inferior infarction therefore commonly causes bradyarrhythmia and atrioventricular block." },

{ id:"q_an_006", section:"anatomy", paper:"paper1", topic:"Rectus sheath",
  stem:"Below the arcuate line, which structure lies immediately deep to rectus abdominis?",
  options:[
    "Posterior layer of the internal oblique aponeurosis",
    "Transversus abdominis aponeurosis",
    "Transversalis fascia",
    "Parietal peritoneum",
    "External oblique aponeurosis"],
  answer:2,
  explanation:"Below the arcuate line, roughly midway between the umbilicus and the pubic symphysis, all three flat muscle aponeuroses pass anterior to rectus abdominis. The posterior sheath is therefore absent, and only transversalis fascia, extraperitoneal fat and peritoneum separate rectus from the abdominal cavity." },

{ id:"q_an_007", section:"anatomy", paper:"paper1", topic:"Inguinal canal",
  stem:"During open inguinal hernia repair, a hernial sac is found passing medial to the inferior epigastric vessels. This is:",
  options:[
    "An indirect inguinal hernia",
    "A direct inguinal hernia",
    "A femoral hernia",
    "An obturator hernia",
    "A Spigelian hernia"],
  answer:1,
  explanation:"A direct hernia pushes through the weakness of Hesselbach's triangle, which lies medial to the inferior epigastric vessels. An indirect hernia enters through the deep ring, which is lateral to them. Hesselbach's triangle is bounded by the inferior epigastric vessels laterally, the lateral border of rectus medially and the inguinal ligament inferiorly." },

{ id:"q_an_008", section:"anatomy", paper:"paper1", topic:"Groin anatomy",
  stem:"A tender irreducible groin lump lies below and lateral to the pubic tubercle. The most likely diagnosis is:",
  options:[
    "Direct inguinal hernia",
    "Indirect inguinal hernia",
    "Femoral hernia",
    "Saphena varix",
    "Psoas abscess"],
  answer:2,
  explanation:"Position relative to the pubic tubercle is the classic discriminator: inguinal hernias lie above and medial, femoral hernias below and lateral. Femoral hernias are commoner in women and have a narrow, rigid neck bounded by the sharp lacunar ligament, giving a high risk of strangulation, so they are repaired promptly." },

{ id:"q_an_009", section:"anatomy", paper:"paper1", topic:"Calot's triangle",
  stem:"Calot's triangle is bounded by the cystic duct, the inferior border of the liver and which other structure?",
  options:[
    "Common bile duct",
    "Common hepatic duct",
    "Right hepatic artery",
    "Portal vein",
    "Cystic artery"],
  answer:1,
  explanation:"Calot's triangle (the cystohepatic triangle) is bounded by the cystic duct, the common hepatic duct and the inferior surface of the liver. Its principal content is the cystic artery, usually arising from the right hepatic artery. Clearing this triangle to obtain the critical view of safety is what prevents bile duct injury at laparoscopic cholecystectomy." },

{ id:"q_an_010", section:"anatomy", paper:"paper1", topic:"Portal venous system",
  stem:"The portal vein is formed by the union of the superior mesenteric vein and which other vessel?",
  options:["Inferior mesenteric vein","Splenic vein","Left gastric vein","Left renal vein","Middle colic vein"],
  answer:1,
  explanation:"The portal vein is formed behind the neck of the pancreas by the union of the superior mesenteric and splenic veins. The inferior mesenteric vein usually drains into the splenic vein rather than joining the confluence directly. The portal vein is valveless, which is why portal hypertension is transmitted freely to its tributaries." },

{ id:"q_an_011", section:"anatomy", paper:"paper1", topic:"Ureter",
  stem:"During a hysterectomy the ureter is most at risk of injury at which point?",
  options:[
    "As it crosses the pelvic brim",
    "Where it is crossed by the uterine artery",
    "At the pelviureteric junction",
    "As it passes over psoas major",
    "At its entry into the bladder trigone"],
  answer:1,
  explanation:"The ureter passes beneath the uterine artery about 2 cm lateral to the cervix — water under the bridge. This is the classic site of iatrogenic ureteric injury during hysterectomy. In the male the equivalent relation is the vas deferens crossing above the ureter." },

{ id:"q_an_012", section:"anatomy", paper:"paper1", topic:"Testicular lymphatics",
  stem:"A 28-year-old man has a testicular seminoma. To which lymph node group does the testis primarily drain?",
  options:[
    "Superficial inguinal nodes",
    "Deep inguinal nodes",
    "External iliac nodes",
    "Para-aortic nodes",
    "Internal iliac nodes"],
  answer:3,
  explanation:"The testis develops on the posterior abdominal wall at about L2 and drags its blood supply and lymphatic drainage with it as it descends. It therefore drains to the para-aortic nodes at the level of the renal vessels. Scrotal skin, by contrast, drains to superficial inguinal nodes — which is why a scrotal approach to a testicular tumour is avoided and inguinal orchidectomy with high cord ligation is the correct operation." },

{ id:"q_an_013", section:"anatomy", paper:"paper1", topic:"Anal canal",
  stem:"Which statement about the anal canal below the dentate line is correct?",
  options:[
    "It is lined by columnar epithelium",
    "It drains to the internal iliac nodes",
    "It is supplied by the superior rectal artery",
    "It is somatically innervated and therefore sensitive to pain",
    "It is derived from hindgut endoderm"],
  answer:3,
  explanation:"Below the dentate line the anal canal is ectodermal in origin, lined by stratified squamous epithelium, innervated somatically by the inferior rectal branch of the pudendal nerve, and drains to the superficial inguinal nodes. This is why external haemorrhoids and fissures are painful and internal haemorrhoids are not." },

{ id:"q_an_014", section:"anatomy", paper:"paper1", topic:"Brachial plexus",
  stem:"A newborn sustains a shoulder dystocia and the arm is held adducted, internally rotated with the forearm pronated. Which roots are injured?",
  options:["C5 and C6","C7 alone","C8 and T1","C4 and C5","T1 and T2"],
  answer:0,
  explanation:"This is Erb's palsy, an upper trunk (C5, C6) injury from excessive traction increasing the angle between the head and shoulder. The resulting waiter's tip posture reflects loss of abduction, external rotation and supination. Klumpke's palsy affects C8 and T1, gives a claw hand, and may include Horner syndrome if the sympathetic chain is involved." },

{ id:"q_an_015", section:"anatomy", paper:"paper1", topic:"Upper limb nerve injury",
  stem:"A patient with a mid-shaft humeral fracture cannot extend the wrist. Sensation is reduced over the first dorsal web space. Which nerve is injured?",
  options:["Median","Ulnar","Radial","Axillary","Musculocutaneous"],
  answer:2,
  explanation:"The radial nerve runs in the spiral groove of the humeral shaft with the profunda brachii artery and is injured in mid-shaft fractures, producing wrist drop with sensory loss over the first dorsal web space. Triceps is spared because its branches arise proximally. Most such palsies recover with conservative management." },

{ id:"q_an_016", section:"anatomy", paper:"paper1", topic:"Carpal tunnel",
  stem:"Which structure does NOT pass through the carpal tunnel?",
  options:[
    "Median nerve",
    "Flexor pollicis longus tendon",
    "Ulnar nerve",
    "Flexor digitorum profundus tendons",
    "Flexor digitorum superficialis tendons"],
  answer:2,
  explanation:"The carpal tunnel transmits the median nerve and nine flexor tendons — four flexor digitorum superficialis, four flexor digitorum profundus and flexor pollicis longus. The ulnar nerve and artery pass superficial to the flexor retinaculum in Guyon's canal, which is why they are spared in carpal tunnel syndrome. The palmar cutaneous branch of the median nerve also arises proximal to the retinaculum, so palmar sensation is preserved." },

{ id:"q_an_017", section:"anatomy", paper:"paper1", topic:"Scaphoid",
  stem:"A young man falls on an outstretched hand and is tender in the anatomical snuffbox. Radiographs are normal. Why must a scaphoid fracture still be assumed?",
  options:[
    "Because the scaphoid has no periosteum",
    "Because the blood supply enters distally and proximal pole fractures risk avascular necrosis",
    "Because the scaphoid is always fractured in this mechanism",
    "Because the scaphoid is extra-articular",
    "Because the fracture is always displaced"],
  answer:1,
  explanation:"The scaphoid's blood supply enters through its distal pole and runs retrograde, so a proximal pole fracture devascularises the proximal fragment and risks avascular necrosis and non-union. Initial radiographs are normal in a significant proportion of cases, so the wrist is immobilised and re-imaged, or magnetic resonance imaging is performed." },

{ id:"q_an_018", section:"anatomy", paper:"paper1", topic:"Femoral triangle",
  stem:"In the femoral triangle, the order of structures from lateral to medial is:",
  options:[
    "Vein, artery, nerve",
    "Nerve, artery, vein",
    "Artery, vein, nerve",
    "Nerve, vein, artery",
    "Artery, nerve, vein"],
  answer:1,
  explanation:"From lateral to medial the order is Nerve, Artery, Vein, Empty space, Lymphatics — the NAVEL mnemonic. The femoral nerve lies outside the femoral sheath; the sheath contains the artery, the vein and the femoral canal. The empty space is the femoral canal, which is the site of a femoral hernia." },

{ id:"q_an_019", section:"anatomy", paper:"paper1", topic:"Popliteal fossa",
  stem:"A posterior knee dislocation is reduced. Which structure is most at risk and lies deepest in the popliteal fossa?",
  options:["Tibial nerve","Common peroneal nerve","Popliteal vein","Popliteal artery","Short saphenous vein"],
  answer:3,
  explanation:"From superficial to deep the popliteal fossa contains the tibial nerve, then the popliteal vein, then the popliteal artery. The artery is deepest and closest to bone, tethered proximally and distally, and is therefore injured in posterior knee dislocation and displaced supracondylar femoral fractures. Delayed diagnosis leads to amputation, so pulses must be documented and there should be a low threshold for angiography." },

{ id:"q_an_020", section:"anatomy", paper:"paper1", topic:"Femoral head blood supply",
  stem:"Which artery provides the dominant blood supply to the femoral head in adults?",
  options:[
    "Artery of the ligamentum teres",
    "Lateral circumflex femoral artery",
    "Medial circumflex femoral artery",
    "Superior gluteal artery",
    "First perforating branch of profunda femoris"],
  answer:2,
  explanation:"The medial circumflex femoral artery gives the retinacular vessels that run retrograde along the femoral neck and dominate the supply to the head in adults. This is why displaced intracapsular fractures risk avascular necrosis and are treated by replacement rather than fixation in older patients, whereas extracapsular fractures preserve the supply and are fixed." },

{ id:"q_an_021", section:"anatomy", paper:"paper1", topic:"Spinal cord",
  stem:"An adult lumbar puncture is performed at the L3/L4 interspace. This level is chosen because the spinal cord in adults terminates at approximately:",
  options:["T12","L1/L2","L3","L4/L5","S1"],
  answer:1,
  explanation:"The conus medullaris ends at about L1/L2 in the adult (lower, around L3, in the neonate). Puncture below this level enters the cauda equina, whose nerve roots move aside rather than being injured. Tuffier's line between the iliac crests corresponds to about L4 and is the surface landmark used." },

{ id:"q_an_022", section:"anatomy", paper:"paper1", topic:"Extradural haematoma",
  stem:"A young man is struck on the side of the head, is briefly unconscious, recovers, then deteriorates. Computed tomography shows a biconvex hyperdense collection that does not cross a suture line. Which vessel is bleeding?",
  options:[
    "Bridging cortical veins",
    "Middle meningeal artery",
    "Superior sagittal sinus",
    "Anterior cerebral artery",
    "Posterior communicating artery"],
  answer:1,
  explanation:"This is an extradural haematoma from the middle meningeal artery, typically injured where the thin pterion is fractured. The classic lucid interval, the biconvex (lentiform) shape and the limitation by sutures distinguish it from a subdural haematoma, which is venous from torn bridging veins, crescentic, and crosses sutures but not the midline." },

{ id:"q_an_023", section:"anatomy", paper:"paper1", topic:"Recurrent laryngeal nerve",
  stem:"Which laryngeal muscle is NOT supplied by the recurrent laryngeal nerve?",
  options:["Posterior cricoarytenoid","Lateral cricoarytenoid","Cricothyroid","Thyroarytenoid","Transverse arytenoid"],
  answer:2,
  explanation:"Cricothyroid is supplied by the external branch of the superior laryngeal nerve; all other intrinsic laryngeal muscles are supplied by the recurrent laryngeal nerve. The external branch runs with the superior thyroid pedicle and is injured by careless ligation there, causing loss of the high notes of the voice. Posterior cricoarytenoid is the only abductor of the vocal cords." },

{ id:"q_an_024", section:"anatomy", paper:"paper1", topic:"Parotid gland",
  stem:"Which structure is the most superficial of those passing through the parotid gland?",
  options:["External carotid artery","Retromandibular vein","Facial nerve","Auriculotemporal nerve","Maxillary artery"],
  answer:2,
  explanation:"From superficial to deep the parotid contains the facial nerve, then the retromandibular vein, then the external carotid artery. The facial nerve divides the gland into surgical superficial and deep lobes and gives five branches — temporal, zygomatic, buccal, marginal mandibular and cervical. A facial nerve palsy with a parotid mass indicates malignancy until proved otherwise." },

{ id:"q_an_025", section:"anatomy", paper:"paper1", topic:"Epistaxis",
  stem:"Approximately 90 per cent of epistaxis arises from an anastomosis on the anterior nasal septum. This is known as:",
  options:["Killian's dehiscence","Little's area","Woodruff's plexus","The pterygoid plexus","Waldeyer's ring"],
  answer:1,
  explanation:"Little's area contains Kiesselbach's plexus, formed by the anastomosis of the sphenopalatine, greater palatine, anterior ethmoidal and superior labial arteries. Posterior bleeding, more often from the sphenopalatine artery, is less common but harder to control and may require endoscopic ligation or embolisation after packing fails." },

{ id:"q_an_026", section:"anatomy", paper:"paper1", topic:"Cranial foramina",
  stem:"Which structure passes through the foramen ovale?",
  options:[
    "Maxillary division of the trigeminal nerve",
    "Mandibular division of the trigeminal nerve",
    "Middle meningeal artery",
    "Facial nerve",
    "Internal carotid artery"],
  answer:1,
  explanation:"Foramen rotundum transmits V2, foramen ovale transmits V3 (with the lesser petrosal nerve and accessory meningeal artery), and foramen spinosum transmits the middle meningeal artery — Standing Room Only, from medial to lateral in the middle cranial fossa." },

{ id:"q_an_027", section:"anatomy", paper:"paper1", topic:"Embryology",
  stem:"A neonate has bilious vomiting. Contrast study shows the duodenojejunal flexure to the right of the midline. The underlying embryological failure is:",
  options:[
    "Failure of recanalisation of the duodenum",
    "Failure of the midgut to rotate 270 degrees anticlockwise",
    "Failure of the pleuroperitoneal membranes to fuse",
    "Failure of neural crest migration",
    "Persistence of the vitellointestinal duct"],
  answer:1,
  explanation:"This is malrotation. The midgut herniates into the umbilical cord at about week 6 and returns by week 10, rotating 270 degrees anticlockwise around the superior mesenteric artery. Incomplete rotation leaves a narrow mesenteric base and Ladd's bands, predisposing to midgut volvulus. Bilious vomiting in a neonate is malrotation with volvulus until proved otherwise." },

{ id:"q_an_028", section:"anatomy", paper:"paper1", topic:"Branchial anomalies",
  stem:"A 22-year-old presents with a smooth fluctuant swelling at the anterior border of sternocleidomastoid, at the junction of its upper and middle thirds. The most likely origin is:",
  options:[
    "First pharyngeal cleft",
    "Second pharyngeal cleft",
    "Third pharyngeal pouch",
    "Thyroglossal duct",
    "Fourth pharyngeal pouch"],
  answer:1,
  explanation:"This is a branchial cyst, a remnant of the second pharyngeal cleft, classically presenting in a young adult at the anterior border of sternocleidomastoid. A thyroglossal cyst by contrast is midline and moves on swallowing and on tongue protrusion. In anyone over 40, a persistent lateral neck cyst must be assumed to be metastatic squamous cell carcinoma until proved otherwise." },

{ id:"q_an_029", section:"anatomy", paper:"paper1", topic:"Cross-sectional anatomy",
  stem:"On an axial computed tomography image at the level of L1, which of the following is NOT normally seen?",
  options:[
    "Origin of the superior mesenteric artery",
    "Renal hila",
    "Neck of the pancreas",
    "Bifurcation of the abdominal aorta",
    "Second part of the duodenum"],
  answer:3,
  explanation:"The abdominal aorta bifurcates at L4, at the level of the umbilicus and the highest points of the iliac crests. The transpyloric plane at L1 crosses the pylorus, the neck of the pancreas, the origin of the superior mesenteric artery, the renal hila, the duodenojejunal flexure and the fundus of the gallbladder." },

{ id:"q_an_030", section:"anatomy", paper:"paper1", topic:"Autonomic nervous system",
  stem:"Sympathetic preganglionic fibres leave the spinal cord between which segments?",
  options:["C1 and C8","T1 and L2","S2 and S4","T5 and T12","L1 and L5"],
  answer:1,
  explanation:"Sympathetic outflow is thoracolumbar, arising from the lateral horn between T1 and L2, with short preganglionic and long postganglionic fibres. Parasympathetic outflow is craniosacral — cranial nerves III, VII, IX and X plus the pelvic splanchnic nerves from S2, S3 and S4 — with long preganglionic and short postganglionic fibres." },

// ---------------------------------------------------------------- PHYSIOLOGY
{ id:"q_ph_001", section:"physiology", paper:"paper1", topic:"Body fluid compartments",
  stem:"In a 70 kg man, approximately what volume is the extracellular fluid compartment?",
  options:["7 L","14 L","28 L","42 L","21 L"],
  answer:1,
  explanation:"Total body water is about 60 per cent of body weight, so 42 L. Two thirds (28 L) is intracellular and one third (14 L) extracellular. Of the extracellular compartment, three quarters is interstitial and one quarter (about 3.5 L) is plasma." },

{ id:"q_ph_002", section:"physiology", paper:"paper1", topic:"Fluid therapy",
  stem:"One litre of 5 per cent dextrose is given intravenously. Approximately how much remains in the intravascular compartment after equilibration?",
  options:["1000 mL","500 mL","250 mL","80 mL","Nil"],
  answer:3,
  explanation:"5 per cent dextrose distributes across total body water once the glucose is metabolised, so only about one twelfth — roughly 80 mL — remains intravascular. It is therefore useless for resuscitation. A litre of a balanced crystalloid such as Hartmann's stays extracellular and contributes about 250 mL to plasma volume." },

{ id:"q_ph_003", section:"physiology", paper:"paper1", topic:"Acid-base",
  stem:"A patient with prolonged vomiting from gastric outlet obstruction has pH 7.52, bicarbonate 34 mmol/L, chloride 88 mmol/L and potassium 2.9 mmol/L. The urine is paradoxically acidic. The correct treatment is:",
  options:[
    "Intravenous sodium bicarbonate",
    "0.9 per cent sodium chloride with potassium",
    "Acetazolamide",
    "5 per cent dextrose alone",
    "Ammonium chloride infusion"],
  answer:1,
  explanation:"This is a hypochloraemic, hypokalaemic metabolic alkalosis with paradoxical aciduria. Loss of hydrogen and chloride causes the alkalosis; volume depletion drives sodium retention in exchange for hydrogen and potassium, acidifying the urine despite alkalaemia. Treatment is volume and chloride repletion with 0.9 per cent sodium chloride plus potassium." },

{ id:"q_ph_004", section:"physiology", paper:"paper1", topic:"Anion gap",
  stem:"Which of the following causes a metabolic acidosis with a NORMAL anion gap?",
  options:["Diabetic ketoacidosis","Lactic acidosis","High-output ileostomy","Methanol poisoning","Salicylate overdose"],
  answer:2,
  explanation:"A normal anion gap acidosis results from bicarbonate loss or chloride gain — high-output stoma, diarrhoea, pancreatic fistula, renal tubular acidosis and large-volume 0.9 per cent sodium chloride. A raised anion gap acidosis results from added acid, as in ketoacidosis, lactate, methanol, ethylene glycol, urate and salicylate." },

{ id:"q_ph_005", section:"physiology", paper:"paper1", topic:"Haemorrhagic shock",
  stem:"A previously fit 25-year-old has a heart rate of 115, blood pressure 122/96 mmHg, respiratory rate 24 and is anxious. This corresponds to which class of haemorrhagic shock?",
  options:["Class I","Class II","Class III","Class IV","Not shocked"],
  answer:1,
  explanation:"Class II is 15 to 30 per cent blood loss, with tachycardia, an increased respiratory rate, anxiety and — most tellingly here — a narrowed pulse pressure from a rising diastolic pressure. Systolic pressure is preserved until class III, which is why relying on systolic pressure to detect shock in the young is dangerous." },

{ id:"q_ph_006", section:"physiology", paper:"paper1", topic:"Oxygen dissociation",
  stem:"Which of the following shifts the oxyhaemoglobin dissociation curve to the RIGHT?",
  options:["Hypothermia","Alkalosis","Reduced 2,3-diphosphoglycerate","Pyrexia","Carbon monoxide"],
  answer:3,
  explanation:"A right shift reduces haemoglobin's affinity for oxygen and favours unloading at the tissues. It is caused by raised carbon dioxide, acidosis, raised temperature and raised 2,3-diphosphoglycerate — CADET, face Right. Hypothermia, alkalosis, low 2,3-diphosphoglycerate, carbon monoxide and fetal haemoglobin shift it left." },

{ id:"q_ph_007", section:"physiology", paper:"paper1", topic:"Coagulation",
  stem:"An isolated prolonged activated partial thromboplastin time with a normal prothrombin time and platelet count suggests a deficiency of which factor?",
  options:["Factor VII","Factor VIII","Factor X","Factor V","Fibrinogen"],
  answer:1,
  explanation:"The activated partial thromboplastin time tests the intrinsic and common pathways, so isolated prolongation points to factor VIII, IX, XI or XII deficiency, von Willebrand disease or a lupus anticoagulant. Factor VII deficiency prolongs the prothrombin time alone; deficiencies of factors X, V and fibrinogen are in the common pathway and prolong both." },

{ id:"q_ph_008", section:"physiology", paper:"paper1", topic:"Metabolic response to injury",
  stem:"Which hormonal change is characteristic of the flow phase of the metabolic response to injury?",
  options:[
    "Reduced cortisol and increased insulin sensitivity",
    "Increased cortisol, catecholamines and glucagon with insulin resistance",
    "Reduced antidiuretic hormone with a sodium diuresis",
    "Reduced growth hormone with positive nitrogen balance",
    "Increased aldosterone with potassium retention"],
  answer:1,
  explanation:"The flow phase is hypermetabolic and catabolic, driven by catecholamines, cortisol, glucagon and growth hormone, with insulin resistance producing stress hyperglycaemia. Antidiuretic hormone and aldosterone rise, causing sodium and water retention and potassium loss. Nitrogen balance is markedly negative. Enhanced recovery protocols aim to blunt this response." },

{ id:"q_ph_009", section:"physiology", paper:"paper1", topic:"Refeeding syndrome",
  stem:"Which biochemical abnormality is most characteristic of refeeding syndrome?",
  options:["Hyperphosphataemia","Hypophosphataemia","Hypernatraemia","Hypercalcaemia","Hyperkalaemia"],
  answer:1,
  explanation:"Refeeding drives an insulin surge that shifts phosphate, potassium and magnesium intracellularly, producing hypophosphataemia, hypokalaemia and hypomagnesaemia with fluid retention, arrhythmia and cardiac failure. High-risk patients should be fed at no more than 10 kcal/kg/day initially, with thiamine and B vitamins given before feeding." },

{ id:"q_ph_010", section:"physiology", paper:"paper1", topic:"Renal physiology",
  stem:"Loop diuretics such as furosemide act at which site?",
  options:[
    "Proximal convoluted tubule",
    "Thick ascending limb of the loop of Henle",
    "Distal convoluted tubule",
    "Collecting duct",
    "Glomerulus"],
  answer:1,
  explanation:"Loop diuretics inhibit the sodium-potassium-2-chloride cotransporter (NKCC2) in the thick ascending limb, abolishing the medullary concentration gradient. Adverse effects include hypokalaemia, hypomagnesaemia, hypocalcaemia and metabolic alkalosis. Thiazides act on the distal convoluted tubule and cause hypercalcaemia rather than hypocalcaemia." },

{ id:"q_ph_011", section:"physiology", paper:"paper1", topic:"Hyponatraemia",
  stem:"Which set of results is most consistent with the syndrome of inappropriate antidiuretic hormone secretion?",
  options:[
    "Sodium 124, plasma osmolality 255, urine osmolality 80, urine sodium 8",
    "Sodium 124, plasma osmolality 255, urine osmolality 480, urine sodium 55",
    "Sodium 124, plasma osmolality 310, urine osmolality 480, urine sodium 55",
    "Sodium 124, plasma osmolality 255, urine osmolality 480, urine sodium 8",
    "Sodium 148, plasma osmolality 310, urine osmolality 80, urine sodium 55"],
  answer:1,
  explanation:"The syndrome requires hyponatraemia with a low plasma osmolality, an inappropriately concentrated urine (over 100 mOsm/kg) and urine sodium above 30 mmol/L, in a clinically euvolaemic patient with normal thyroid and adrenal function. A low urine sodium would instead suggest hypovolaemia or a low-effective-circulating-volume state." },

{ id:"q_ph_012", section:"physiology", paper:"paper1", topic:"Functional residual capacity",
  stem:"Which of the following increases functional residual capacity?",
  options:["General anaesthesia","Supine position","Obesity","Emphysema","Upper abdominal surgery"],
  answer:3,
  explanation:"Emphysema increases lung compliance through loss of elastic recoil, raising functional residual capacity and producing hyperinflation. Anaesthesia, the supine position, obesity, pregnancy and upper abdominal or thoracic surgery all reduce it, which is why postoperative atelectasis and hypoxaemia are so common." },

// ---------------------------------------------------------------- PATHOLOGY
{ id:"q_pa_001", section:"pathology", paper:"paper1", topic:"Necrosis",
  stem:"Which type of necrosis characteristically occurs following cerebral infarction?",
  options:["Coagulative","Liquefactive","Caseous","Fat","Fibrinoid"],
  answer:1,
  explanation:"The brain is the exception to the rule that infarction causes coagulative necrosis: its high lipid and low connective tissue content produces liquefactive necrosis, ultimately leaving a fluid-filled cyst. Liquefactive necrosis also occurs in abscesses. Caseous necrosis is characteristic of tuberculosis." },

{ id:"q_pa_002", section:"pathology", paper:"paper1", topic:"Wound healing",
  stem:"At three weeks, the tensile strength of a healing surgical wound is approximately what proportion of unwounded skin?",
  options:["5 per cent","20 per cent","50 per cent","80 per cent","100 per cent"],
  answer:1,
  explanation:"Wound strength is about 5 per cent at one week, 20 per cent at three weeks and 80 per cent at three months, and never fully returns to normal. Type III collagen laid down early is progressively replaced by type I during remodelling, which continues for a year or more." },

{ id:"q_pa_003", section:"pathology", paper:"paper1", topic:"Neoplasia",
  stem:"Barrett's oesophagus represents which cellular adaptation?",
  options:["Hyperplasia","Hypertrophy","Metaplasia","Dysplasia","Anaplasia"],
  answer:2,
  explanation:"Barrett's oesophagus is intestinal metaplasia — a reversible change of stratified squamous to columnar epithelium in response to chronic acid reflux. Metaplasia itself is not malignant, but persistent metaplasia may progress to dysplasia and then adenocarcinoma, which is why surveillance is offered and dysplasia is treated." },

{ id:"q_pa_004", section:"pathology", paper:"paper1", topic:"Amyloid",
  stem:"Amyloid is best demonstrated histologically by which stain and finding?",
  options:[
    "Periodic acid-Schiff, magenta staining",
    "Congo red, apple-green birefringence under polarised light",
    "Ziehl-Neelsen, acid-fast bacilli",
    "Prussian blue, blue granules",
    "Masson trichrome, blue collagen"],
  answer:1,
  explanation:"Congo red staining with apple-green birefringence under polarised light is diagnostic of amyloid. AL amyloid derives from immunoglobulin light chains in plasma cell dyscrasias; AA amyloid derives from serum amyloid A in chronic inflammatory disease such as rheumatoid arthritis, inflammatory bowel disease and chronic osteomyelitis." },

{ id:"q_pa_005", section:"pathology", paper:"paper1", topic:"Familial cancer syndromes",
  stem:"A 24-year-old has hundreds of colonic adenomas. Which gene is most likely mutated?",
  options:["APC","MLH1","BRCA1","RET","TP53 only"],
  answer:0,
  explanation:"Familial adenomatous polyposis results from an autosomal dominant mutation of the APC tumour suppressor gene on chromosome 5. Hundreds to thousands of adenomas appear from adolescence and the lifetime colorectal cancer risk approaches 100 per cent, so prophylactic colectomy is offered. Duodenal adenomas and desmoid tumours also occur. MLH1 mutations cause Lynch syndrome, which produces few polyps." },

{ id:"q_pa_006", section:"pathology", paper:"paper1", topic:"Transplant rejection",
  stem:"A transplanted kidney becomes mottled and fails within minutes of reperfusion. The mechanism is:",
  options:[
    "T-cell mediated acute cellular rejection",
    "Preformed recipient antibodies against donor antigens",
    "Chronic allograft vasculopathy",
    "Calcineurin inhibitor toxicity",
    "Graft-versus-host disease"],
  answer:1,
  explanation:"Hyperacute rejection is caused by preformed recipient antibodies (against ABO or human leucocyte antigens) binding donor endothelium, activating complement and causing immediate thrombosis. It is prevented by ABO matching and cross-matching. Acute rejection is T-cell mediated and occurs over days to months; chronic rejection produces progressive fibrosis and vasculopathy over years." },

{ id:"q_pa_007", section:"pathology", paper:"paper1", topic:"Thyroid pathology",
  stem:"Fine-needle aspiration cytology cannot reliably distinguish a follicular adenoma from a follicular carcinoma because the diagnosis of malignancy depends on:",
  options:[
    "Nuclear grooves and inclusions",
    "Psammoma bodies",
    "Capsular or vascular invasion",
    "Amyloid deposition",
    "Lymphocytic infiltration"],
  answer:2,
  explanation:"Follicular carcinoma is diagnosed by demonstrating capsular or vascular invasion, which requires the whole lesion and its capsule — impossible on cytology. A Thy3f follicular lesion therefore requires diagnostic hemithyroidectomy. Papillary carcinoma, by contrast, is diagnosed cytologically by nuclear features including Orphan Annie nuclei, grooves and psammoma bodies." },

{ id:"q_pa_008", section:"pathology", paper:"paper1", topic:"Melanoma",
  stem:"Which factor is the single most important prognostic determinant in cutaneous melanoma?",
  options:["Diameter","Colour variation","Breslow thickness","Anatomical site","Patient age"],
  answer:2,
  explanation:"Breslow thickness — the depth in millimetres from the granular layer to the deepest tumour cell — is the strongest prognostic factor and determines the excision margin at wide local excision. This is why a suspicious pigmented lesion is excised whole with a narrow margin rather than shaved or incised, which would prevent accurate measurement." },

{ id:"q_pa_009", section:"pathology", paper:"paper1", topic:"Inflammatory bowel disease",
  stem:"Which feature favours Crohn's disease over ulcerative colitis?",
  options:[
    "Continuous mucosal inflammation from the rectum",
    "Crypt abscesses",
    "Non-caseating granulomas with transmural inflammation",
    "Pseudopolyps",
    "Backwash ileitis"],
  answer:2,
  explanation:"Crohn's disease is transmural with skip lesions anywhere from mouth to anus, non-caseating granulomas, cobblestoning, fistulas and strictures. Ulcerative colitis is mucosal, continuous from the rectum, with crypt abscesses and pseudopolyps. Because Crohn's disease is not cured by resection, surgery is conservative and stricturoplasty is preferred where possible." },

{ id:"q_pa_010", section:"pathology", paper:"paper1", topic:"Myocardial infarction",
  stem:"Free wall rupture after myocardial infarction is most likely to occur at which time?",
  options:["Within 6 hours","At 12 to 24 hours","At 3 to 14 days","At 6 weeks","At 6 months"],
  answer:2,
  explanation:"Between about 3 and 14 days the infarcted myocardium is at its weakest, as neutrophils and then macrophages remove necrotic tissue before granulation tissue and scar provide strength. Free wall rupture with tamponade, papillary muscle rupture and ventricular septal rupture all cluster in this window." },

// ---------------------------------------------------------------- PHARMACOLOGY
{ id:"q_dr_001", section:"pharmacology", paper:"paper1", topic:"Local anaesthetic dosing",
  stem:"What is the maximum safe dose of plain lidocaine for a 70 kg adult?",
  options:["70 mg","210 mg","490 mg","700 mg","140 mg"],
  answer:1,
  explanation:"Plain lidocaine is 3 mg/kg, so 210 mg in a 70 kg adult — equivalent to 21 mL of 1 per cent solution, since a 1 per cent solution contains 10 mg/mL. With adrenaline the maximum rises to 7 mg/kg. Bupivacaine is 2 mg/kg and adding adrenaline does not meaningfully increase this." },

{ id:"q_dr_002", section:"pharmacology", paper:"paper1", topic:"Local anaesthetic toxicity",
  stem:"A patient becomes confused with perioral tingling and tinnitus during infiltration of bupivacaine, then seizes. In addition to airway and circulatory support, the specific treatment is:",
  options:["Intravenous flumazenil","Intravenous lipid emulsion","Intravenous naloxone","Intravenous dantrolene","Intravenous calcium gluconate"],
  answer:1,
  explanation:"This is local anaesthetic systemic toxicity. Treatment is to stop injecting, call for help, secure the airway, give oxygen, control seizures and give intravenous lipid emulsion, with prolonged resuscitation if cardiac arrest occurs. Bupivacaine is the most cardiotoxic agent and the most resistant to resuscitation." },

{ id:"q_dr_003", section:"pharmacology", paper:"paper1", topic:"Anticoagulant reversal",
  stem:"A patient on warfarin has a large intracranial haemorrhage with an international normalised ratio of 4.5. The most appropriate immediate reversal is:",
  options:[
    "Oral vitamin K alone",
    "Fresh frozen plasma alone",
    "Intravenous vitamin K plus prothrombin complex concentrate",
    "Protamine sulphate",
    "Platelet transfusion"],
  answer:2,
  explanation:"Major bleeding on warfarin is reversed with intravenous vitamin K plus prothrombin complex concentrate, which restores factors II, VII, IX and X within minutes. Fresh frozen plasma is slower, requires large volumes and is second-line. Protamine reverses heparin, not warfarin." },

// ---------------------------------------------------------------- MICROBIOLOGY
{ id:"q_mi_001", section:"microbiology", paper:"paper1", topic:"Necrotising fasciitis",
  stem:"Which feature most strongly suggests necrotising fasciitis rather than cellulitis?",
  options:[
    "Well-demarcated erythema",
    "Pain out of proportion to the clinical signs with rapid progression and systemic toxicity",
    "Lymphangitis tracking proximally",
    "A raised white cell count",
    "Response to oral flucloxacillin within 24 hours"],
  answer:1,
  explanation:"Pain out of proportion to the visible signs, rapid progression and systemic toxicity are the cardinal features; skin changes and crepitus are late. It is a clinical diagnosis and imaging must not delay surgery. Treatment is immediate radical debridement plus broad-spectrum antibiotics including clindamycin for its antitoxin effect. A low LRINEC score does not exclude it." },

{ id:"q_mi_002", section:"microbiology", paper:"paper1", topic:"Surgical prophylaxis",
  stem:"When should a single dose of prophylactic intravenous cefuroxime be administered?",
  options:[
    "At induction, within 60 minutes before incision",
    "12 hours before surgery",
    "Immediately after wound closure",
    "Once the specimen has been removed",
    "As a 5-day postoperative course"],
  answer:0,
  explanation:"Prophylaxis is timed so that tissue concentrations are adequate at incision — within 60 minutes beforehand, or 120 minutes for vancomycin and fluoroquinolones which need longer infusions. It is repeated only for prolonged surgery or major blood loss. Continuing beyond 24 hours increases resistance and Clostridioides difficile without reducing surgical site infection." },

{ id:"q_mi_003", section:"microbiology", paper:"paper1", topic:"Sterilisation",
  stem:"Which process reliably destroys bacterial spores?",
  options:[
    "Disinfection with 70 per cent alcohol",
    "Autoclaving at 134 degrees Celsius for 3 minutes",
    "Washing with chlorhexidine",
    "Pasteurisation",
    "Ultraviolet irradiation of the theatre air"],
  answer:1,
  explanation:"Sterilisation destroys all microorganisms including spores; disinfection reduces viable organisms but does not reliably kill spores. Steam under pressure at 134 degrees Celsius for 3 minutes (or 121 degrees for 15 minutes) is the standard for heat-stable instruments. Prions resist standard autoclaving, which is why single-use instruments are used for high-risk procedures." },

// ---------------------------------------------------------------- IMAGING
{ id:"q_im_001", section:"imaging", paper:"paper1", topic:"Contrast studies",
  stem:"A patient may have an oesophageal perforation. Which contrast agent should be used?",
  options:[
    "Barium sulphate",
    "A water-soluble iodinated agent",
    "Gadolinium",
    "Air alone",
    "No contrast should ever be used"],
  answer:1,
  explanation:"Barium causes a severe chemical mediastinitis or peritonitis if it leaks, so a water-soluble iodinated agent is used whenever perforation is possible. The trade-off is poorer mucosal detail and a risk of chemical pneumonitis if aspirated, so the choice is made with the radiologist." },

{ id:"q_im_002", section:"imaging", paper:"paper1", topic:"Radiation dose",
  stem:"Approximately what effective dose does a computed tomography scan of the abdomen and pelvis deliver?",
  options:["0.02 mSv","0.1 mSv","1 mSv","10 mSv","100 mSv"],
  answer:3,
  explanation:"About 10 mSv, roughly equivalent to 500 chest radiographs or three years of background radiation, with a small but real lifetime cancer risk that matters most in the young. Every exposure must be justified and optimised under the ALARP principle and the Ionising Radiation (Medical Exposure) Regulations." },

// ---------------------------------------------------------------- STATS
{ id:"q_st_001", section:"stats", paper:"paper1", topic:"Test characteristics",
  stem:"A test is applied to 1000 people, of whom 100 have the disease. It correctly identifies 90 of those with disease and 810 of those without. What is the positive predictive value?",
  options:["90 per cent","50 per cent","10 per cent","81 per cent","33 per cent"],
  answer:1,
  explanation:"True positives 90, false positives 900 minus 810 equals 90. Positive predictive value equals 90 divided by (90 plus 90), which is 50 per cent. Sensitivity is 90 per cent and specificity 90 per cent, but predictive value depends on prevalence — the classic trap. In a lower-prevalence population the positive predictive value would fall further." },

{ id:"q_st_002", section:"stats", paper:"paper1", topic:"Audit",
  stem:"Which statement best distinguishes clinical audit from research?",
  options:[
    "Audit requires ethical approval; research does not",
    "Audit measures practice against an existing standard; research generates new knowledge",
    "Audit uses only qualitative data",
    "Research must be randomised; audit must not be",
    "Audit is performed only by consultants"],
  answer:1,
  explanation:"Audit compares current practice with an accepted standard and, crucially, must be closed by re-auditing after change is implemented. Research asks what the standard should be and generates new knowledge. Research requires ethical approval; audit generally does not." },

// ---------------------------------------------------------------- CONDITIONS
{ id:"q_co_001", section:"conditions", paper:"paper2", topic:"Appendicitis",
  stem:"Why does the pain of acute appendicitis classically begin around the umbilicus before localising to the right iliac fossa?",
  options:[
    "The appendix is initially in a pelvic position",
    "Early visceral midgut pain is referred to the T10 dermatome; parietal peritoneal irritation later localises it",
    "The appendicular artery is an end artery",
    "The appendix has no serosa",
    "Referred pain travels via the phrenic nerve"],
  answer:1,
  explanation:"Visceral afferents from the midgut enter the cord at about T10, giving poorly localised periumbilical pain. Once inflammation reaches the parietal peritoneum, which is somatically innervated, the pain becomes sharp and localised over the appendix. The base of the appendix is constant at the confluence of the taeniae coli even though the tip is variable." },

{ id:"q_co_002", section:"conditions", paper:"paper2", topic:"Bowel obstruction",
  stem:"Which finding in small bowel obstruction most strongly indicates the need for immediate laparotomy rather than a trial of conservative management?",
  options:[
    "Vomiting",
    "Dilated loops exceeding 3 cm on plain radiograph",
    "Localised tenderness with tachycardia and a rising lactate",
    "Absolute constipation",
    "A history of previous abdominal surgery"],
  answer:2,
  explanation:"Localised tenderness, tachycardia, fever and a rising lactate suggest strangulation, which mandates urgent surgery. Adhesional obstruction without these features can be managed conservatively for 24 to 48 hours with drip and suck, and water-soluble contrast is both diagnostic and therapeutic. Closed-loop obstruction, obstructed hernia and perforation also demand surgery." },

{ id:"q_co_003", section:"conditions", paper:"paper2", topic:"Peptic ulcer",
  stem:"A posterior duodenal ulcer erodes into which vessel?",
  options:["Left gastric artery","Splenic artery","Gastroduodenal artery","Superior mesenteric artery","Right gastroepiploic artery"],
  answer:2,
  explanation:"The gastroduodenal artery lies immediately posterior to the first part of the duodenum, so a posterior ulcer erodes it and bleeds, sometimes torrentially. An anterior duodenal ulcer has no such relation and instead perforates into the peritoneal cavity, giving free gas under the diaphragm on an erect chest radiograph." },

{ id:"q_co_004", section:"conditions", paper:"paper2", topic:"Cholangitis",
  stem:"A jaundiced patient has right upper quadrant pain, rigors, hypotension and confusion. The most appropriate definitive management after resuscitation and antibiotics is:",
  options:[
    "Elective cholecystectomy in 6 weeks",
    "Urgent biliary decompression by endoscopic retrograde cholangiopancreatography",
    "Percutaneous cholecystostomy",
    "Observation with repeat liver function tests",
    "Immediate open common bile duct exploration"],
  answer:1,
  explanation:"Charcot's triad plus hypotension and confusion is Reynolds' pentad, indicating severe cholangitis. Pus under pressure in an obstructed system will not respond to antibiotics alone, so urgent biliary decompression — usually endoscopic — is required within 24 to 48 hours. Percutaneous transhepatic drainage is the alternative if endoscopy fails." },

{ id:"q_co_005", section:"conditions", paper:"paper2", topic:"Acute limb ischaemia",
  stem:"Which two of the six Ps indicate a threatened limb requiring revascularisation within hours?",
  options:[
    "Pain and pallor",
    "Pallor and pulselessness",
    "Paraesthesia and paralysis",
    "Perishing cold and pain",
    "Pulselessness and perishing cold"],
  answer:2,
  explanation:"Paraesthesia and paralysis indicate nerve and muscle ischaemia and mark a threatened limb needing revascularisation within hours. Fixed mottling that does not blanch indicates irreversible ischaemia. Pain, pallor, pulselessness and perishing cold occur earlier and are compatible with a viable limb." },

{ id:"q_co_006", section:"conditions", paper:"paper2", topic:"Abdominal aortic aneurysm",
  stem:"A 74-year-old man has sudden severe back pain, hypotension and a pulsatile abdominal mass. He is being prepared for a computed tomography scan. The most appropriate action is:",
  options:[
    "Proceed to computed tomography to confirm the diagnosis",
    "Give 2 litres of crystalloid to normalise the blood pressure first",
    "Immediate vascular referral and transfer to theatre or the endovascular suite with permissive hypotension",
    "Arrange an urgent outpatient ultrasound",
    "Start intravenous antibiotics and observe"],
  answer:2,
  explanation:"In a shocked patient with a known or clinically obvious ruptured aneurysm, imaging must not delay definitive treatment. Permissive hypotension aiming for a systolic pressure around 90 mmHg while the patient remains conscious avoids disrupting clot; aggressive fluid resuscitation worsens bleeding. Activate the major haemorrhage protocol and involve vascular surgery immediately." },

{ id:"q_co_007", section:"conditions", paper:"paper2", topic:"Testicular torsion",
  stem:"A 15-year-old has sudden severe testicular pain. The testis is high-riding with a transverse lie and the cremasteric reflex is absent. The next step is:",
  options:[
    "Urgent Doppler ultrasound before any intervention",
    "Antibiotics and analgesia with review in 24 hours",
    "Immediate scrotal exploration",
    "Urinalysis and sexually transmitted infection screen",
    "Elective outpatient urology referral"],
  answer:2,
  explanation:"Torsion is a clinical diagnosis and imaging must never delay exploration; the testis is usually salvageable within six hours and rarely beyond twelve. Treatment is immediate scrotal exploration with detorsion and bilateral fixation, since the underlying bell-clapper deformity is usually bilateral, with orchidectomy if the testis is non-viable." },

{ id:"q_co_008", section:"conditions", paper:"paper2", topic:"Breast assessment",
  stem:"A 45-year-old woman has a discrete breast lump. Triple assessment consists of:",
  options:[
    "Examination, mammography and magnetic resonance imaging",
    "Examination, imaging and pathology",
    "Mammography, ultrasound and core biopsy",
    "Examination, tumour markers and imaging",
    "Ultrasound, cytology and follow-up in 6 months"],
  answer:1,
  explanation:"Triple assessment is clinical examination, imaging (ultrasound under 40, mammography plus ultrasound over 40) and pathology (core biopsy), each independently scored 1 to 5. Any discordance between the three must be resolved before a patient is reassured. Core biopsy is preferred to fine-needle aspiration because it distinguishes invasive disease from carcinoma in situ and provides receptor status." },

{ id:"q_co_009", section:"conditions", paper:"paper2", topic:"Compartment syndrome",
  stem:"Which is the earliest and most reliable clinical sign of compartment syndrome?",
  options:[
    "Absent distal pulses",
    "Pain on passive stretch of the muscles in the compartment",
    "Paralysis",
    "Pallor of the limb",
    "Loss of capillary refill"],
  answer:1,
  explanation:"Pain out of proportion to the injury and pain on passive stretch are the earliest reliable signs. Pulses are usually present because compartment pressure rarely exceeds arterial pressure; waiting for pulselessness means waiting until the limb is lost. Treatment is to release all constricting dressings and proceed to urgent fasciotomy of all compartments." },

{ id:"q_co_010", section:"conditions", paper:"paper2", topic:"Cauda equina",
  stem:"A 40-year-old has bilateral sciatica, saddle anaesthesia, urinary retention and reduced anal tone. The correct next step is:",
  options:[
    "Plain lumbar spine radiographs and physiotherapy",
    "Emergency magnetic resonance imaging of the whole spine",
    "Computed tomography of the lumbar spine in the morning",
    "Analgesia and outpatient neurosurgical referral",
    "Bed rest for 48 hours and reassess"],
  answer:1,
  explanation:"This is cauda equina syndrome, a surgical emergency. Emergency magnetic resonance imaging is required, followed by decompression, ideally within 48 hours of the onset of sphincter symptoms; delay causes permanent bladder, bowel and sexual dysfunction. Any bladder or bowel disturbance with back pain is a red flag." },

{ id:"q_co_011", section:"conditions", paper:"paper2", topic:"Thyroid surgery",
  stem:"Four hours after total thyroidectomy a patient develops rapidly increasing neck swelling and stridor. The immediate management is:",
  options:[
    "Urgent computed tomography of the neck",
    "Nebulised adrenaline and intravenous dexamethasone",
    "Immediate opening of the wound at the bedside",
    "Urgent calcium level and intravenous calcium gluconate",
    "Return to theatre once an anaesthetist is available"],
  answer:2,
  explanation:"Postoperative haematoma after thyroidectomy causes airway compromise through venous congestion of the larynx rather than direct tracheal compression, and it progresses quickly. The wound must be opened at the bedside immediately to evacuate the clot; waiting for theatre or imaging risks a lost airway. Formal exploration follows once the airway is secure." },

{ id:"q_co_012", section:"conditions", paper:"paper2", topic:"Phaeochromocytoma",
  stem:"A patient with a phaeochromocytoma is being prepared for adrenalectomy. Which is correct?",
  options:[
    "Beta-blockade should be established before alpha-blockade",
    "Alpha-blockade should be established before beta-blockade",
    "Neither is required if the blood pressure is normal",
    "Only fluid restriction is required",
    "Calcium channel blockade alone is standard"],
  answer:1,
  explanation:"Alpha-blockade with phenoxybenzamine or doxazosin must come first, with volume repletion, because giving a beta-blocker first leaves alpha-mediated vasoconstriction unopposed and can precipitate a hypertensive crisis. Beta-blockade is added afterwards if tachycardia requires it. Never biopsy an adrenal mass before excluding phaeochromocytoma." },

// ---------------------------------------------------------------- PERIOPERATIVE
{ id:"q_pe_001", section:"periop", paper:"paper2", topic:"Fasting",
  stem:"What is the recommended minimum preoperative fasting time for clear fluids in an adult?",
  options:["30 minutes","2 hours","4 hours","6 hours","Nil by mouth from midnight"],
  answer:1,
  explanation:"Two hours for clear fluids, four hours for breast milk, and six hours for solids and formula milk. Prolonged unnecessary fasting causes dehydration, hypoglycaemia and distress without improving safety, and works against enhanced recovery, which encourages preoperative carbohydrate loading." },

{ id:"q_pe_002", section:"periop", paper:"paper2", topic:"Consent",
  stem:"Following Montgomery v Lanarkshire Health Board, the test for what risks must be disclosed during consent is:",
  options:[
    "What a responsible body of medical opinion would disclose",
    "Any risk with an incidence above 1 per cent",
    "What a reasonable patient in that position would want to know",
    "Only risks the patient specifically asks about",
    "Only risks of death or permanent disability"],
  answer:2,
  explanation:"Montgomery (2015) replaced the professional standard with a patient-centred one: material risks are those to which a reasonable person in the patient's position would attach significance, or which this particular patient would. Reasonable alternatives, including doing nothing, must also be discussed, and the discussion documented." },

{ id:"q_pe_003", section:"periop", paper:"paper2", topic:"Capacity",
  stem:"Under the Mental Capacity Act 2005, a person is unable to make a decision if they cannot do which of the following?",
  options:[
    "Read and write",
    "Understand, retain, weigh the information and communicate a decision",
    "Make a decision that the clinical team considers wise",
    "Recall the conversation the following day",
    "Give reasons acceptable to their family"],
  answer:1,
  explanation:"Capacity requires the ability to understand the information, retain it long enough to decide, weigh it in the balance and communicate the decision. It is decision-specific and time-specific, and is presumed unless demonstrated otherwise. An unwise decision is not itself evidence of incapacity." },

{ id:"q_pe_004", section:"periop", paper:"paper2", topic:"Hyperkalaemia",
  stem:"A postoperative patient has a potassium of 7.1 mmol/L with tall tented T waves. The first drug to give is:",
  options:[
    "Insulin with 50 per cent dextrose",
    "Nebulised salbutamol",
    "10 mL of 10 per cent calcium gluconate",
    "Oral potassium binder",
    "Intravenous sodium bicarbonate"],
  answer:2,
  explanation:"Calcium gluconate is given first to stabilise the myocardium against arrhythmia. It does not lower the potassium — it buys time. Insulin with dextrose and nebulised salbutamol then shift potassium intracellularly, and definitive removal follows by treating the cause, a potassium binder or dialysis." },

{ id:"q_pe_005", section:"periop", paper:"paper2", topic:"Transfusion reaction",
  stem:"Ten minutes into a red cell transfusion a patient develops fever, loin pain, hypotension and dark urine. The most likely diagnosis is:",
  options:[
    "Febrile non-haemolytic transfusion reaction",
    "Acute haemolytic transfusion reaction from ABO incompatibility",
    "Transfusion-related acute lung injury",
    "Transfusion-associated circulatory overload",
    "Delayed haemolytic reaction"],
  answer:1,
  explanation:"Fever, loin or chest pain, hypotension and haemoglobinuria within minutes indicate ABO incompatibility, usually from a clerical error in patient identification. Stop the transfusion immediately, keep the intravenous line, check the identity of patient and unit, inform the laboratory, resuscitate and support renal function. Report to the Serious Hazards of Transfusion scheme." },

{ id:"q_pe_006", section:"periop", paper:"paper2", topic:"Steroid cover",
  stem:"A patient taking prednisolone 10 mg daily for two years requires an emergency laparotomy. What is required?",
  options:[
    "Stop the prednisolone on the day of surgery",
    "Continue the usual dose and add perioperative hydrocortisone",
    "Double the oral dose only",
    "No change is necessary",
    "Convert to inhaled steroid"],
  answer:1,
  explanation:"More than the equivalent of 5 mg prednisolone daily for over three months should be assumed to suppress the hypothalamic-pituitary-adrenal axis, so the patient cannot mount a stress response. Continue the usual dose and add hydrocortisone according to the magnitude of surgery. Never stop long-term steroids abruptly — the risk is an Addisonian crisis with hypotension unresponsive to fluids." },

{ id:"q_pe_007", section:"periop", paper:"paper2", topic:"Diathermy",
  stem:"Monopolar diathermy should be avoided in which situation?",
  options:[
    "Dissection of the gallbladder from its bed",
    "Surgery on a structure with a narrow pedicle such as the penis or a digit",
    "Any laparotomy",
    "Skin incision in a thin patient",
    "Whenever a return electrode is used"],
  answer:1,
  explanation:"Current channelling through a narrow pedicle concentrates energy and causes necrosis, so monopolar diathermy is avoided on appendages. Bipolar diathermy confines the current to the tissue between the forceps tips and is safe. Other monopolar hazards include return plate burns, alternative site burns, cardiac device interference and ignition of alcoholic skin preparation." },

{ id:"q_pe_008", section:"periop", paper:"paper2", topic:"Anastomotic leak",
  stem:"On day 5 after an anterior resection a patient has a tachycardia of 110, a low-grade fever, ileus and a C-reactive protein that has risen from 90 to 220. The most likely diagnosis is:",
  options:["Atelectasis","Anastomotic leak","Urinary tract infection","Deep vein thrombosis","Postoperative ileus alone"],
  answer:1,
  explanation:"A C-reactive protein that fails to fall after day 3 to 4, or rises again, with tachycardia and a patient not progressing as expected, should be assumed to be an anastomotic leak until proved otherwise. Computed tomography with contrast is the investigation of choice, but a negative scan in the first 48 hours does not exclude it. Do not accept atelectasis as an explanation for a deteriorating patient." },

{ id:"q_pe_009", section:"periop", paper:"paper2", topic:"Venous thromboembolism prophylaxis",
  stem:"After open surgery for colorectal cancer, the recommended duration of pharmacological thromboprophylaxis is:",
  options:["Until discharge only","7 days","14 days","28 days","3 months"],
  answer:3,
  explanation:"Extended prophylaxis for 28 days is recommended after major abdominal or pelvic cancer surgery, because the thrombotic risk persists well beyond discharge. After hip arthroplasty the recommended duration is 35 days. Risk assessment is mandatory on admission and at 24 hours, combining mechanical and pharmacological measures unless contraindicated." },

// ---------------------------------------------------------------- TRAUMA
{ id:"q_tr_001", section:"trauma", paper:"paper2", topic:"Primary survey",
  stem:"A trauma patient arrives with a spurting wound to the thigh, a patent airway and a respiratory rate of 22. The first priority is:",
  options:[
    "Endotracheal intubation",
    "Control of the catastrophic external haemorrhage",
    "Two large-bore cannulae and 2 litres of crystalloid",
    "Whole-body computed tomography",
    "Log roll and secondary survey"],
  answer:1,
  explanation:"Modern practice places catastrophic external haemorrhage control before the airway, giving <C>ABCDE. A tourniquet or direct pressure takes seconds and addresses the immediate threat to life. The airway is patent here, as demonstrated by the patient's ability to be assessed, and crystalloid is not the resuscitation fluid of choice in haemorrhage." },

{ id:"q_tr_002", section:"trauma", paper:"paper2", topic:"Tension pneumothorax",
  stem:"A hypotensive trauma patient has distended neck veins, tracheal deviation to the left and absent breath sounds on the right. The immediate management is:",
  options:[
    "Urgent portable chest radiograph",
    "Immediate needle decompression followed by chest drain",
    "Intubation and positive pressure ventilation",
    "Pericardiocentesis",
    "Computed tomography of the chest"],
  answer:1,
  explanation:"Tension pneumothorax is a clinical diagnosis and must not await imaging. Immediate decompression is now recommended in the fourth or fifth intercostal space in the mid-axillary line in adults, followed by a formal chest drain. Positive pressure ventilation before decompression will worsen the tension." },

{ id:"q_tr_003", section:"trauma", paper:"paper2", topic:"Tranexamic acid",
  stem:"In major trauma, tranexamic acid confers a mortality benefit when given within what time of injury?",
  options:["30 minutes","1 hour","3 hours","6 hours","24 hours"],
  answer:2,
  explanation:"The CRASH-2 trial demonstrated a mortality benefit when tranexamic acid is given within 3 hours of injury; given later it may cause harm. It works by inhibiting plasminogen binding to fibrin, countering the hyperfibrinolysis of acute traumatic coagulopathy." },

{ id:"q_tr_004", section:"trauma", paper:"paper2", topic:"Burns resuscitation",
  stem:"A 70 kg adult has 30 per cent total body surface area burns. Using the Parkland formula, how much crystalloid should be given in the first 8 hours?",
  options:["2100 mL","4200 mL","8400 mL","1050 mL","6300 mL"],
  answer:1,
  explanation:"Parkland gives 4 mL times weight times percentage burn — 4 × 70 × 30 = 8400 mL over 24 hours, with half (4200 mL) in the first 8 hours calculated from the time of the burn, not the time of arrival. The formula is a starting point only; the resuscitation is titrated to a urine output of 0.5 mL/kg/h in adults." },

{ id:"q_tr_005", section:"trauma", paper:"paper2", topic:"Neurogenic shock",
  stem:"A patient with a mid-thoracic spinal injury is hypotensive with a heart rate of 52 and warm peripheries. After excluding haemorrhage, the most appropriate treatment is:",
  options:[
    "Further fluid boluses alone",
    "Vasopressor support, often with an anticholinergic",
    "High-dose methylprednisolone",
    "Immediate surgical decompression",
    "Blood transfusion"],
  answer:1,
  explanation:"Neurogenic shock results from loss of sympathetic tone in injuries above T6, giving hypotension with bradycardia and warm peripheries — the opposite of the tachycardia and cold peripheries of haemorrhagic shock. Fluids alone will not restore vascular tone, so vasopressors are needed. High-dose steroids are no longer recommended in acute spinal cord injury." },

{ id:"q_tr_006", section:"trauma", paper:"paper2", topic:"Head injury",
  stem:"Which finding mandates computed tomography of the head within one hour according to NICE guidance?",
  options:[
    "Any loss of consciousness",
    "A single episode of vomiting",
    "Glasgow Coma Scale below 13 on initial assessment",
    "A headache responding to simple analgesia",
    "Amnesia of less than 30 minutes"],
  answer:2,
  explanation:"A Glasgow Coma Scale below 13 on arrival, or below 15 at two hours, requires imaging within one hour, as do a suspected open or depressed skull fracture, signs of a base-of-skull fracture, post-traumatic seizure, focal neurological deficit and more than one episode of vomiting. Anticoagulated patients with loss of consciousness or amnesia are imaged within eight hours." },

{ id:"q_tr_007", section:"trauma", paper:"paper2", topic:"Pelvic fracture",
  stem:"A pelvic binder should be applied at the level of the:",
  options:["Iliac crests","Greater trochanters","Umbilicus","Anterior superior iliac spines","Mid-thigh"],
  answer:1,
  explanation:"The binder must sit at the level of the greater trochanters to close the pelvic ring; placed too high over the iliac crests it fails to reduce pelvic volume and does not control bleeding. Bleeding is mostly venous from the presacral plexus and cancellous bone, so volume reduction and packing are the mainstays, with angioembolisation for arterial bleeding." },

{ id:"q_tr_008", section:"trauma", paper:"paper2", topic:"Urethral injury",
  stem:"A patient with a pelvic fracture has blood at the urethral meatus and perineal bruising. The correct next step is:",
  options:[
    "Gentle urethral catheterisation with a small catheter",
    "Retrograde urethrogram before any catheterisation",
    "Immediate suprapubic catheter without imaging",
    "Intravenous urogram",
    "Catheterise only if the patient cannot void"],
  answer:1,
  explanation:"Blood at the meatus, a high-riding prostate or perineal bruising suggests urethral injury, and blind catheterisation risks converting a partial tear into a complete disruption. A retrograde urethrogram is performed first, with urological involvement and suprapubic diversion if catheterisation is unsafe." },

// ---------------------------------------------------------------- PAEDS
{ id:"q_pd_001", section:"paeds", paper:"paper2", topic:"Pyloric stenosis",
  stem:"A 5-week-old boy has projectile non-bilious vomiting. Which management step must precede surgery?",
  options:[
    "Nasogastric feeding to improve nutrition",
    "Correction of the hypochloraemic hypokalaemic metabolic alkalosis",
    "Barium meal to confirm the diagnosis",
    "Broad-spectrum antibiotics",
    "Immediate pyloromyotomy without delay"],
  answer:1,
  explanation:"Pyloric stenosis is a medical emergency requiring correction before it becomes a surgical one. The characteristic hypochloraemic, hypokalaemic metabolic alkalosis with paradoxical aciduria must be corrected with 0.9 per cent sodium chloride and potassium, because alkalosis causes postoperative apnoea. Diagnosis is by ultrasound, and Ramstedt pyloromyotomy follows once biochemistry is normal." },

{ id:"q_pd_002", section:"paeds", paper:"paper2", topic:"Safeguarding",
  stem:"Which fracture pattern in an infant should most strongly raise suspicion of non-accidental injury?",
  options:[
    "Greenstick fracture of the distal radius in a toddler",
    "Posterior rib fractures in a non-mobile infant",
    "Clavicular fracture in a newborn after shoulder dystocia",
    "Toddler's fracture of the tibia in a walking child",
    "Buckle fracture of the distal radius after a fall"],
  answer:1,
  explanation:"Posterior rib fractures require anteroposterior compression of the chest and are highly suspicious, particularly in a non-mobile infant, as are metaphyseal corner fractures, fractures of different ages and any injury inconsistent with the developmental stage. The child's safety comes first: examine fully, document with body maps, involve a senior and the safeguarding team, and do not discharge until safety is assured." },

// ---------------------------------------------------------------- PROFESSIONAL
{ id:"q_pp_001", section:"profpractice", paper:"paper2", topic:"Brainstem death",
  stem:"Which is a precondition that must be satisfied before brainstem death testing can proceed?",
  options:[
    "The family must have consented to organ donation",
    "An irreversible cause of coma must be established and hypothermia, drugs and severe metabolic disturbance excluded",
    "An electroencephalogram must show no activity",
    "The patient must have been ventilated for at least 7 days",
    "Two consultants from the transplant team must perform the tests"],
  answer:1,
  explanation:"Preconditions are a known irreversible cause of coma and exclusion of hypothermia, drug effects and severe metabolic or endocrine disturbance. Two doctors registered for more than five years, at least one a consultant and neither part of the transplant team, perform two sets of tests. Consent for donation is a separate matter and is discussed with the specialist nurse for organ donation." },

]};
