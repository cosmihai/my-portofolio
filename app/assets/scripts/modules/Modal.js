class Modal {
	constructor() {
		this.injectHtml();
		this.closeModalBtn = document.querySelector(".modal__close");
		this.events();
	}

	injectHtml() {
		document.body.insertAdjacentHTML('beforeend', `
			<div class="modal">
				<div class="modal__content">
				<h2 class="section-title section-title--no-t-margin"><img class="section-title__icon" src="assets/images/mail.svg" alt="mail">  Get in<strong> Touch</strong></h2>
				<p class="section-subtitle">Send me an e-mail to: <a href="mailto:contact@mihai-costantea.me"><strong>contact@mihai-costantea.me</strong></a></p>
				<p class="section-subtitle"> - or - </p>
				<p class="section-subtitle">contact me on <a href="https://www.linkedin.com/in/mihai-costantea-647534162/" target="_blank"><strong>LinkedIn</strong></a></p>
				<p class="section-subtitle"> - and also - </p>
				<p class="section-subtitle">visit my <a href="https://github.com/cosmihai" target="_blank"><strong>GitHub account</strong></a></p>
				</div>
				<div class="modal__close">X</div>
			</div>
		`)
	}

	events() {
		//clicking the x close modal button
		this.closeModalBtn.addEventListener('click', this.closeModal)
		// press any key
		document.addEventListener('keyup', this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal()
		}
	}

	openModal() {
		document.querySelector('.modal').classList.add("modal--is-visible");
	}

	closeModal() {
		document.querySelector('.modal').classList.remove("modal--is-visible")
	}
}

export default Modal;