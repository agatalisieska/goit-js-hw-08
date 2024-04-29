// zadanie 2 ANALIZA METODY JSON.parse()

// ciąg JSON w formacie tekstowym
const json = '{"name":"Mango","age":3,"isHappy":true}';
// zamiana JSON na obiekt JavaScript
const user = JSON.parse(json);
// wyświetlenie przekonwertowanego ciągu w formie obiektu -
// właściwości obiektu odpowiadają oryginalnemu ciągowi JSON
console.log(user);

// zadanie 3 OBSŁUGA BŁĘDÓW
// tworzę zmienną
let zwierzak;
// mam zmienną JSON w formacie tekstowym, której ostatni element jest zapisany niepoprawnie
let schronisko = '{"pies1":"Buba", "pies2":"Lulu", "pies3":Meli}';

try {
  // wykonaj próbę parsowania - kod, który powinien się wykonać bez błędów i zamienić tekst na obiekt
  zwierzak = JSON.parse(schronisko);
} catch (error) {
  // wyłapywanie błędów z podaniem "name" tego błędu oraz jego "message"
  console.error("Name:", error.name);
  console.error("Message:", error.message);
}
// upewnienie się, że skrypt działa poprawnie, nawet w przypadku wystąpienia błędu
console.log("Kod mimo wszystko się uruchamia");
