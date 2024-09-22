from django.contrib import admin
from .models import Post, Comment, Like

class CommentInline(admin.TabularInline):
    model = Comment
    extra = 1

class PostAdmin(admin.ModelAdmin):
    inlines = [CommentInline]
    list_display = ('author', 'created_at', 'updated_at', 'content')
    list_filter = ('created_at', 'updated_at')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'content', 'created_at')
    list_filter = ('created_at',)

class LikeAdmin(admin.ModelAdmin):
    list_display = ('post', 'user')
    list_filter = ('created_at',)

admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Like, LikeAdmin)
