const anuncio = document.createElement("h1");
anuncio.textContent = "CANAL NO DISPONIBLE";
anuncio.classList.add("canal-alerta");

const cambiarCanal = (canal) =>{
    const cont = document.getElementById("contenedor");
    const video = document.getElementById("videoCont");
    video.style.display = "block";

    let idVideo = "#"
    switch (canal) {
        case 1:
            idVideo = "Htc7GR4HkvA"
            break;
        case 2:
            idVideo = "pp2_DYAEqQQ";
            break;
        case 3:
            idVideo = "HHMV_X2jEW8";
            break;
        case 4:
            idVideo = "l3TRESEqYX4";
            break;
        case 5:
            idVideo = "NurUfFogrQM";
            break;
        case 6:
            idVideo = "IpkbQ3VKel0";
            break;
        case 7:
            idVideo = "m3x7mdaRHmY";
            break;
        case 8:
            idVideo = "yJSiUm6jvI0";
            break;
        case 9:
            idVideo = "LXb3EKWsInQ";
            break;
        default:
            video.style.display = "none";
            cont.appendChild(anuncio);  
    }

    url = `https://www.youtube.com/embed/${idVideo}?autoplay=1&controls=0`
    video.src = url;
}
