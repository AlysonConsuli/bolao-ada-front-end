import Modal from "react-modal";
import * as S from "../../styles/style.js";

export const ModalComponent = ({
  modalState,
  callbackCloseModal,
  callbackFunction,
  message,
}) => {
  Modal.setAppElement(document.querySelector(".root"));

  return (
    <Modal
      isOpen={modalState}
      onRequestClose={() => callbackCloseModal()}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <S.ModalStyle {...props}>{children}</S.ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <S.OverlayStyle {...props}>{contentElement}</S.OverlayStyle>
      )}
    >
      <span>
        Tem certeza que quer <br /> fazer {message}?
      </span>
      <div>
        <button onClick={() => callbackCloseModal()}>Não, voltar</button>
        <button onClick={() => callbackFunction()}>Sim, {message}</button>
      </div>
    </Modal>
  );
};
