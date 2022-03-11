// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Post from './Post';

// const PostsList = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios
//             .get('https://jsonplaceholder.typicode.com/posts/')
//             .then(res => setPosts(res.data));
//     }), [];


//     return (
//         <ul className="posts">
//             {
//                 posts.map(post => <Post post={post} key={post.id} />)
//             }
//         </ul>
//     );
   
// };

// export default PostsList;