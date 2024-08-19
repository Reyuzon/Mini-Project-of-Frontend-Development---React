import toast from "react-hot-toast";

export const toastSuccess = (message) => {
  toast.remove();
  return toast.success(message, {
    className: "shadow-md",
    iconTheme: {
      primary: "rgb(34 197 94)",
      secondary: "#FFFFFF",
    },
    style: {
      borderRadius: "1.5rem",
    },
  });
};

export const toastLoading = (message) => {
  toast.remove();
  return toast.loading(message, {
    className: "shadow-md",
    style: {
      borderRadius: "1.5rem",
    },
  });
};

export const toastError = (message) => {
  toast.remove();
  return toast.error(message, {
    className: "shadow-md",
    iconTheme: {
      primary: "rgb(239 68 68)",
      secondary: "#FFFFFF",
    },
    style: {
      borderRadius: "1.5rem",
    },
  });
};
