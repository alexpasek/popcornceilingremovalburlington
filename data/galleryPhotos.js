import fs from "fs";
import path from "path";

export const galleryFilters = [
  { value: "all", label: "All work" },
  { value: "popcorn", label: "Popcorn ceilings" },
];

const PHOTO_DIR = path.join(process.cwd(), "public", "photo");
const VALID_EXT = /\.(jpe?g|png|webp)$/i;

function humanize(filename) {
  const base = filename.replace(/\.[^.]+$/, "");
  const stripped = base.replace(/^\d+/, "");
  const words = stripped
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1));
  return words.join(" ") || "Burlington popcorn ceiling project";
}

function loadPhotos() {
  if (!fs.existsSync(PHOTO_DIR)) return [];
  const files = fs
    .readdirSync(PHOTO_DIR)
    .filter((file) => VALID_EXT.test(file))
    .sort();
  return files.map((file, index) => {
    const title = humanize(file);
    const rows = (index + 3) % 7 === 0 ? 2 : undefined;
    const cols = (index + 5) % 11 === 0 ? 2 : undefined;
    return {
      id: `photo-${index + 1}`,
      src: `/photo/${file}`,
      alt: `${title} — Popcorn Ceiling Removal Burlington`,
      category: "popcorn",
      title,
      location: "Burlington, ON",
      ...(rows ? { rows } : {}),
      ...(cols ? { cols } : {}),
    };
  });
}

export const galleryPhotos = loadPhotos();
