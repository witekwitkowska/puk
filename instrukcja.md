# Jak edytować stronę PUK Borne Sulinowo?

- [Słowo wstępu](#słowo-wstępu)
- [Redakcja treści](#redakcja-treści)
  * [Aktualności](#aktualności)
  * [Dokumenty do pobrania](#dokumenty-do-pobrania)
  * [Harmonogram odbioru odpadów](#harmonogram-odbioru-odpadów)
- [Publikacja zmian](#publikacja-zmian)
- [Formatowanie tekstu](#formatowanie-tekstu)
- [Linkowanie](#linkowanie)
- [Raportowanie problemów](#raportowanie-problemów)

## Słowo wstępu

Wszystkie treści dostępne do edytowania znajdują się w folderze *content/*, w subfolderach o nazwach odpowiadającym nazwom zakładek na stronie. Aby edytować treści na stronie należy być zalogowanym na portalu https://github.com/ oraz mieć upoważnionym do modyfikowania plików wewnątrz repozytorium https://github.com/witekwitkowska/puk/ . 

## Redakcja treści

Aby modyfikować plik należy najpierw znaleźć plik, który chcemy zmienić (zakładka *Code* folder *content* / *folder odpowiedniej zakładki* / *nasz plik* ) otworzyć go w trybie do przeglądania (klikając w jego nazwę) a potem kliknąć w ikonę długopisu w jego prawym górnym rogu ( *Edit this file* ). W większości przypadków będzie to plik *_index.md*. Należy edytować tylko wybrane treści i nic poza tym! Wszystkie pozostałe elementy nawet takie jak np "---" są ważne przy konpilowaniu strony! 

Oprócz pól z informacjami takimi jak tytuł strony czy data publikacji postu pod drugim znacznikiem "---" znajduje się treść właściwa strony. Treść ta formatowana jest według zasad języka markdown. Podstawowe zasady formatowania tutaj: [Formatowanie tekstu](#formatowanie)

### Aktualności

Objaśnienie pól w pliku *aktualnosci/_index.md*:  
**title**: "Aktualności" // Tytuł storny wyświetlany na granatowym tle ze zdjęciem na górze strony  
**short_name**: "Aktualności"   
**draft**: false  
**bg_image**: "images/backgrounds/aktualności.jpg" // link do zdjęcia wyświetlanego na górze strony pod granatowym tłem  
**description** : "" // Opis który pojawiłby się pod tytułem strony na granatowym tle ze zdjęciem na górze zdtrony  

Objaśnienie pól w pliku *aktualnosci/29-04-2020.md*:

**title**: "PSZOK ponownie otwarty!" // Tytuł storny wyświetlany na granatowym tle ze zdjęciem na górze strony  
**date**: "2020-04-29T15:27:17+06:00" // Data która ma być przypisana do aktualności  
**draft**: false  
**bg_image**: "images/backgrounds/aktualności.jpg" // link do zdjęcia wyświetlanego na górze strony pod granatowym tłem  
**description** : ""  
**image**: "images/aktualnosci/drzwi.jpg" // link do zdjęcia które wyświetla się na kafelku z *Aktualnością*  
**image_alt**: "Zdjęcie przedstawiające uchylone drzwi" // opis zdjęcia (na kafelku) opisujący treść zdjęcia (ważne dla dostępności strony)  
**category**: Inne // każda aktualność powinna być przyporządkowana do kategorii, według których aktualności można filtrować  
**type**: "aktualnosci"  

#### Modyfikacja istniejącej *Aktualności*

1. Zmienić treści na aktulne i tylko te co do których mamy pewność
2. Kiedy jesteśmy zadowoleni ze zmian przejść do działu: [Publikacja zmian](#publikacja)

#### Utworzenie nowej *Aktualności*

1. Będąc w folderze *content/aktualnosci* przycisnąć *Add file*, nazwać go według konwencji dd-mm-rrr.md
2. Aby wyeliminować możliwe błędy skopuj i wklej do nowego pliku całą treść z już istniejącej i poprawnie działającej *Aktualności*
3. Modyfikuj treści aby pasowały do nowej *Aktualności*
4. Kiedy jesteśmy zadowoleni ze zmian przejść do działu: [Publikacja zmian](#publikacja)

### Dokumenty do pobrania

Wszystkie pliki dostępne do pobrania przez odwiedzających stronę i wyświetlanych w zakładce *Dokumenty do pobrania* muszą znajdować się w folderze *content/dokumenty-do-pobrania/* oraz wylistowane w pliku *content/dokumenty-do-pobrania/_index.md*

Oznaczenia pól w pliku *dokumenty-do-pobrania/_index.md*:  
**title**: "Dokumenty do pobrania"  // Tytuł storny wyświetlany na granatowym tle ze zdjęciem na górze strony    
**draft**: false  
**bg_image**: "images/backgrounds/dokumenty-do-pobrania.jpg"  // link do zdjęcia wyświetlanego na górze strony pod granatowym tłem  
**feature_item**:  
   **name** : "Dokumenty do pobrania"  
   **icon** : "ti-download" # icon pack : https://themify.me/themify-icons  
   **content** : "Wyszukaj i pobierz wszystkie potrzebne dokumenty."  // Treść wyświetlana na stronie głównej (ikona z opisem i linkiem do zakładki)  
**description** : ""  // Opis który pojawiłby się pod tytułem strony na granatowym tle ze zdjęciem na górze zdtrony   
**resources**:  
 - **src**: borne-sulinowo-budynki-jednorodzinne.pdf  // Dokładna nazwa pliku z dokumentem umieszczonego w folderze  
   **title**: Harmonogram wywozu śmieci dla budynków jednorodzinnych w Bornem Sulinowie (pdf) // Nazwa pliku wyświetlana na liście w zakładce *Dokumenty do pobrania*    
   **params**:  
        **category**: harmonogramy // Każdy dokument powinien mieć przypisaną kategorię, inaczej będzie wyświetlany tylko w zakłądce *Wszystkie*  
        **order**: 5 // Kolejność w jakiej dokument ma się wyświetlić na liście  
        
 #### Dodawanie nowego dokumenty
 
 1. Umieść dokument w folderze *content/dokumenty-do-pobrania/*
 2. Dodaj do listy dokumentów nowy zapis (Rekomendowane: skopiuj zapis istniejącego już wcześniej dokumentu i tylko modyfikuj treść aby pasowała do nowego)  
   ```
    - src: borne-sulinowo-budynki-niezamieszkale.pdf
      title: Harmonogram wywozu śmieci dla budynków niezamieszkałych w Bornem Sulinowie (pdf)
      params:
          category: harmonogramy
          order: 7
   ```
        
##### Ważne!!! Dokument wylistowany w pliku *_index.md* musi istnieć i znajdować się w folderze *dokumenty-do-pobrania*

3. Przejdź do [Publikacja zmian](#publikacja-zmian)

### Harmonogram odbioru odpadów

Opis pól pliku *content/harmonogram-odbioru-odpadow/_index.md*  
**title**: "Harmonogram odbioru odpadów" // Tytuł storny wyświetlany na granatowym tle ze zdjęciem na górze strony    
**short_name**: "Harmonogramy" // Krótka nazwa zakładki do wyświetlania w stopce strony  
**draft**: false  
**bg_image**: "images/backgrounds/harmonogram.jpg"  // link do zdjęcia wyświetlanego na górze strony pod granatowym tłem    
**feature_item**:
   **name** : "Harmonogram"  
   **icon** : "ti-calendar" # icon pack : https://themify.me/themify-icons  
   **content** : "Sprawdź aktualny harmonogram na rok 2020/2021."  // Treść skrótu (ikona + opis) na stronie głównej  
**category**: "harmonogram" // Nazwa kategorii aktualności przypisana do Harmonogramów  
**aktualnosci_enabled**: "True" // Opcja do wyświetlania aktualności z kategorii powyżej pod główną treścią zakładki.  Opcje: True lub False  

Opis pól pliku *content/harmonogram-odbioru-odpadów/rejon1.md*:  
**title**: "Rejon I z utrudnionym dojazdem" // Tytuł kafelka z kalendarzem  
**draft**: false  
**download**: "rejon1.pdf" // Dokładna nazwa pliku do pobrania  
**description** : ""  
**Id**: "rejon1-calendar"  
**calendar**:  

  - **name** : "Odpady Komunalne"  // Kategoria odpadów wyświetlana w legendzie kalendarza  
    **dates** : ["2020,12,2","2020,12,16","2020,12,30","2020,1,13","2020,1,27","2020,2,10","2020,2,24","2020,3,10","2020,3,24","2020,4,7","2020,4,21"]  // Daty wywozu odpadów z danej kategorii do zaznaczenia na kalendarzu  
    **color** : "#000000"  
    
#### Aktualizacja dat wywozy odpadów

Wszystkie wyminione daty zostaną zaznaczone na kalendarzu odpowiadającym kolorem. Data musi myć w środku cudzysłowia w formacie RRRR,MM,DD (dopuszczalne obie formy dnia i miesiąca z uzupełniającym zerem (2020,04,01) lub bez (2020,4,1)  Dodatkowo daty muszą być oddzielone od siebie przecinkami.

#### Aktualizacja listy podmiotów których dotyczy wywóz

Lista podmiotów znajduje się w każdym pliku z harmonogramem do drugim znaczniku "---" Pod tytułem: "Kogo dotyczy?"


#### Po aktualizacji harmonogramów przejdź do [Publikacja zmian](#publikacja-zmian)

## Publikacja zmian

1. Kiedy zmiany są gotowe do publikacji, pod edytorem tekstu znajdować się będzie okno zatytułowane **Commit changes**. 
2. W pierwszym polu należy wpisać nazwę zmiany, np. "Zmiana tytułu w zakładce Aktualności" oraz (opcjonalnie) wyjaśnienie wprowadzonych zmian w kolejnym polu.
3. Jeśli jesteśmy pewni wprowadzonych zmain ( powinien być zaznaczony checkbox *Commit directly to the initial branch.* ) zatwierdzić zmiany klikając zielony przycisk *Commit changes". W przeciągu 30 sec do 2 minut zmiany powinny być widoczne na stronie.
4. Aby sprawdzić czy zmiany zostały poprawnie opublikowane można wejść w zakładkę *Actions* i poszukać czy przy nazwie którą nadaliśmy dla naszych zmian znajduje się zielony ptaszek. Jeśli jednak pojawił się tam czerwony krzyżyk patrz: [Raportowanie problemów](#raportowanie)

Ad. 3. Jeśli nie jesteśmy pewni wprowadzonych zmian możemy albo unieważnić zmiany czerwonym przyciskiem *Cancel* albo zaznaczyć checkbox *Create a new branch for this commit and start a pull request. Learn more about pull requests.* i dopiero potem kliknąć *Commit changes* Takie zmiany będą czekały na zatwierdzenie przeze mnie.

## Formatowanie tekstu
Najczęściej używane formatowanie tekstu można osiągnąć za pomocą (Do zastosowania po drugim znaczniku "---" w plikach .md):  
1. Lista (gwiazdka):
```
* Zużyte kartridże i tonery;
* Przepracowane oleje;
* Przeterminowane leki;
```
2. Pogrubienie tekstu (podwójna gwiazdka)
```
**Odpady**
```
3. Nagłówki (hasztagi #,##,###,####,#####)
```
### Co możesz oddać do PSZOK?
```
4. Kursywa (Pojedyńcza gwiazdka)
```
*Odpady*
```
5. Nowa linia (podwójna spacja na końcu linii)

### Linkowanie

Jest to spósób na tworzenie linków (dokumentów do pobrania, linków zewnętrznych lub zakładek na stronie) w treści właściwej plików .md, czyli po drugim znaczniku "---".

#### Linkowanie dokumentu do pobrania
```
[tutaj]({{< resource "regulamin-PSZOK-wodociągowa.pdf" >}})
```
tutaj -> tekst służący jako link
"regulamin..." -> dokładna nazwa pliku do pobrania

#### Linkowanie linku zewnętrznego
```
[tutaj](http://bornesulinowo.artlookgallery.com/grobonet/start.php)
```
tutaj -> tekst służący jako link
(https://bo...) -> w nawiasach link prowadzący poza stronę PUKu

lub po prostu: 
```
http://bornesulinowo.artlookgallery.com/grobonet/start.php
```

#### Linkowanie do zakładki na stronie

## Raportowanie problemów

Problemy lub pytania dotyczące modyfikowania i publikowania treści ( jak i prośby o upoważnienie osób do edycji strony ) proszę zgłaszać w następujący sposób:
 1. Na stronie głównej repozytorium ( https://github.com/witekwitkowska/puk ) wejść w zakładkę *issues*
 2. Otworzyć nowy *issue* za pomocą zielonego przycisku *New issue*, wpisać nazwę problemu (pole *Title* ) oraz opisać problem ( pole *Leave a comment* )
 3. Następnie przypisać *issue* do mnie klikając po prawej stronie pod napisem *Assignees* w mój profil (witekwitkowska)  - w ten sposób zostanę poinformowana mailowo o zgłoszeniu problemu i będę mogła szybko zareagować.
 4. Zatwierdzić klikając przycisk *Submit new issue*
 
 *Jeśli nie udało się oznaczyć mnie przed kliknięciem *Submit new issue* można to zrobić też po dodaniu *issue* w ten sam sposób co w punkcie 3.
