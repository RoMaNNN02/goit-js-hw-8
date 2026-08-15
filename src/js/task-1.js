import * as storage from "./storage.js";
import Handlebars from "handlebars";
import bookmarkListTemplate from "bundle-text:../templates/handlebars.hbs";
const STORAGE_BOOKMARK_KEY = "bookmarks";
const input = document.querySelector("#bookmarkInput");
const btn = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");
const links = storage.load(STORAGE_BOOKMARK_KEY) || [];
const createBookmarkMarkup = Handlebars.compile(bookmarkListTemplate);
list.innerHTML = createBookmarkMarkup(links);
const handleLinkInput = () => {
  const link = input.value;

  if (link) {
    const linkObject = {
      link,
      id: crypto.randomUUID(),
    };
    links.push(linkObject);
    list.innerHTML = createBookmarkMarkup(links);
    storage.save(STORAGE_BOOKMARK_KEY, links);
  }
};
const handleRemoveLinkInput = (e) => {
  const task = e.target.closest("[data-id]");
  if (task) {
    const id = task.dataset.id;
    const indexToRemove = links.findIndex((task) => task.id === id);
    links.splice(indexToRemove, 1);
    list.innerHTML = createBookmarkMarkup(links);
    storage.save(STORAGE_BOOKMARK_KEY, links);
  }
};
list.addEventListener("click", handleRemoveLinkInput);
btn.addEventListener("click", handleLinkInput);
