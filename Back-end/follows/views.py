from rest_framework import viewsets
from .models import Follow
from .serializers import FollowSerializer
from rest_framework.response import Response
from rest_framework import status

class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

    def create(self, request, *args, **kwargs):
        follower = request.user
        following_id = request.data.get('following')
        following = User.objects.get(id=following_id)
        
        if follower == following:
            return Response({'detail': 'You cannot follow yourself.'}, status=status.HTTP_400_BAD_REQUEST)
        if Follow.objects.filter(follower=follower, following=following).exists():
            return Response({'detail': 'You are already following this user.'}, status=status.HTTP_400_BAD_REQUEST)
        
        return super().create(request, *args, **kwargs)
