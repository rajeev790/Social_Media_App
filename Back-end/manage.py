#!/usr/bin/env python
import os
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'social_media.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        try:
            import django
            raise ImportError(
                "Couldn't import Django. Are you sure it's installed and "
                "available on your PYTHONPATH environment variable? Did you "
                "forget to activate a virtual environment?"
            ) from exc
        except ImportError:
            raise
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()