from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from .models import ForumPost, Like
from rest_framework.response import Response as RestResponse
from rest_framework import status, viewsets, permissions
from .serializers import UserSerializer, ForumPostSerializer, LikeSerializer

def index(request):
    return render(request, "rumpus/index.html", {})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all().order_by('-count')
    serializer_class = LikeSerializer
    permission_classes = [permissions.AllowAny]

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all().order_by('-date')
    serializer_class = ForumPostSerializer
    permission_classes = [permissions.AllowAny]