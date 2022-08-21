import Swal from "sweetalert2";

export const alertError = (error) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text:
      error?.response?.data ||
      "Something unexpected happened. Refresh the page to try again",
  });
};
