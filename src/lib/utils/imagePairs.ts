interface Image {
    before: string;
    after: string;
}

// Import all images from the correct directory
const beforeImages = import.meta.glob('../../assets/before/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, { default: string }>;
const afterImages = import.meta.glob('../../assets/after/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, { default: string }>;

export function getImagePairs(name : string | null): Image[] {
    const images : Image[] = [];
    Object.keys(beforeImages).map(beforePath => {
        const filename = beforePath.split('/').pop(); // Extract filename
        if (filename) {
            if (name) {
                const baseName = filename.replace(/\d+\.[^.]+$/, ''); // Remove trailing numbers before the file extension
                console.log(baseName)
                if (baseName === name) {
                    const afterPath = `../../assets/after/${filename}`; // Construct the expected after image path
                    images.push({
                        before: beforeImages[beforePath].default, // Get the before image
                        after: afterImages[afterPath]?.default || "", // Get the after image or an empty string if missing
                    })
                }
            } else {
                const afterPath = `../../assets/after/${filename}`; // Construct the expected after image path
                images.push({
                    before: beforeImages[beforePath].default, // Get the before image
                    after: afterImages[afterPath]?.default || "", // Get the after image or an empty string if missing
                })
            }
        }
    });

    return images;
}
