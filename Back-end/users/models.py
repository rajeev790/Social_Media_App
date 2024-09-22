from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Additional fields for the user model can be added here
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True, null=True)
    following = models.ManyToManyField('self', symmetrical=False, related_name='followers', blank=True)

    def __str__(self):
        return self.username
