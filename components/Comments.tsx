export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return <section>500 comments</section>;
}
