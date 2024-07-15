from django.urls import path

from .. import views

urlpatterns = [
    path("", views.index, name="index"),
    path("rumpus_room_brand", views.rumpus_room_brand, name="rumpus_room_brand"),
]