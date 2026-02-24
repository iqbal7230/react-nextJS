import Image from "next/image";
import PopupButton from "./components/PopupButton";
import { revalidateImages } from "./actions";

async function getImages() {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=4", {
    cache: "force-cache",
    next: { tags: ["images"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const images = await getImages();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <main>
        <header style={{ marginBottom: "20px" }}>
          <h1>Next.js Advanced Features</h1>
          <p>Demonstrating Next.js features with minimal CSS.</p>
        </header>

        <section
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2>Image Gallery</h2>
            </div>
            <form action={revalidateImages}>
              <button type="submit" style={{ padding: "5px 10px" }}>
                Purge Cache
              </button>
            </form>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {images.map((image: any) => (
              <div
                key={image.id}
                style={{
                  width: "200px",
                  height: "200px",
                  position: "relative",
                }}
              >
                <Image
                  src={image.download_url}
                  alt={`Image by ${image.author}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>

        <section style={{ border: "1px solid #ccc", padding: "20px" }}>
          <h2>Dynamic Components</h2>
          <PopupButton />
        </section>
      </main>
    </div>
  );
}
