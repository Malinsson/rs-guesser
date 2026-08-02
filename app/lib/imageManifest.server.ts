import { readFile } from "node:fs/promises";
import { join } from "node:path";

const imageManifest: Record<string, { filePath: string; contentType: string }> = {
  "herb-01": { filePath: "images/herbs/Guam_leaf.webp", contentType: "image/webp" },
  "herb-02": { filePath: "images/herbs/Marrentill.webp", contentType: "image/webp" },
  "herb-03": { filePath: "images/herbs/Tarromin.webp", contentType: "image/webp" },
  "herb-04": { filePath: "images/herbs/Harralander.png", contentType: "image/png" },
  "herb-05": { filePath: "images/herbs/Ranarr_weed.webp", contentType: "image/webp" },
  "herb-06": { filePath: "images/herbs/Toadflax.webp", contentType: "image/webp" },
  "herb-07": { filePath: "images/herbs/Irit_leaf.png", contentType: "image/png" },
  "herb-08": { filePath: "images/herbs/Avantoe.webp", contentType: "image/webp" },
  "herb-09": { filePath: "images/herbs/Kwuarm.webp", contentType: "image/webp" },
  "herb-10": { filePath: "images/herbs/Snapdragon.webp", contentType: "image/webp" },
  "herb-11": { filePath: "images/herbs/Cadantine.webp", contentType: "image/webp" },
  "herb-12": { filePath: "images/herbs/Lantadyme.webp", contentType: "image/webp" },
  "herb-13": { filePath: "images/herbs/Dwarf_weed.webp", contentType: "image/webp" },
  "herb-14": { filePath: "images/herbs/Torstol.webp", contentType: "image/webp" },
  "herb-15": { filePath: "images/herbs/Huasca.webp", contentType: "image/webp" },
  "seed-01": { filePath: "images/seeds/Guam_seed_5.webp", contentType: "image/webp" },
  "seed-02": { filePath: "images/seeds/Marrentill_seed_5.png", contentType: "image/png" },
  "seed-03": { filePath: "images/seeds/Tarromin_seed_5.png", contentType: "image/png" },
  "seed-04": { filePath: "images/seeds/Harralander_seed_5.png", contentType: "image/png" },
  "seed-05": { filePath: "images/seeds/Ranarr_seed_5.png", contentType: "image/png" },
  "seed-06": { filePath: "images/seeds/Toadflax_seed_5.png", contentType: "image/png" },
  "seed-07": { filePath: "images/seeds/Irit_seed_5.png", contentType: "image/png" },
  "seed-08": { filePath: "images/seeds/Avantoe_seed_5.png", contentType: "image/png" },
  "seed-09": { filePath: "images/seeds/Kwuarm_seed_5.png", contentType: "image/png" },
  "seed-10": { filePath: "images/seeds/Snapdragon_seed_5.png", contentType: "image/png" },
  "seed-11": { filePath: "images/seeds/Cadantine_seed_5.png", contentType: "image/png" },
  "seed-12": { filePath: "images/seeds/Lantadyme_seed_5.png", contentType: "image/png" },
  "seed-13": { filePath: "images/seeds/Dwarf_weed_seed_5.png", contentType: "image/png" },
  "seed-14": { filePath: "images/seeds/Torstol_seed_5.png", contentType: "image/png" },
  "seed-15": { filePath: "images/seeds/Huasca_seed_5.webp", contentType: "image/webp" },
};

export function getImageManifestEntry(imageId: string) {
  return imageManifest[imageId] ?? null;
}

export async function getImageDataUrl(imageId: string) {
  const entry = getImageManifestEntry(imageId);

  if (!entry) {
    return null;
  }

  const filePath = join(process.cwd(), "public", entry.filePath);
  const fileBuffer = await readFile(filePath);

  return `data:${entry.contentType};base64,${fileBuffer.toString("base64")}`;
}