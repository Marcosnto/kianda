// type LoginProps = {
//   email: string;
//   password: string;
// };

// async function fetchLogin(data: LoginProps) {
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({ username: data.email, password: data.password }),
//   };

//   const apiRes = await fetch(
//     "http://tns-back.local/wp-json/jwt-auth/v1/token",
//     options
//   );

//   if (!apiRes.ok) {
//     throw new Error("Something go wrong on login");
//   }

//   return apiRes.json();
// }

// export default fetchLogin;
