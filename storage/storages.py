# storage/storages.py

from storages.backends.s3boto3 import S3Boto3Storage

class MediaStorage(S3Boto3Storage):
    """Custom storage backend for media files on AWS S3."""
    location = 'media'
    file_overwrite = False  # Prevent overwriting files with the same name

# Optionally, you can also define a storage backend for static files if needed
class StaticStorage(S3Boto3Storage):
    """Custom storage backend for static files on AWS S3."""
    location = 'static'
    file_overwrite = False  # Prevent overwriting files with the same name
