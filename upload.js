// ======================================
// upload.js
// RAC SOUTH TIMES CMS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // File Preview
    // ==========================

    const fileInput = document.querySelector("#fileInput");
    const preview = document.querySelector("#previewContainer");

    if (fileInput && preview) {

        fileInput.addEventListener("change", () => {

            preview.innerHTML = "";

            [...fileInput.files].forEach(file => {

                const reader = new FileReader();

                reader.onload = e => {

                    const card = document.createElement("div");

                    card.className = "preview-item";

                    if (file.type.startsWith("image")) {

                        card.innerHTML = `
                            <img src="${e.target.result}" alt="">
                            <p>${file.name}</p>
                        `;

                    } else {

                        card.innerHTML = `
                            <i class="fa fa-file fa-3x"></i>
                            <p>${file.name}</p>
                        `;

                    }

                    preview.appendChild(card);

                };

                reader.readAsDataURL(file);

            });

        });

    }

    // ==========================
    // Drag & Drop
    // ==========================

    const dropArea = document.querySelector("#dropArea");

    if (dropArea && fileInput) {

        ["dragenter", "dragover"].forEach(event => {

            dropArea.addEventListener(event, e => {

                e.preventDefault();

                dropArea.classList.add("active");

            });

        });

        ["dragleave", "drop"].forEach(event => {

            dropArea.addEventListener(event, () => {

                dropArea.classList.remove("active");

            });

        });

        dropArea.addEventListener("drop", e => {

            e.preventDefault();

            fileInput.files = e.dataTransfer.files;

            fileInput.dispatchEvent(new Event("change"));

        });

    }

    // ==========================
    // Upload Progress Demo
    // ==========================

    const form = document.querySelector("#uploadForm");
    const progressBar = document.querySelector("#uploadProgress");

    if (form && progressBar) {

        form.addEventListener("submit", e => {

            e.preventDefault();

            let progress = 0;

            const timer = setInterval(() => {

                progress += 5;

                progressBar.style.width = progress + "%";
                progressBar.textContent = progress + "%";

                if (progress >= 100) {

                    clearInterval(timer);

                    alert("Upload completed successfully!");

                    form.reset();

                    if (preview) {

                        preview.innerHTML = "";

                    }

                    progressBar.style.width = "0%";
                    progressBar.textContent = "0%";

                }

            }, 80);

        });

    }

    // ==========================
    // Preview Remove
    // ==========================

    document.addEventListener("click", e => {

        if (e.target.classList.contains("remove-preview")) {

            e.target.parentElement.remove();

        }

    });

});