import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Loading from "@/components/Loading";
import View from "@/components/View";
import Link from "next/link";
import { Suspense } from "react";

export default function Blog() {
  console.log("blog page");
  return (
    <>
      <div>
        blog page
        <ul className="flex flex-col gap-5">
          <Link href="/blog/1" prefetch={false}>
            Blog 1{" "}
          </Link>
          <Link href="/blog/2">Blog 2</Link>
          <Link href="/blog/3">Blog 3</Link>
        </ul>
        <div className="flex flex-col gap-5S">
          <Suspense fallback={<Loading>Likes</Loading>}>
            <Likes />
          </Suspense>
          <Suspense fallback={<div>Loading Views...</div>}>
            <View />
          </Suspense>
          <Suspense fallback={<div>Loading comments...</div>}>
            <Comments />
          </Suspense>
        </div>
      </div>
    </>
  );
}
