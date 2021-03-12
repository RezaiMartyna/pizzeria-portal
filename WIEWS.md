# Dashboard
-`/`
  - statystyki dzisiejszym zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# logowanie
-`/login`
 - pola na login i hasło i guzik do zalogowania (link do dashbordu)

# Widok dostepnosci stoików
-`/tables`
 - wyboru daty i godziny
 - tabela z listą rezerwacji oraz wydarzeń
  - każda kolumna będzi jednym stolikiem
  - każdy wersz będzie blkiem 30 min
  - ma przypominać widok tygodnia w kalendarzu googla gdzię w kolumach zamiast dni są różne stoliki
  - po kliknięciu rezerwacji lub eventu przechodzimy do strony szczegółó
-`/tables/booking/:id`
 - zawiera wszystkie inforacje dotyczace rezerwacji
 - umozliwia edycje i zapisanie zmian
-`/tables/booking/new`
 - analogicznie do powzej bez początkowych informacji
-`/tables/events/:id`
 - analogicznie do powzej bez początkowych informacji
-`/tables/events/new`
 - analogicznie do powzej bez początkowych informacji

# widok kelnera
-`/waiter`
 - tabela
  - wiersze wyswietlaja stoliki
  - kolumny rozne rodzaje informacji (status, czas od ostaniej aktywnosci )
  - w ostaniej kolumnie dostępne akcje dla danego stolika
-`/waiter/order/new`
 - number stolika (edytowalny)
 - menu produktów
 - opcje wybranego porduktu
 - zamówienie (zamówieone produkty z opcjami i ceną)
 - kwota zamówienia
-`/waiter/order/:id`
 - jak powyżej

# widok kuchni
-`/kitchen`
 - wyświetlać listę zamówień w kolejności ich złożenia
 - lista musi zawierać numer stolika ( lub zamówienia zndalnego)
 - pełne onformacje dot zamówień dań
 - na liscie musi byc możliowsc oznaczenia zamowienia jako zrezalizowane
