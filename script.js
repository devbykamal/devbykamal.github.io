window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

document
  .getElementById("mobileNavOpener")
  .addEventListener("click", function () {
    document.getElementById("mobileNav").style.right = 0;
  });

document
  .getElementById("mobileNavCloser")
  .addEventListener("click", function () {
    document.getElementById("mobileNav").style.right = "-400px";
  });

document.getElementById("learnMore").onclick = function () {
  POPUP.open(` <h2>Holiday tomorrow!</h2>
            <br>
            <hr>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti atque quasi deserunt natus,
                consectetur possimus eius quas nemo quisquam officiis? Quas non illum molestias, dolore voluptatum illo,
                qui beatae accusantium, corporis voluptate pariatur sequi? Accusantium repellat error enim consequatur
                incidunt libero praesentium, obcaecati pariatur aut at fugit commodi laudantium, dicta adipisci nulla
                dolorem animi delectus nobis! Aspernatur debitis voluptate dignissimos numquam, hic animi sit excepturi
                non praesentium unde blanditiis laborum? Esse, officia vel laudantium commodi ea praesentium incidunt
                labore dignissimos facere. Animi totam, eius temporibus beatae amet vero et perferendis magni
                voluptatum. Atque cumque numquam similique libero voluptate aut nostrum modi odio, sed quasi
                reprehenderit accusantium quisquam magni molestiae nulla omnis ut ducimus? Ex voluptatum nemo cum quis
                beatae! Odio itaque in nostrum esse tempore earum beatae rerum! Suscipit illum quisquam qui error
                incidunt cumque hic in, sunt quo odit, expedita mollitia soluta ipsam aut? Accusantium quo totam iusto
                neque voluptatibus at eligendi vel eveniet dolorum labore. Asperiores, impedit. Fugiat, quis mollitia?
                Sit pariatur, nihil alias dolor vero consequatur qui vitae cum nobis ipsam, ad voluptate libero
                exercitationem! Minus eligendi voluptates officia culpa impedit expedita voluptatum modi, magnam amet!
                Sunt illo optio temporibus nihil eius a at et rem.</p>
            <br>
            <a href="#">Read More &rarr;</a>`);
};
document.getElementById("hireMe").onclick = function () {
  POPUP.open(`<h1>Hire me please</h1>`);
};

const maxNumber = 15;
let currentNumber = 1;

const counterInterval = setInterval(() => {
  if (currentNumber !== maxNumber) currentNumber++;
  else clearInterval(counterInterval);
  document.getElementById("counter").innerText = currentNumber;
}, 100);
