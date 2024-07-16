from django.db.models import fields
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import ForumPost

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = ('id', 'body', 'date')