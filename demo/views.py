from django.views.generic import TemplateView

# Create your views here.


class IndexView(TemplateView):
    template_name = "demo/index.html"


class BasicView(TemplateView):
    template_name = 'demo/basic.html'


class DirectiveView(TemplateView):
    template_name = 'demo/directive.html'


class CustomDirectiveView(TemplateView):
    template_name = 'demo/custom.html'
