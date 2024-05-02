import {Author} from "./author";
import {Critic} from "./critic";
import {Reader} from "./reader";

const author = new Author();

const critic: Critic = new Critic(author);
const reader: Reader = new Reader(author);

author.setText('fuck you, hallowelt');