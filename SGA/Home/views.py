from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def avaliacao(request):
    return render(request, 'avaliacao.html')

def relatorio(request):
    return render(request, 'relatorio.html')

def cadastro(request):
    return render(request, 'cadastro.html')