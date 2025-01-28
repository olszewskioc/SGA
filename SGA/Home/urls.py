from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('avaliacao', views.avaliacao, name='avaliacao'),
    path('relatorio', views.relatorio, name='relatorio'),
    path('cadastro', views.cadastro, name='cadastro'),
]