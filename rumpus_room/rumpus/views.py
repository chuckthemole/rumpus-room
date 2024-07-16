from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.templatetags.static import static

def index(request):
    return render(request, "rumpus/index.html", {})

def static_url(request):
    static_url = static("")
    print('static_url')
    print(static_url)
    url = {"url": static_url}
    return JsonResponse(url)