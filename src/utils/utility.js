import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const showToast = (type, message) => {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  } else if (type === "info") {
    toast.info(message, options);
  } else if (type === "warning") {
    toast.warn(message, options);
  }
};

export function useUserGeo(defaultCountry = "gb", defaultLang = "en") {
  const [country, setCountry] = useState(defaultCountry || "");
  const [lang, setLang] = useState(defaultLang || "");

  useEffect(() => {
    async function fetchGeo() {
      try {
        // const detectedCountry = await getUserCountry();
        // setCountry(detectedCountry);
        setCountry("gb");
      } catch {
        // setCountry(defaultCountry);
        setCountry("gb");
      }

      // const detectedLang = getUserLanguage();
      // setLang(detectedLang);
      setLang("en");
    }

    fetchGeo();
  }, [defaultCountry, defaultLang]);

  return { country, lang };
}

export function getUserLanguage() {
  // Detect browser language (optional)
  const lang =
    typeof navigator !== "undefined" && navigator.language
      ? navigator.language.split("-")[0] // e.g. "en"
      : "en";
  return "en";
}

export async function getUserCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    // return data.country_code.toLowerCase(); // e.g. "in", "gb"
    return "gb";
  } catch (error) {
    console.error("Geo lookup failed:", error);
    return "gb"; // fallback to India as requested
  }
}

export function c(array, fromIndex) {
  if (fromIndex > 0 && fromIndex < array.length) {
    const newArr = array.slice();
    const [item] = newArr.splice(fromIndex, 1);
    return [item, ...newArr];
  }
  return array.slice();
}

export const safeLocalStorage = {
  getItem(key) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem(key, value) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },
  removeItem(key) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
};

export function clearAuthData() {
  const keysToRemove = [
    "barkToken",
    "barkUserToken",
    "registerDataToken",
    "registerTokens",
    "createRequestToken",
    "createRequest",
  ];

  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });
}

export function changeSequenceServices(array, fromIndex) {
  if (fromIndex > 0 && fromIndex < array.length) {
    const newArr = array.slice();
    const [item] = newArr.splice(fromIndex, 1);
    return [item, ...newArr];
  }
  return array.slice();
}
export const BASE_IMAGE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
export const BASE_URL_IMAGE = `${BASE_IMAGE_URL}storage/app/public/images/category/`;
export const BASE_IMAGE = `${BASE_IMAGE_URL}storage/app/public/images/`;
export const BASE_COMPLETE = `${BASE_IMAGE_URL}`;
