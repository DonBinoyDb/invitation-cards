import os
from PIL import Image

def compress_images(directory, max_size_kb=700):
    max_size_bytes = max_size_kb * 1024
    compressed_count = 0
    failed_count = 0
    
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                # Get file size
                file_size = os.path.getsize(file_path)
                if file_size > max_size_bytes:
                    print(f"Compressing {file_path} (Size: {file_size/1024:.1f} KB)")
                    
                    # Open the image
                    with Image.open(file_path) as img:
                        # Convert to RGB if it's RGBA and we are saving as JPEG
                        ext = os.path.splitext(file_path)[1].lower()
                        
                        # Calculate new size if image is too large (max 1200px)
                        max_dim = 1200
                        if img.width > max_dim or img.height > max_dim:
                            img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                        
                        if ext in ['.jpg', '.jpeg']:
                            img.save(file_path, optimize=True, quality=75)
                        elif ext == '.png':
                            # PNG optimization is limited in PIL, but resize helps
                            # We can just save it. If it's huge, maybe convert to JPEG?
                            # Let's keep it as PNG to preserve transparency.
                            img.save(file_path, optimize=True)
                        elif ext == '.webp':
                            img.save(file_path, quality=75)
                    
                    new_size = os.path.getsize(file_path)
                    print(f"  -> New Size: {new_size/1024:.1f} KB")
                    compressed_count += 1
            except Exception as e:
                print(f"Failed to compress {file_path}: {e}")
                failed_count += 1
                
    return compressed_count, failed_count

if __name__ == '__main__':
    images_dir = os.path.join(os.getcwd(), 'public', 'images')
    print(f"Starting compression in {images_dir}")
    c, f = compress_images(images_dir)
    print(f"Done! Compressed {c} images. Failed {f} images.")
