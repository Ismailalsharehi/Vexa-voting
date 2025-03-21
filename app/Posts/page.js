import Todo from "../components/todo";

export default async function PostPage() {
  const result = await fetch ('https://jsonplaceholder.typicode.com/posts',
  {
    next:{
      revalidate : 60,
    },
  });

  const posts = await result.json();
  const postsJSX = posts.map((post)=>{
    return(
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  });
      console.log(posts);
  
  return (
    
      <div>
        <div>
            <h1>That is me</h1>
            

        </div>

        {/* <div>
          <Todo />
        </div> */}

      </div>  
    
  );
}
