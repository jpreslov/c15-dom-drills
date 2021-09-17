window.addEventListener("DOMContentLoaded", function () {
  //   let liBtn = document.getElementsByClassName("li-btn")[0];
  let liBtn = document.querySelector(".li-btn");
  let counter = 1;

  let container = document.createElement("div");
  container.className = "header-container";
  document.body.appendChild(container);

  let h1 = document.createElement("h1");
  let h1Text = document.createTextNode("This is an h1.");
  h1.appendChild(h1Text);
  h1.className = "h1";
  container.appendChild(h1);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("This is an h2.");
  h2.appendChild(h2Text);
  h2.className = "h2";
  container.appendChild(h2);

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode("This is an h3.");
  h3.appendChild(h3Text);
  h3.className = "h3";
  container.appendChild(h3);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode("This is an h4.");
  h4.appendChild(h4Text);
  h4.className = "h4";
  container.appendChild(h4);

  let h5 = document.createElement("h5");
  let h5Text = document.createTextNode("This is an h5.");
  h5.appendChild(h5Text);
  h5.className = "h5";
  container.appendChild(h5);

  let h6 = document.createElement("h6");
  let h6Text = document.createTextNode("This is an h6.");
  h6.appendChild(h6Text);
  h6.className = "h6";
  container.appendChild(h6);
  //   h6.addEventListener("dblclick", function () {
  //     let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'teal', 'brown', 'purple'];

  //     h6.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  // });

  let headerArr = [h1, h2, h3, h4, h5, h6];
  for (let i = 0; i < headerArr.length; i++) {
    headerArr[i].addEventListener("dblclick", function () {
      let colors = [
        "red",
        "green",
        "blue",
        "orange",
        "yellow",
        "teal",
        "brown",
        "purple",
      ];

      // console.log(headerArr[i])
      headerArr[i].style.color =
        colors[Math.floor(Math.random() * colors.length)];
    });
  }

  liBtn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = "This is list item " + counter;
    container.appendChild(li);

    counter++;

    li.addEventListener("click", function () {
      let colors = [
        "red",
        "green",
        "blue",
        "orange",
        "yellow",
        "teal",
        "brown",
        "purple",
      ];

      li.style.color =
        colors[Math.floor(Math.random() * colors.length)];
    });

    li.addEventListener("dblclick", function(){
        li.remove()
    })
  });
});
