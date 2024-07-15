from .urls import urlpatterns as rumpus_urls
from .rest_api_urls import urlpatterns as rest_api_urls

urlpatterns = rumpus_urls + rest_api_urls