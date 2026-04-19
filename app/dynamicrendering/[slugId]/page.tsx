type Props = {
  params: Promise<{
    slugId: string;
  }>;
};

export default async function DynamicRendering({ params }: Props) {
  const { slugId } = await params;
  console.log(await params);
  console.log("slugID", slugId);

  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <>
      <div>
        <h2>Dynamic rendering understanding</h2>
        <p>this is the {slugId}</p>
      </div>
    </>
  );
}
