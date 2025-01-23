export function add(x, y) {
  return x + y;
}

// export function getUsers() {
//   async function users() {
//     let loading = document.querySelector(".loading");
//     try {
//       let result = await fetch("https://jsonplaceholder.typicode.com/posts?");
//       let users = await result.json();
//       if (!result.ok) {
//         throw new Error("Couldn't Fetch the data");
//       }
//       console.log(users);
//       loading.classList.add("d-none");
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   users();
// }
