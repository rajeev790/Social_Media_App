from django.contrib import admin
from .models import Follow

class FollowAdmin(admin.ModelAdmin):
    list_display = ('follower', 'following', 'created_at')
    list_filter = ('created_at',)

admin.site.register(Follow, FollowAdmin)
