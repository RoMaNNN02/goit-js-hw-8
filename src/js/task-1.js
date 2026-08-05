const input = document.querySelector("#bookmarkInput");
const btn = document.querySelector("#addBookmarkBtn");
const list = document.querySelector("#bookmarkList");

const handleLinkInput = () => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Видалити";
  link.href = input.value;
  link.textContent = input.value;
  item.append(link, removeBtn);
  list.append(item);
  const handleRemoveLinkInput = () => {
    item.remove();
  };
  removeBtn.addEventListener("click", handleRemoveLinkInput);
};
btn.addEventListener("click", handleLinkInput);
