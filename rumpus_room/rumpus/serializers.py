from django.db.models import fields
from rest_framework import serializers
from .models import ForumPost
 
class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = ('body', 'date')