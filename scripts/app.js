const inputFile = document.querySelector("#input-file");
const formCadastro = document.querySelector('#formCadastro')
const spanUploadInfo = document.querySelector("#upload-info");


inputFile.addEventListener("change", function (e) {
   const inputTarget = e.target;
   const file = inputTarget.files[0];
   if (file.size < 500000) {
      if (file) {
         const reader = new FileReader();
         reader.addEventListener("load", function (e) {
            const readerTarget = e.target;
            const img = document.createElement("img");
            const imgTicket = document.createElement("img");

            img.src = readerTarget.result;
            imgTicket.src = readerTarget.result;

            const imgConteiner = document.querySelector(".div-img-upload");
            imgConteiner.classList.add("conteiner-nova-img");
            imgConteiner.innerHTML = "";
            imgConteiner.appendChild(img);

            const imgConteinerTicket = document.querySelector('.img-avatar')
            imgConteinerTicket.appendChild(imgTicket);

         });

         reader.readAsDataURL(file);
      } else {
         console.log("error");
      }

      spanUploadInfo.style.color = "hsl(245, 15%, 58%)";
   } else {
      spanUploadInfo.style.color = "hsl(7, 88%, 67%)";
      alert("imagem muito pesada");
   }
});

// todo: parte do botão e formularios

const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputGitname = document.querySelector("#input-gitname");
const gitname = inputGitname.value.trim();
const botaoGenerateTicket = document.querySelector(".generate-ticket");

const spanName = document.querySelector('.span-full-name')
const spanEmail = document.querySelector('.span-email')
const spanGit = document.querySelector('.span-git')
const spanInformationsName = document.querySelector('.nome-ticket')

formCadastro.addEventListener("submit", function (e) {

   e.preventDefault()
   if (inputFile.value === "") {
      spanUploadInfo.style.color = "hsl(7, 88%, 67%)";
   } else {
      spanUploadInfo.style.color = "hsl(245, 15%, 58%)";
   }

   if (
      inputName.value.trim() !== "" &&
      inputEmail.value.trim() !== "" &&
      inputGitname.value.trim() !== ""
   ) {
      spanName.innerHTML = inputName.value.trim()
      spanInformationsName.innerHTML = inputName.value.trim()
      spanEmail.innerHTML = inputEmail.value.trim()
      spanGit.innerHTML = inputGitname.value.trim()

      genereteTicket()
   } else if (inputName.value.trim() === "") {
      // ? input name
      inputName.style.border = "2px solid hsl(7, 88%, 67%)";
   } else {
      inputName.style.border = "2px solid hsla(246, 15%, 58%, 0.438)";
   }

   if (inputEmail.value.trim() === "") {
      // ? input email
      inputEmail.style.border = "2px solid hsl(7, 88%, 67%)";
      document.querySelector(".error-email").style.display = "flex";
   } else {
      inputEmail.style.border = "2px solid hsla(246, 15%, 58%, 0.438)";
      document.querySelector(".error-email").style.display = "none";
   }

   if (inputGitname.value.trim() === "") {
      //? input github
      inputGitname.style.border = "2px solid hsl(7, 88%, 67%)";
   } else {
      alert('deu errado')
      inputGitname.style.border = "2px solid hsla(246, 15%, 58%, 0.438)";
   }
});

function genereteTicket() {
   document.querySelector("#preTicket").style.opacity = "0"
   setTimeout(() => {
      document.querySelector("#preTicket").style.display = "none"
      document.querySelector("#posTicket").style.opacity = "1"
      document.querySelector("#posTicket").style.transform = "translateX(0)"
   }, 1000)
}
