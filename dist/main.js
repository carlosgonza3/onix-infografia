

const sec1_titles = ["Nuestra Filosofía", "Misión", "Visión"];
const sec1_images = ["sec1-sheeps.jpg", "sec1-mision.png", "sec1-bed.png"];
const sec1_alt = [
  "Imagen de Mujer leyendo en la cama",
  "Imagen de horda de ovejas blancas con una oveja negra",
  "Imagen de cuarto moderno con una cama arreglada en el centro"
];

const sec1_text = [
  "Descansar bien no es un lujo, sino la base para vivir mejor y parte de la idea de que cada día puede comenzar con el pie derecho cuando el cuerpo y la mente encuentran verdadero equilibrio durante la noche.",
  "Ofrecer mucho más que un colchón: una nueva forma de descansar. Creemos que empezar el día con el “pie derecho” hace la diferencia, por eso diseñamos cada colchón con tecnología avanzada, materiales de alto rendimiento y una comodidad pensada para ayudar a las personas a despertar renovadas, con el cuerpo y la mente en equilibrio.",
  "Aspiramos a transformar la manera en que los salvadoreños descansan, brindándoles la oportunidad de reiniciar su cuerpo y su mente cada noche. Visualizamos una experiencia de descanso que, con el tiempo, eleve la salud, rejuvenezca el cuerpo y se integre de forma natural en un estilo de vida refinado, estableciendo un nuevo estándar de confort y calidad del sueño."
];

function sec1_toggle(target) {
  const img = document.getElementById("sec1-img");
  const text = document.getElementById("sec1-text");

  // Fade out
  img.classList.add("sec1-fade-out");
  text.classList.add("sec1-fade-out");

  // Swap after fade out finishes
  setTimeout(() => {
    img.src = `./assets/${sec1_images[target]}`;
    img.alt = sec1_alt[target];
    text.textContent = sec1_text[target];

    // Title
    document.getElementById("sec1-title").textContent = sec1_titles[target]

    // Buttons
    document.getElementById("sec1-b0").classList.remove("selected");
    document.getElementById("sec1-b1").classList.remove("selected");
    document.getElementById("sec1-b2").classList.remove("selected");
    document.getElementById(`sec1-b${target}`).classList.add("selected");

    // Fade back in
    img.classList.remove("sec1-fade-out");
    text.classList.remove("sec1-fade-out");
  }, 180);
}