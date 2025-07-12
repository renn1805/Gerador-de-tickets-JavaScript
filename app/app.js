const inputFile = document.querySelector("#input-file");



inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    if (file.size < 500000) {
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function (e) {
                const readerTarget = e.target;
                const img = document.createElement("img");
                img.src = readerTarget.result

                const imgConteiner = document.querySelector('.div-img-upload')
                imgConteiner.classList.add('conteiner-nova-img')
                imgConteiner.innerHTML = ""
                imgConteiner.appendChild(img)
            });

            reader.readAsDataURL(file);
        } else {
            console.log("error");
        }

        const spanUploadInfo = document.querySelector('#upload-info');
        spanUploadInfo.style.color = "hsl(245, 15%, 58%)";
    } else {
        alert('imagem muito pesada')
        spanUploadInfo.style.color = "hsl(7, 71%, 60%)";
    }
});
