document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const fm = document.getElementById("fm");
  const na = document.getElementById("na");

  const body = document.getElementsByTagName("body");



  const imagenes = [
 "assets/Steve Jobs.jpeg"

  ]
  const frases = [
 "El único modo de hacer un gran trabajo es amar lo que haces.",
"No cuentes los días, haz que los días cuenten.",
"La vida es 10% lo que me sucede y 90% cómo reacciono a ello.",
"El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
"No dejes que el miedo a perder sea mayor que la emoción de ganar.",
"La mejor manera de predecir el futuro es inventarlo."
  ];

  const autores = [
"Steve Jobs",
"Muhammad Ali",
"Charles R. Swindoll",
 "Robert Collier",
"Robert Kiyosaki",
  ]

  fm.textContent = frases[0];
    na.textContent = autores[0];

  btn.addEventListener("click", ()=>{
    var num = Math.floor(Math.random() * 5);
 fm.textContent = frases[num];
    na.textContent = autores[num];
    body[0].setAttribute("style, "background-Image: URL")

  });
});
