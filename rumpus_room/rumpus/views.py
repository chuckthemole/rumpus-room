from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from .models import ForumPost
from rest_framework.response import Response as RestResponse
from rest_framework import status, viewsets, permissions
from .serializers import UserSerializer, ForumPostSerializer

def index(request):
    return render(request, "rumpus/index.html", {})

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all().order_by('-date')
    serializer_class = ForumPostSerializer
    permission_classes = [permissions.AllowAny]