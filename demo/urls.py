from django.conf.urls import patterns, url
from demo.views import IndexView, BasicView, DirectiveView, CustomDirectiveView

urlpatterns = patterns('',
    url(r'index', IndexView.as_view()),
    url(r'basic', BasicView.as_view()),
    url(r'directive', DirectiveView.as_view()),
    url(r'custom', CustomDirectiveView.as_view()),
)
