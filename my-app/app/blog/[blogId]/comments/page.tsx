type BlogProps = {
  params: {
    blogId: string;
  };
};

// here can access the previous dynamic as well
async function Comments({ params }: BlogProps) {
  const { blogId } = await params;

  return (
    <>
      <div>All comments for the {blogId} Blog</div>
    </>
  );
}

export default Comments;
