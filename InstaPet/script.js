document.addEventListener('DOMContentLoaded', function() {
	const photoInput = document.getElementById('file');
	const iconContainer = document.querySelector('.icon');
	const submitButton = document.getElementById('submit-button');
  
	photoInput.addEventListener('change', function() {
	  iconContainer.innerHTML = `
	  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z"/></svg>
	  `;
		submitButton.style.display = 'block';
	});
  
	$(document).ready(function () {
		$(".card").on("click", "#del-btn", function () {
			var imageToDelete = $(this).siblings("img").attr("src");
	
			// Envoie une requête DELETE au serveur
			$.ajax({
				type: "DELETE",
				url: "delete.py",
				data: { action: "delete", image: imageToDelete },
				success: function (response) {
					location.reload();
				},
				error: function (xhr, status, error) {
					console.log('Erreur lors de l\'envoi du fichier. ');
				}
			});
		});
	});
	

	$(document).ready(function() {
		$('#submit-button').click(function() {
			var fileInput = $('#file')[0].files;
			if (fileInput.length > 0) {
				var formData = new FormData();
				for (var i = 0; i < fileInput.length; i++) {
					formData.append('file[]', fileInput[i]);
				}

				$.ajax({
					url: '/img',
					type: 'POST',
					data: formData,
					processData: false,
					contentType: false,
					success: function(response) {
						console.log('Fichiers envoyés avec succès.');
						location.reload();
					},
					error: function() {
						console.log('Erreur lors de l\'envoi des fichiers.');
					}
				});
			} else {
				alert('Sélectionnez des fichiers avant de soumettre.');
			}
		});
	});
});