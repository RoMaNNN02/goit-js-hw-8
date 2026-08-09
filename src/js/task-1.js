import Handlebars from "handlebars";
import bookmarkListTemplate from "bundle-text:../templates/handlebars.hbs";

const input = document.querySelector("#bookmarkInput");
const btn = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");

const createBookmarkMarkup = Handlebars.compile(bookmarkListTemplate);

const handleLinkInput = () => {
  const link = input.value;

  const markupBookmark = createBookmarkMarkup(link);

  list.insertAdjacentHTML("beforeend", markupBookmark);

  const item = list.lastElementChild;
  const removeBtn = item.querySelector(".removeBtn");

  const handleRemoveLinkInput = () => {
    item.remove();
  };

  removeBtn.addEventListener("click", handleRemoveLinkInput);
};
btn.addEventListener("click", handleLinkInput);
