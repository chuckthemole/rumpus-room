from django.urls import path, include

from .. import views
from rest_framework import routers
from ..views import UserViewSet, ForumPostViewSet

# Routers provide an easy way of automatically determining the URL conf
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'forum_posts', ForumPostViewSet)

urlpatterns = [
    path("", include(router.urls)),
]