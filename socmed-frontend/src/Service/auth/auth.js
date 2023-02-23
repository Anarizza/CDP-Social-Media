import http from "../http";

export function register(
  givenName,
  surName,
  signUpUsername,
  email,
  phone,
  address,
  birthDate,
  signUpPassword
) {
  return http
    .post("/users", {
      givenName,
      surName,
      signUpUsername,
      email,
      phone,
      address,
      birthDate,
      signUpPassword,
    })
    .post();
}
