
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from blog.views import frontpage, post_detail

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", frontpage),
    path("<slug:slug>/", post_detail, name="post_detail")
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)