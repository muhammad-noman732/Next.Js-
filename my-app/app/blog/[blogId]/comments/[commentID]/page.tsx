type BlogProps = {
  params: {
    blogId: string;
    commentID: string;
  };
};

async function Comment({ params }: BlogProps) {
  const { blogId } = await params;
  console.log(await params);
  const { commentID } = await params;

  return (
    <>
      <div>
        comment {commentID} for the {blogId} blog{" "}
      </div>
    </>
  );
}

export default Comment;
