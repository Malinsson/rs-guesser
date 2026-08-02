import { readFile } from "node:fs/promises";
import { join } from "node:path";

import type { Route } from "./+types/image";
import { getImageManifestEntry } from "~/lib/imageManifest.server";

export async function loader({ params }: Route.LoaderArgs) {
  const imageId = params.imageId;
  const entry = imageId ? getImageManifestEntry(imageId) : null;

  if (!entry) {
    throw new Response("Image not found", { status: 404 });
  }

  const filePath = join(process.cwd(), "public", entry.filePath);
  const imageData = await readFile(filePath);

  return new Response(imageData, {
    headers: {
      "Content-Type": entry.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

export default function ImageRoute() {
  return null;
}