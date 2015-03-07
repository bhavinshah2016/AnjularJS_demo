from django.views.generic import TemplateView

# Create your views here.


class IndexView(TemplateView):
    template_name = "demo/index.html"


class BasicView(TemplateView):
    template_name = 'demo/basic.html'