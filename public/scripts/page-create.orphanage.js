const map = L.map("mapid").setView([-23.5456156, -46.634976], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//Criar ou Adicionar Marcador

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //Remover Icone
  marker && map.removeLayer(marker);

  //Adicionar o icone
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Adicionar o campo de fotos
function addPhotoField() {
  // [x] Get Container de fotos  #images
  const container = document.querySelector("#images");

  // [x] Pegar para duplicar na hora de exibir tela
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // [x] Fazer Clone da imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //Verificar se o campo está vazio ta vazio

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // [x] Limpar o campo já preenchido na imagem =O
  input.value = "";

  // [x] Add o clone ao container de imagens =)
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //Limpa
    span.parentNode.children[0].value = "";
    return;
  }

  //Deletar campo
  span.parentNode.remove();
}

//Trocar Sim ou não no form =3

function toggleSelect(event) {
  //Remover a classe active
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });
  //Colocoar a classe active && Pegar o botão clicado (active)

  const button = event.currentTarget;
  button.classList.add("active");

  //Atualizar o input hidden com valor selecionado

  const input = document.querySelector("[name=open-on-weekends]");

  input.value = button.dataset.value;

  //verificar se é sim ou não
}



// function validar(event) {
//   const needsLatandLng = true;
//   if (needsLatandLng) {
//     event.preventDefault();
//     alert("Selecione um ponto no mapa");
//   }
// }
