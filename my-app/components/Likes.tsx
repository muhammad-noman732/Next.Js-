export default async function Likes() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <section>10K Likes</section>;
}
