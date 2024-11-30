import { blogs } from "@/constants";

const PostDetails = ({ params }: { params: { url: string } }) => {

  const post = blogs?.find((obj) => obj.url === params.url);
  
  if (!post) return <div>Not Found</div>;

  const { title, src, label } = post;

  return (
    <div>{title}</div>
  )
};

export default PostDetails;
