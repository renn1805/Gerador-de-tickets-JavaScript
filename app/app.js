const inputFile = document.querySelector("#input-file");

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
            img.src = readerTarget.result;

            const imgConteiner = document.querySelector(".div-img-upload");
            imgConteiner.classList.add("conteiner-nova-img");
            imgConteiner.innerHTML = "";
            imgConteiner.appendChild(img);
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
const botaoGenerateTicket = document.querySelector(".generate-ticket");
botaoGenerateTicket.addEventListener("click", function () {
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
      inputGitname.style.border = "2px solid hsla(246, 15%, 58%, 0.438)";
   }
});
