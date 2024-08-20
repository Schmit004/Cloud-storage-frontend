const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

export function isImage(ext: string): boolean {
  return IMAGE_EXTENSIONS.includes(ext.toLowerCase());
}
