import Swal from "sweetalert2";

export const showSuccessAlert = (message) => {
  return Swal.fire({
    icon: "success",
    title: "Success",
    text: message,
    confirmButtonText: "OK",
  });
};

export const showErrorAlert = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Something went wrong",
    text: message,
    confirmButtonText: "OK",
  });
};

export const showWarningAlert = (message) => {
  return Swal.fire({
    icon: "warning",
    title: "Warning",
    text: message,
    confirmButtonText: "OK",
  });
};