import * as yup from "yup";

export const formSchema = yup.object().shape({
  givenName: yup
    .string()
    .required("* First name is required")
    .matches(/^[A-Za-z]+$/, "* First name should only contain letters")
    .min(2, "* First name should be at least 2 characters"),
  surName: yup
    .string()
    .required("* Last name is required")
    .matches(/^[A-Za-z]+$/, "* Last name should only contain letters")
    .min(2, "* Last name should be at least 2 characters"),
  signInUsername: yup
    .string()
    .required("* Username is required")
    .min(3, "* Username sample")
    .max(20, "* Username sample"),
  signUpUsername: yup
    .string()
    .required("* Username is required")
    .min(3, "* Username should be at least 3 characters")
    .max(20, "* Username should be at most 20 characters"),
  email: yup
    .string()
    .email("* Please enter a valid email address")
    .test("domain", "* Please enter a valid email address", (value) => {
      if (value) {
        const atIndex = value.indexOf("@");
        if (atIndex >= 0) {
          const [, domain] = value.split("@");
          const [, tld] = domain.split(".");
          return tld === "com" || tld === "net";
        }
      }

      return false;
    })
    .required("* Email is required"),
  phone: yup
    .string()
    .nullable()
    .matches(
      /^(09|\+639)\d{9}$/,
      "* Please enter a valid Philippine phone number"
    ),
  address: yup
    .string()
    .min(3, "* Address should be at least 3 characters")
    .max(500, "* Address should not be more than 500 characters")
    .required("* Required"),
  birthDate: yup
    .date()
    .max(new Date(), "* Birthdate cannot be in the future")
    .required("* Birthdate is required"),
  signUpPassword: yup
    .string()
    .min(8, "* Password must be at least 8 characters long")
    .max(20, "* Password must be at most 20 characters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
      "* Password must include at least one letter, one number, and one special character"
    )
    .required("* Please enter your password"),
  signInPassword: yup
    .string()
    .min(8, "* Password sample")
    .max(20, "* Password must be at most 20 characters long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
      "* hello"
    )
    .required("* Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("signUpPassword"), null], "* Password does not match")
    .required("* Required"),
});
