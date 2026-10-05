export type GalleryImage = { src: string; alt: string };

const photo = (n: number, alt: string): GalleryImage => ({
  src: `/gallery/horizon-${String(n).padStart(2, "0")}.jpg`,
  alt,
});

// Photos are 2:3 portrait (1200×1800).
export const GALLERY_WIDTH = 1200;
export const GALLERY_HEIGHT = 1800;

export const galleryImages: GalleryImage[] = [
  photo(1, "Lime green sweet potato vine on the bench"),
  photo(3, "Bronze sweet potato vine in nursery pots"),
  photo(4, "Red, pink and white verbena with plant sign"),
  photo(5, "Dark and lime potato vine side by side"),
  photo(6, "White and purple flowering annuals"),
  photo(7, "Bright red and pink annuals on the bench"),
  photo(8, "Hot pink flowers in nursery pots"),
  photo(9, "Close-up of pink blooms"),
  photo(10, "SunPatiens display with plant sign"),
  photo(12, "Potted herbs on the bench"),
  photo(13, "Young plants in labeled terracotta-colored pots"),
  photo(14, "The Horizon Gardens yard and pavilion"),
  photo(15, "Pandanus trees in the yard under a blue sky"),
  photo(16, "Glazed ceramic pots and planters"),
  photo(18, "Moss rose with plant sign"),
  photo(19, "Pentas in bloom with plant sign"),
  photo(20, "Pink penta beds in the nursery"),
  photo(21, "Sedum groundcover with plant sign"),
  photo(22, "Hibiscus with plant sign"),
  photo(23, "Plumbago with plant sign"),
  photo(24, "Firespike Red with plant sign"),
  photo(25, "Poodle-cut topiaries in a row"),
  photo(26, "Sculpted topiary trees on the lot"),
  photo(27, "Rows of topiaries in the growing yard"),
  photo(28, "Standard ball topiaries"),
  photo(29, "Large container shrub in the yard"),
  photo(30, "Columnar shrubs and palms"),
  photo(31, "Rows of landscape shrubs and ornamental grasses"),
  photo(32, "Ixora with plant sign"),
  photo(33, "Tall podocarpus and palms along the lot"),
  photo(34, "Bougainvillea with plant sign"),
  photo(35, "Rows of potted spiky landscape plants"),
  photo(36, "Pom-pom topiaries on the lot"),
  photo(37, "Shade House sign"),
  photo(38, "Vining plants on a white trellis in the shade house"),
  photo(39, "Split-leaf philodendron in the shade house"),
  photo(40, "Variegated foliage plants under shade cloth"),
  photo(41, "Tropical foliage plants in the shade house"),
  photo(42, "Dracaena and tropical plants in a planter box"),
  photo(43, "Foliage plants on a pallet display"),
  photo(44, "Dieffenbachia and red bromeliad in a planter"),
  photo(45, "Shade house aisle lined with tropical plants"),
  photo(46, "Bromeliads on tiered shelves"),
  photo(47, "Close-up of a red bromeliad"),
  photo(48, "Glazed blue pot with cordyline and flowers"),
  photo(49, "Decorative face planter with ornamental grass"),
  photo(50, "Hanging baskets of pink flowers under the pavilion"),
];

/** Look up gallery photos by their original photo number, in the given order. */
export function galleryPhotos(numbers: number[]): GalleryImage[] {
  return numbers
    .map((n) => galleryImages.find((img) => img.src === photo(n, "").src))
    .filter((img): img is GalleryImage => img !== undefined);
}

export const productGalleries = {
  flowers: galleryPhotos([19, 22, 34, 47, 23, 24, 46, 32, 20, 50, 48, 44]),
  annuals: galleryPhotos([4, 10, 7, 6, 18, 8, 9, 1, 5, 3]),
  topiaries: galleryPhotos([25, 36, 26, 28, 27, 30, 33]),
  "landscape-plants": galleryPhotos([
    35, 39, 31, 40, 42, 29, 41, 21, 45, 13, 38, 43,
  ]),
};
