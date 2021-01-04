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
**category**: Inne // każda aktualność powinna być przyporządkowana do kategorii, według których aktualności można filtrować, 
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
        
##### Ważne!!! Dokument wylistowany w pliku *_index.md* musi istnieć i znajdować się w folderze *dokumenty-do-pobrania*

## Publikacja

1. Kiedy zmiany są gotowe do publikacji, pod edytorem tekstu znajdować się będzie okno zatytułowane **Commit changes**. 
2. W pierwszym polu należy wpisać nazwę zmiany, np. "Zmiana tytułu w zakładce Aktualności" oraz (opcjonalnie) wyjaśnienie wprowadzonych zmian w kolejnym polu.
3. Jeśli jesteśmy pewni wprowadzonych zmain ( powinien być zaznaczony checkbox *Commit directly to the initial branch.* ) zatwierdzić zmiany klikając zielony przycisk *Commit changes". W przeciągu 30 sec do 2 minut zmiany powinny być widoczne na stronie.
4. Aby sprawdzić czy zmiany zostały poprawnie opublikowane można wejść w zakładkę *Actions* i poszukać czy przy nazwie którą nadaliśmy dla naszych zmian znajduje się zielony ptaszek. Jeśli jednak pojawił się tam czerwony krzyżyk patrz: [Raportowanie problemów](#raportowanie)

Ad. 3. Jeśli nie jesteśmy pewni wprowadzonych zmian możemy albo unieważnić zmiany czerwonym przyciskiem *Cancel* albo zaznaczyć checkbox *Create a new branch for this commit and start a pull request. Learn more about pull requests.* i dopiero potem kliknąć *Commit changes* Takie zmiany będą czekały na zatwierdzenie przeze mnie.

## Raportowanie problemów

Problemy lub pytania dotyczące modyfikowania i publikowania treści ( jak i prośby o upoważnienie osób do edycji strony ) proszę zgłaszać w następujący sposób:
 1. Na stronie głównej repozytorium ( https://github.com/witekwitkowska/puk ) wejść w zakładkę *issues*
 2. Otworzyć nowy *issue* za pomocą zielonego przycisku *New issue*, wpisać nazwę problemu (pole *Title* ) oraz opisać problem ( pole *Leave a comment* )
 3. Następnie przypisać *issue* do mnie klikając po prawej stronie pod napisem *Assignees* w mój profil (witekwitkowska)  - w ten sposób zostanę poinformowana mailowo o zgłoszeniu problemu i będę mogła szybko zareagować.
 4. Zatwierdzić klikając przycisk *Submit new issue*
 
 *Jeśli nie udało się oznaczyć mnie przed kliknięciem *Submit new issue* można to zrobić też po dodaniu *issue* w ten sam sposób co w punkcie 3.
