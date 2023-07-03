var result = document.getElementById("myform");
result.addEventListener("submit", function (event) {
  event.preventDefault();

  let ans = event.target.amount.value;
  let ans2 = event.target.description.value;
  let ans3 = event.target.category.value;

  let obj = {
    ans,
    ans2,
    ans3
  }
  localStorage.getItem("details", JSON.stringify(obj));
  showResult(obj);



  function showResult() {
    let parent = document.getElementById("listofItems");
    let child1 = document.createElement("li");
    child1.textContent = obj.ans + " " + obj.ans2 + " " + obj.ans3;

    let child2 = document.createElement("input");
    child2.type = "button";
    child2.style.margin = "4px";
    child2.value = "delete";

    child2.onclick = () => {
      localStorage.removeItem("details");
      parent.removeChild(child1);
    }

    let child3 = document.createElement("input");
    child3.type = "button";
    child3.value = "Edit";

    child3.onclick = () => {
      localStorage.removeItem("details");
      parent.removeChild(child1);

      document.getElementById("amount").value = obj.ans;
      document.getElementById("description").value = obj.ans2;
      document.getElementById("category").value = obj.ans3;
    }
    child1.appendChild(child2);
    child1.appendChild(child3);
    parent.appendChild(child1);


  }

})
