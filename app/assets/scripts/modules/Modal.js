class Modal {
  constructor() {
    this.openModalBtn = document.querySelector(".open-modal");
    this.modal = document.querySelector(".modal");
    this.closeModalBtn = document.querySelector(".modal__close");
    this.events();
  }

  events() {
    //clicking the open modal button
    this.openModalBtn.addEventListener('click', this.openModal.bind(this))
    //clicking the x close modal button
    this.closeModalBtn.addEventListener('click', this.closeModal.bind(this))
    // press any key
    document.addEventListener('keyup', this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27)
    this.closeModal()
  }

  openModal() {
    this.modal.classList.add("modal--is-visible");
  }

  closeModal() {
    this.modal.classList.remove("modal--is-visible");
  }
}

export default Modal;