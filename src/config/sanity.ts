import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const sanityClient = createClient({
  projectId: "ba2k47o3",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-10",
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export default sanityClient;
