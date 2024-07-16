from django.urls import path

from .. import views

urlpatterns = [
    path("", views.index, name="index"),
    path("static_url/", views.static_url, name="static_url"),
    path("forum_post/", views.forum_post, name="forum_post"),
]