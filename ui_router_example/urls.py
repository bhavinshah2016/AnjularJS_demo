from django.conf.urls import url, patterns
from ui_router_example.views import *

urlpatterns = patterns('',
    url(r'index',IndexView.as_view()),        
)
