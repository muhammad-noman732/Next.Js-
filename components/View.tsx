export default async function View() {
  await new Promise((resolve) => setTimeout(resolve, 6000));

  return <section>10K view</section>;
}
