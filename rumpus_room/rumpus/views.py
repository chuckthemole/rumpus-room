from django.shortcuts import render
from django.http import HttpResponse
from django.templatetags.static import static

def index(request):
    return render(request, "rumpus/index.html", {})

def rumpus_room_brand(request):
    static_url = static("rumpus/images/default_brand.png")
    print('rumpus room brand url: ' + static_url)
    return render(request, static_url, {"static_url": static_url})