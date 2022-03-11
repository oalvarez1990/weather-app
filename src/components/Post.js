// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Post = ([post]) => {

//     const [user, setuser] = useState({})

//     useEffect(() => {
//         axios
//             .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//             .then((res) => setuser(res.data))
//     }, [post.userId])

//     return (
//         <li className="column">
//             <div className="card">
//                 <h4>{post.title}</h4>
//                 <p>{post.body}</p>
//                 <p>
//                     <b>{user.name}</b>
//                 </p>
//             </div>
//         </li>
//     );
// };

// export default Post;