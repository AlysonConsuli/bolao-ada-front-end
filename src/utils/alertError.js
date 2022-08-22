import Swal from "sweetalert2";

export const alertError = (error) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text:
      error?.response?.data ||
      "Algo inesperado aconteceu. Atualize a página para tentar novamente",
  });
};
