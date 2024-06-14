import { authors } from "./utils/authors.js";
import { Header } from "./components/Header/Header.js";
import Card from "./components/Card/Card.js";

/**
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */

/** Get root element */

const root = document.querySelector("#root");

const header1 = Header();
root.append(header1);



authors.forEach((author) => {
  const card = Card(author);
  root.append(card);
});
