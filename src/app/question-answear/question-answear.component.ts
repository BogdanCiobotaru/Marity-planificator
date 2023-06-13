import { Component, OnInit } from '@angular/core';
import { AnswearsAndQuestions } from '../phone-frame.interface';

@Component({
  selector: 'app-question-answear',
  templateUrl: './question-answear.component.html',
  styleUrls: ['./question-answear.component.scss'],
})
export class QuestionAnswearComponent implements OnInit {
  public indexExpanded: number;
  public isHidden = true;

  public displayContents: AnswearsAndQuestions[]

  public ngOnInit(): void {
    this.displayContents = [
      {
        question: 'Ce este Marity Business? ',
        answear: 'Este prima aplicație dedicată organizatorilor de evenimente din România. Marity Business ajută antreprenorii din industrie să își promoveze și să-și dezvolte afacerea printr-un set de unelte digitale puternice, menite să ușureze efortul în gestionarea afacerii și să faciliteze comunicarea cu potențialii clienti. De asemenea, Marity Business oferă posibilitatea afacerilor din domeniul organizarii evenimentelor să își publice și să își administreze propria pagină de prezentare, publicată pe platforma www.marity.ro'
      },
      {
        question: 'Cum pot folosi Marity Business?? ',
        answear: `Aplicația mobilă Marity Business este disponibilă grauit în Android și AppStore pentru toți prestatorii de servicii și organizatorii de evenimente din România. Aplicația vine în sprijinul managerilor printr-un aspect intuitiv și o ușurință deosebită în utilizare.  Este important să utilizați toate funcțiile disponibile pentru a avea parte de o experiență totală: 
        </br>
        </br>
        Publicarea paginii tale de prezentare îți permite să beneficiezi de vizibilitate maximă în rândul potențialilor clienți și să-ți promovezi serviciile în mod eficient. Pagina ta va fi afișată pe Marity.ro, unde mii de persoane care caută organizatori de evenimente își pot găsi oferta potrivită.
        Atunci când publici pagina de prezentare, aceasta va fi disponibilă pentru vizualizare pe platforma noastră și va conține informații esențiale despre afacerea ta: detalii de contact, portofoliu, servicii oferite, recenzii de la clienți mulțumiți și multe altele. Așa vei putea atrage atenția și încrederea potențialilor clienți și îi vei convinge să apeleze la serviciile tale. Pe lângă publicarea paginii tale de prezentare, vei avea acces și la instrumente avansate de administrare și actualizare a conținutului. Astfel, poți adăuga sau modifica informațiile, poți încărca fotografii sau videoclipuri relevante și poți actualiza oricând disponibilitatea ta pentru evenimente viitoare.
        </br>
        </br>        Pe langă pagina de prezentare web și mobile responsive pe care o vei construi cu ușurință direct din aplicație, Marity Business oferă utilizatorilor prima unealtă digitală CRM (Customer Relationship Manager) dedicată operatorilor din industria organizării evenimentelor. Funcții precum Smart Calendar, crearea și gestionarea profilurilor de clienți, generarea de oferte și contracte pentru aceștia, gestionarea facilă și intuitivă a meniurilor sau a pachetelor de servicii sunt numai câteva dintre functionalitățile pe care Marity Business le oferă.
        </br>
        </br>
        Îți recomandăm să citești Condițiile de utilizare ale www.marity.ro și aplicației mobile Marity Business unde vei găsi informații interesante despre toate funcționalitățile disponibile. Iar dacă nu te descurci, ai mereu posibilitatea de a apela la un consultant Marity, prin serviciul de relații cu clienții.
         `
      },
      {
        question: 'Cum ar trebui să arate pagina mea de prezentare de pe www.marity.ro?',
        answear: `Serviciul de publicare al paginii de prezentare este pentru totdeauna gratuit și nu necesită niciun fel de cunoștințe de webdesign sau de programare. Simplu și intuitiv, de pe tabletă sau de pe telefonul mobil, îți vei crea, completând câteva câmpuri, o veritabilă pagină de prezentare, web și mobile responsive cu care îți vei impresiona viitorii clienți. Ce este important de știut:
        </br>
        •  <strong>Publică o descriere cât mai detaliata:</strong> Organizatorii de evenimente ar trebui să ofere o descriere detaliată a serviciilor pe care le oferă, evidențiind punctele forte și experiența lor în domeniu. Ar trebui să sublinieze serviciile specifice, cât și cele suplimentare oferite gratuit sau contra cost clienților. 
        </br>
        •  <strong>Informații despre echipă:</strong> Organizatorii de evenimente pot prezenta, în cadrul descrierii afacerii, echipa lor și experiența individuală a membrilor, evidențiind astfel expertiza și profesionalismul lor în domeniu.
        </br>
        •  <strong>Informații despre premii și recunoașteri obținute:</strong> Dacă organizatorii de evenimente au obținut premii sau au fost recunoscuți în industrie, aceste informații pot fi incluse în descriere pentru a sublinia calitatea și profesionalismul lor.
        </br>
        •  <strong>Informații de contact:</strong> Pagina ar trebui să conțină informații de contact clare și actualizate, inclusiv numele afacerii, adresa, numărul de telefon și adresa de e-mail, pentru a permite clienților să vă contacteze cu ușurință. De asemenea, clienții au oportunitatea de a vă contacta în mod direct, prin platforma  www.marity.ro. 
        </br>
        •  <strong>Integrare cu rețelele de socializare:</strong> Pagina de prezentare poate fi integrată cu platformele de social media ale organizatorului de evenimente, permițând vizitatorilor să urmărească și să interacționeze cu conținutul lor pe diverse canale.
        </br>
        •  <strong>O fotografie face cât o mie de cuvinte:</strong> Împărtășește, în mod continuu, fotografii și videoclipuri de la evenimente anterioare, care să scoată în evidență faptul că ești alegerea potrivită pentru clienții tăi. Platinguri, aranjamente florale, sesiuni foto-video, melodii live, catering, fiecare imagine specifică business-ului tău va fi apreciată pe scară largă de vizitatorii paginii de prezentare. Studiile arată că șansele de achiziție pentru noi clienți cresc cu 65% pentru afacerile care oferă galerii foto-video cuprinzătoare, pentru că acestea cresc gradul de încredere inițială în afacerea ta.
        </br>
        •  <strong>Calendarul afacerii:</strong> Prin serviciul Smart Calendar nu numai că poți să îți gestionezi eficient evenimentele, dar poți publica, pe pagina de prezentare a afacerii tale, datele libere pe care dorești să le ocupi. Fără telefoane inutile, fără a dezamăgi clientul pentru că nu a reușit o colaborare cu tine.
        </br>
        •  <strong>Superoferte:</strong> Cu toții apreciem promoțiile pe care furnizorii le oferă clienților. Vei putea crește numărul de clienți și îi vei putea îndruma să aleagă anumite date libere pentru a completa calendarul anual al evenimentelor. 
        </br>
        •  <strong>Atenție sporită:</strong> Completează, cu atenție și sinceritate, toate secțiunile paginii de prezentare. Este important să oferi vizitatorilor o experiență digitală reală asupra afacerii tale.`
      },
      {
        question: 'Ce imagini pot încărca în pagina de prezentare?',
        answear: `Platforma www.marity.ro oferă posibilitatea de a încărca un număr nelimitat de imagini și link-uri ale videoclipurilor de prezentare. Îți recomandăm ca imaginile să fie reprezentative pentru afacerea ta și să scoată în evidență calitățile unice ale acesteia. De exemplu, pentru un salon sau ballroom care găzduiește evenimente, o fotografie cu sala pregătită de eveniment, o filmare din dronă a locației sau un plating ca de revistă vor atrage atenția vizitatorilor. Fotografii profesioniști vor conduce ostilitățile în această secțiune, publicând acele sedințe foto spectaculoase care imortalizează zilele speciale ale clienților lor.
        </br>
        Îți recomandăm, totodata, să obții, în prealabil, acordul persoanelor pentru imaginile care conțin informații personale. Pentru detalii suplimentare legate de politica de publicare a materialului foto-video, îți recomandăm să citești condițiile de utilizare.`
      },
      {
        question: 'Cum funcționează comunicarea cu clienții?',
        answear: `Comunicarea constantă cu vizitatorii de pe platforma www.marity.ro este neîngrădită și încurajată. Toate datele de contact pe care le vei publica vor fi disponibile potențialilor clienți. Suplimentar, punem la dispozitia organizatorilor de evenimente un sistem de comunicare direct de pe platforma www.marity.ro, prin care clienții vor putea solicita detalii suplimentare iar mesajul va apărea în aplicația mobilă Marity Business. Pentru a fi în permanent contact, îți vom trimite și un push notification și un email pentru a te anunța de oportunitate.
        </br>
        Clienții care decid să achiziționeze un abonament Executive sau Prestige vor beneficia și de un serviciu de chat cu clienții care își organizează nunta prin aplicația 360 Planner by Marity. `
      },
      {
        question: 'Cum pot crește vizibilitatea paginii mele pentru utilizatori?',
        answear: `Creșterea vizibilității paginilor de prezentare este o activitate bilaterală. Pe deoparte Platforma www.marity.ro:
        </br>
        •  Optimizată SEO pentru motoarele de căutare cele mai populare, pentru o afișare optimă la căutarea după cuvinte cheie specifice
        </br>
        • Campanii de publicitate targetate și plătite pe rețelele de socializare relevante
        </br>
        • Participări la târguri și expoziții de profil, pentru creșterea vizibilității platformei
        </br>
        • Colaborări cu influenceri din industrie sau relevanți nișei de vizitatori
        </br>
        • Colaborări cu bloggeri și jurnaliști de profil pentru creșterea expuneriiâ
        </br>
        </br>
        Pe de altă parte, în mod individual, fiecare afacere se poate evidenția în cadrul platformei printr-un set de activități care să conducă la creșterea vizibilității, a numărului de accesări și, implicit, a numărului de clienți:
        </br>
        • Publicarea de informații corecte, complete și actualizate despre afacerea ta
        </br>
        • Distribuirea paginii de prezentare pe rețelele de social media. Conectați pagina de prezentare la toate 
        canalele de marketing pe care le utilizați. Algoritmul de afișare în cadrul platformei ia în calcul afișarea cu prioritate a paginilor de prezentare cu mai mulți vizitatori
        </br>
        • Publicarea constantă de conținut foto-video. Algoritmul de afișare în cadrul platformei ia în calcul afișarea cu prioritate a paginilor de prezentare actualizate cu conținut relevant în mod constant.
        </br>
        • Solicitați recenzii de la clienții mulțumiți. Algoritmul de afișare în cadrul platformei ia în calcul afișarea cu prioritate a paginilor de prezentare cu medii pozitive ale recenziilor
        </br>
        • Creați campanii promoționale. Serviciile care vor oferi super promoții vor avea însemne distincte în cadrul aplicației.
        `
      },
      {
        question: 'Care este tipul de abonament pe care ar trebui să îl aleg?',
        answear: `Marity oferă organizatorilor de evenimente 3 tipuri de abonamente, conținând pachete de produse și servicii pe care Marity, reprezentând platforma www.marity.ro, aplicația mobila Marity Business și aplicața 360 Planner by Marity le oferă. Recomandările Marity pentru selecția abonamentului sunt următoarele:
        </br>
        1.Abonamentul <strong>Essential</strong>
        </br>
        Principalul atu al acestui abonament este faptul că este complet gratuit, și va rămâne gratuit pentru totdeauna. Se recomandă utilizarea acestui abonament pentru afacerile mici, prestatori de servicii deja consacrați în nișa lor de clienți, care își doresc o expunere discretă și o apartenență la comunitatea zonală de prestatori din industrie. Nu este recomandat startup-urilor și afacerilor cu planuri de expansiune, din cauza posibilităților foarte limitate de expunere, cât și din cauza limitărilor legate de utilizarea funcționalităților CRM și business management. 
        </br>
        1.Abonamentul <strong>Executive</strong>
        </br>
         Cel mai popular tip de abonament.  Disponibil pentru un preț accesibil, acest tip de abonament oferă o experiență totală asupra funcționalităților Marity, fiind pretabil atât startup-urilor cât și afacerilor stabile, chiar și celor cu strategie de scaleup. Veți obține o expunere sporită, veți avea vizibilitate pe o arie mai mare și, implicit, veți gestiona o  listă mult mai mare de oportunități. Totodată, veți beneficia de toate funcțiile CRM și business management pe care Marity le oferă prin aplicația mobilă Marity Business. 
         </br>
        Abonamentul <strong>Prestige</strong>
        </br>
        Așa cum sugerează și numele, acest tip de abonament reprezintă soluția pretabilă prestatorilor de servicii care își doresc o experiență exclusivistă în cadrul Marity. În esență, acest tip de abonament se adresează afacerilor care au obținut deja statutul de prestator de top în zona lor și care își doresc atât menținerea acestui statut, cât și extinderea operațiunilor pe o arie mai mare. Utilizatorii Prestige vor primi asistență dedicată în construirea paginii de prezentare, vor experimenta primii de noile facilități oferite, vor avea o expunere privilegiată în fața vizitatorilor și se vor bucura de o serie de facilități și gratuități pe care Marity le oferă.
        `
      },
      {
        question: 'Se poate efectua plata cu OP bancar?',
        answear: 'Toate plățile către Marity se efectuează doar cu cardul, prin serviciile securizate de plată oferite de Stripe.'
      },
      {
        question: 'Cum urmăresc performanțele paginii mele?',
        answear: 'În principal, ne dorim ca performanța paginii tale să genereze oportunități noi de afaceri. Actualizările paginii vor genera vizitatori mai mulți, iar statisticile detaliate le vei putea urmări în aplicația Marity Business. De asemenea, tot în aplicație vei putea măsura impactul serviciilor suplimentare de promovare achiziționate.'
      },
      {
        question: 'Pot genera contracte, oferte?',
        answear: `Aplicația mobilă Marity Business oferă posibilitatea de generare și de trimitere a ofertelor comerciale personalizate. În condițiile în care oferta dumneavoastră este acceptată, aplicația mobilă Marity Business poate genera un contract semnat între părți, după un model standad propus de Marity sau după orice alt model predefinit. Toate aceste oferte și contracte sunt gestionabile din aplicația mobilă și pot fi modificate, sterse sau retrimise în orice moment. Totodată, generarea unui contract poate adăuga evenimentul în Smart 
        Calendar, pentru eficientizarea procesului de business management. 
        </br>
        Ofertele comerciale, contractele, cât și orice alte informații cu caracter personal au un statut securizat în aplicația Marity Business și nu vor fi niciodată afișate nimănui fără acordul dumneavoastră.`
      },
      {
        question: 'Ai o alta întrebare?',
        answear: 'Îți stăm la dispoziție pentru orice informație sau detaliu suplimentar prin serviciul de relații cu clienții. Abonamentele Executive și Prestige beneficiază de asistență dedicată.'
      },


    ]
  }

  public toggleElement() {
    this.isHidden = !this.isHidden;
  }

  public showAnswearDetails(index: number): void {
    this.indexExpanded = this.indexExpanded === index ? -1 : index;
  }
}
