// app/dynamicrendering/[slugId]/loading.tsx

// here we have loading that is prefetched and make look like scren is not stuck
export default function Loading() {
  return (
    <div>
      <div style={{ height: 80, background: "#0d9488" }} />{" "}
      {/* header placeholder */}
      <div style={{ padding: 32 }}>
        <div>Loading dynamic content...</div>
      </div>
    </div>
  );
}
