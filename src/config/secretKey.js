// deteksi otomatis apakah app kita ada di dev atau di production

export const SECRET_KEY =
  process.env.NODE_ENV === "development"
    ? process.env.SECRET_KEY_DEV
    : process.env.SECRET_KEY_PROD;
