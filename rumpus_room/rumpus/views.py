from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.templatetags.static import static
from .models import ForumPost
from rest_framework.decorators import api_view
from rest_framework.response import Response as RestResponse
from .serializers import ForumPostSerializer

def index(request):
    return render(request, "rumpus/index.html", {})

def static_url(request):
    static_url = static("")
    print('static_url')
    print(static_url)
    url = {"url": static_url}
    return JsonResponse(url)

#FORUM POST
@api_view(['GET'])
def forum_post_api_overview(request):
    forum_post_api_urls = {
        'List': '/',
        'Create': '/create',
        'Update': '/update/<str:pk>/',
        'Delete': '/delete/<str:pk>/',
    }
    return RestResponse(forum_post_api_urls)

def forum_post(request):
    '''
    Create a ForumPost object and save it to the database.
    '''
    post = ForumPost(body="This is a forum post.")