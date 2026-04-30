type FileProps = {
  params: {
    filePath: string[];
  };
};
export default async function Files({ params }: FileProps) {
  console.log("params", await params);
  const { filePath } = await params;

  return (
    <>
      <div>
        File <li className="text-4xl text-strong">{filePath?.join("/")}</li>
      </div>
    </>
  );
}
